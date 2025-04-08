import {Box, Typography } from "@mui/material"
import {  useSelector, useDispatch } from "react-redux";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteFromHistory } from "../../../../../redux/chat-reducer/chat-actions";



const History = () => {
        const dispatch = useDispatch();
        const { chatHistory } = useSelector((state) => state.chatReducer);
    
        const handleDelete = (index) => {
            dispatch(deleteFromHistory(index)); 
             
        };
   
   
    return (
        <>
            <Typography variant="h5" sx= {{ color: '#fff ', mt:15,mb: 6, textAlign: "center"}}>
                History of your activities in AI ASSISTENT 
            </Typography>
            <Box 
                sx = {{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width:"auto",
                    height: "auto",
                    overflow: "auto"
                }}>
                {chatHistory.map((entry, index) => {
                    const timestamp = new Date(entry.timestamp);
                    const formattedTime = timestamp.toLocaleString();
                    return (
                        <Box key= {index} 
                            sx= {{
                                margin: "20px",
                                display:"flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                alignItems: "center",
                                width: "500px",
                                height: "200px",
                                position: "relative",
                                textAlign: "center",
                                padding: "20px 50px",
                                color: "#B9C1D5",
                                backgroundColor: "#1B1F3F"
                                }}>
                            <Typography>
                                <strong>{formattedTime}</strong>
                            </Typography>
                            <Typography > 
                                The request <strong> {entry.prompt}</strong> has been sent 
                            </Typography>
                            <IconButton aria-label="delete" size="small" 
                                sx={{
                                    position: "absolute", 
                                    top: "0",
                                    right: "0", 
                                    color: "gray",
                                  }}
                                  onClick={() => handleDelete(index)}>
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    )
                })}
            </Box>
        </>
    )
}


export default History