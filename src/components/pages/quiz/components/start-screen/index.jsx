import { Box, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { startQuiz } from "../../../../../redux/quiz-reducer/quiz-actions";
import {Button} from "../../../../button/index"
import styles from './index.module.css'

export const StartScreen = ()=> {
    const {questions} = useSelector((store) => store.quizReducer);
    const dispatch = useDispatch();
     const numberOfQuestions = questions.length;

    const handleStart = () => {
        dispatch(startQuiz());
    }

    return (
        <Box sx = {{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            m: "0 auto"
        }}>
            <Typography 
                variant="h5" 
                sx = {{ 
                    fontWeight: "bold", 
                    color: 'white', 
                    mt: 3
                }}
            >
                Welcome to The Movie Quiz!
            </Typography>
            <Typography 
                variant="h5" 
                sx = {{
                    color: 'white',
                    mt: 3,
                    '@media (max-width:600px)': {
                        fontSize: "20px",
                        textAlign: "center"
           
                      },
                }}
            >
                You will be asked {numberOfQuestions} questions about movies. Good luck!
            </Typography>
            <Button 
                onClick = {handleStart}
                className= {styles.btn_start}
            >
                Let's start
            </Button>
        </Box>
    )
   
}




