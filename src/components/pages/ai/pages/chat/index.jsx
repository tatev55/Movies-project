import { Box, IconButton, TextField, Typography, CircularProgress  } from "@mui/material";

import ExploreIcon from  "@mui/icons-material/Explore";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ChatIcon from "@mui/icons-material/Chat";
import CodeIcon from "@mui/icons-material/Code";
import SendIcon from "@mui/icons-material/Send";

import PromptCard from "../../components/card/index";


import { useDispatch, useSelector } from "react-redux";
import { setInput, onSent, addToHistory} from "../../../../../redux/chat-reducer/chat-actions";

import {useState} from "react"


const prompts = [
    {
        id: 1,
        text: "Tell me the best movies in the action genre?",
        icon : <ExploreIcon />
    },

    {
        id: 2,
        text: "What are the highest-grossing movies of all time?",
        icon : <LightbulbIcon />
    },
    {
        id: 3,
        text:  "What are the top trending movies right now?",
        icon : <ChatIcon />
    },
    {
        id: 4,
        text: "Suggest some must-watch movies for a movie night?",
        icon : <CodeIcon />
    },
]   


const Chat = () => {
    const dispatch = useDispatch();
    const {input, showResult, loading, resultData } = useSelector((state)=> state.chatReducer);
    const[inputInMemory, setInputInMemory] = useState('')

    const handleSelectPromptCard = (text) => {
        setInputInMemory(text)
    }

    
    const handleSubmit = () => {
        dispatch(setInput(inputInMemory));
        dispatch(onSent());
        dispatch(addToHistory(inputInMemory))
        setInputInMemory('');
        
    }
  
  
    return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            minHeight: "500px",
            width: "100%",
          }}
        >
          <Box sx={{ flex: 1, overflowY: "auto", p: 2, }}>
            {!showResult ? (
              <>
                <Typography variant="h4" sx={{ fontWeight: 500, color: "#B9C1D5 " }}>
                  Hello, Dev
                </Typography>
                <Typography variant="h5" sx={{ m: 3 , color: '#B9C1D5 '}}>
                  How can I help you today?
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 2,
                    justifyContent: "space-between",  
                    alignItems: "center", 
        
                  }}
                >
                  {prompts.map(({ text, icon, id }) => (
                    <PromptCard
                
                      key={id}
                      text={text}
                      icon={icon}
                      onSelect={handleSelectPromptCard}
      
                    />
                  ))}
                </Box>
              </>
            ) : (
              <Box sx={{ maxHeight: "70vh", overflowY: "auto", padding: "0 30px ", }}>
                {loading ? (
                  <>
                    <CircularProgress />
                    <Typography variant="body1"
                        sx={{
                          color: '#ffff' ,
                          padding: "10px",  
                          marginLeft: "auto",  
                          wordWrap: "break-word",
                          marginTop: "30px",
                          fontSize: "25px"
                        }}
                        dangerouslySetInnerHTML={{ __html: 'Loading...' }}/>
                  </>
                ) : (
                  <>
                    <Typography variant="body1"
                        sx={{
                          textAlign: "right",
                          color: '#B9C1D5' , 
                          marginLeft: "auto",  
                          wordWrap: "break-word",
                          marginTop: "70px",
                          fontSize: '20px',
      
                        }} 
                      
                        dangerouslySetInnerHTML={{ __html: input }}/>
                    {resultData && <Typography variant="h6" sx={{ mb: 2, color: '#B9C1D5' }}>
                      Here's what I found:
                    </Typography>}
                    <Typography
                      variant="body1"
                      dangerouslySetInnerHTML={{ __html: resultData }}
                      sx = {{
                        color: '#B9C1D5' 
                      }}
                    />
                  </>
                )}
              </Box>
            )}
          </Box>
          <Box
            sx={{
              p: 2,
              boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
              borderRadius: '8px',
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#0A0E1F",
                borderRadius: 50,
                p: 1,
              }}
            >
              
              <TextField
                  fullWidth
                  multiline
                  variant="outlined"
                  placeholder="Enter a prompt here"
                  onChange={(e) => setInputInMemory(e.target.value)}
                  value={inputInMemory}
                  onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
                  sx={{
                    border: '1px solid white', 
                    outline: "none", 
                    borderRadius: "10px",
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', 
                      },
                      
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent', 
                        outline: 'none', 
                      },
                    },
                  }}
                  inputProps={{
                    style: {
                      color: 'white',
                    },
                  }}
                />
              <IconButton onClick={handleSubmit}>
                <SendIcon  sx = {{color : "#fff"}}/>
              </IconButton>
            </Box>
          </Box>
        </Box>
      );
};


export default Chat;

