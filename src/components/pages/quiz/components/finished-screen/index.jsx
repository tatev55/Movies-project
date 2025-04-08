import { Typography, Box, Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { startAgain, closeFinishScreen } from "../../../../../redux/quiz-reducer/quiz-actions";
import CloseIcon from '@mui/icons-material/Close';


export const FinishScreen = () => {
    const {questions, score, maxScore, correctAnswers, wrongAnswers} = useSelector((store) => store.quizReducer);
    const dispatch = useDispatch();

    const getEmojiIcon = (score) => {
        if (score === 100) {
            return "Perfect! 🏆";
        } else if (score >= 80) {
            return "Well Done! 🎉";
        } else if (score >= 50) {
            return "Okay 😐";
        } else if (score > 0) {
            return "Better luck next time 🤞";
        } else {
            return "";
        }
    }

    const handleStartAgain =()=>{
        dispatch(startAgain())
    }

    const handleCloseFinishedScreen = ()=>{
        dispatch(closeFinishScreen());
    }

    const sharedStyles = {
        width: '90%',
        color: 'rgba(57, 31, 91, .84)',
        padding: '.3rem',
        borderBottom: '1px solid rgba(57, 31, 91, .84)',
        display: 'flex',
        justifyContent: 'space-between',
      };

    return (
        <Box sx = {{
            width: '800px',
            height: '400px',
            backgroundColor: 'white',
            margin: '50px auto',
            borderRadius: '20px',
            boxShadow:' rgba(120, 100, 100, 0.1) 0 2px 2px,rgba(179, 132, 201, 0.4) 0 2px 8px',
            display: 'flex',
            position: 'relative',
            '@media (max-width:820px)': {
                flexDirection: "column",
                width: '600px',
              },
              '@media (max-width:630px)': {
                flexDirection: "column",
                width: '400px',
              },
              '@media (max-width:420px)': {
                flexDirection: "column",
                width: '300px',
              },
              
        }}>
            <Box sx = {{
                width: '50%',
                height: '100%',
                backgroundColor:' initial',
                backgroundImage:' linear-gradient(rgba(179, 132, 201, .84), rgba(57, 31, 91, .84) 50%)',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems:' center',
                textAlign: 'center',
                color: 'white',
                '@media (max-width:820px)': {
                    width: '100%',
                    height: '50%',
   
              },
            }}>
                <Box sx = {{
                    width:'120px',
                    height: "120px",
                    borderRadius: '50%',
                    backgroundColor: 'rgba(57, 31, 91, .84) ',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    '@media (max-width:630px)': {
                        width: '80px',
                        height: "80px"
                
                    },
                }}>
                 {score}%<span>of {maxScore}%</span>
                </Box>
                <Typography variant="body1" color= 'white' >
                    {getEmojiIcon(score)}
                </Typography>
                <Typography variant="body2">You scored higher than 65% of the people who have taken these tests</Typography>
            </Box>
            <Box sx = {{
                width: '50%',
                height: '100%',
                backgroundColor:' white',
                borderBottomRightRadius: '20px',
                borderTopRightRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                '@media (max-width:820px)': {
                    width: '100%',
                    height: '50%',
   
              },
            }}>
                <Typography variant= 'body1' color='rgba(57, 31, 91, .84)'>
                    Summary
                </Typography>
                <Typography variant= 'body2'sx={sharedStyles}>
                    Number of questions 
                    <strong>{questions.length}</strong>
                </Typography>
                <Typography variant= 'body2'sx={sharedStyles}>
                    Number of correct answers
                    <strong>{correctAnswers}</strong>
                </Typography>
                <Typography variant= 'body2' sx={sharedStyles}>
                    Number of wrong answers
                    <strong>{wrongAnswers}</strong>
                </Typography>
                <Button 
                    variant="contained"
                    sx = {{
                        backgroundColor: 'rgba(57, 31, 91, .84)',
                        color: 'white',
                    }}
                    onClick={handleStartAgain}>
                    Start Again
                </Button>
            </Box>
            <IconButton>
                <CloseIcon 
                    onClick={handleCloseFinishedScreen} 
                    sx = {{
                        position: 'absolute', 
                        top: 2, 
                        right: 8,
                        '@media (max-width:820px)': {
                            color: "#fff",
                             top: "-380px"
                        },
                        
                    }}>
                    
                </CloseIcon>
            </IconButton>
        </Box>
    )
}