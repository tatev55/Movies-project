import { useDispatch, useSelector } from "react-redux"
import { Box, Typography, IconButton} from "@mui/material";
import {nextQuestion, finishQuiz} from "../../../../../redux/quiz-reducer/quiz-actions"
import { Timer } from "../timer";
import { Button } from "../../../../button/index";
import  ChevronRightIcon  from '@mui/icons-material/ChevronRight';
import styles from './index.module.css'



export const  Footer = () => {
    const {selectedOption, index, questions} = useSelector((store) => store.quizReducer);
    const dispatch = useDispatch();


    const handleNextButton = () => {
        if(index < questions.length-1){
            dispatch(nextQuestion())
        }else{
            dispatch(finishQuiz())
        }
    }

    return (
        <Box sx = {{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            
        }}>
            <Timer  />
            {selectedOption != null && 
                <Button 
                    className = {styles.next_btn}
                    onClick={handleNextButton}
                >
                    <Typography
                        variant="body1"
                        sx = {{
                            backgroundColor: "rgb(5, 6, 45)",
                            width: "100%",
                            height: '100%',
                            borderRadius: "5px",
                            transition: '300ms',
                            padding: '5px',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center'

                        }}
                    >
                        {index < questions.length-1? "Next": "Finish"}
                        
                            <ChevronRightIcon  
                                 sx ={{
                                    color: "white",
                                 }}
                            />
                    </Typography>
                </Button>
            }
        </Box>
    )

}