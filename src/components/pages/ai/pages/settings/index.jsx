import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setApiKey } from "../../../../../redux/chat-reducer/chat-actions";
import { showAlert } from "../../../../../redux/alert-reducer/alert-reducer";

import { geminiService } from "../../../../../api/gemini";


const Settings = () => {
    
    const dispatch = useDispatch();
    const {apiKey} = useSelector((state) => state.chatReducer);
    const [apiKeyInMemory, setApiKeyInMemory] = useState(apiKey);

    const handleSaveApiKey = () => {
        if(!apiKeyInMemory){
            dispatch(showAlert('Please enter your API key', "error"))
            return;
        }

       dispatch(setApiKey(apiKeyInMemory));
       dispatch(showAlert("You have initialized successfully", "success"));
       geminiService.initialize(apiKeyInMemory);
     
    }

   
    return (
        <Box sx = {{
            height: "100%",
            display: "flex",
            justifyContent: "center",   
            flexDirection: "column",
            alignItems: "center",
            color: "#B9C1D5",
            mb:30
        }}>
            <Box sx = {{textAlign: "center"}}>
                <Typography variant="h4">Settings</Typography>
                <Typography 
                    variant="body1"
                    color="#B9C1D5"
                    textAlign="center"

                    mb={2}>Enter your API key below to connect your AI workflow with external services.
                </Typography>
                <TextField 
                    value = {apiKeyInMemory}
                    type="password"
                    onChange={(e) => setApiKeyInMemory(e.target.value)}
                    label = "Api Key"
                    fullWidth
                    sx = {{mb: 2,
                            '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white', 
                            },
                            '&:hover fieldset': {
                            borderColor: 'white', 
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white', 
                            },
                            '& input': {
                            color: 'white', 
                            },
                            '& input::placeholder': {
                                color: 'white', 
                            },
                            },
                            '& .MuiInputLabel-root': {
                            color: 'white', 
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                            color: 'white', 
                            },
                    }}
                    
                />

                <Button 
                    variant="contained" 
                    onClick = {handleSaveApiKey}
                    sx = {{
                        backgroundColor: "#E50914",
                    }}
                >
                    Save API Key
                </Button>
                
            </Box>

        </Box>
    )

}

export default Settings;





 