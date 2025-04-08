import { useSelector } from "react-redux"
import { Box, Typography } from "@mui/material"
import styles from './index.module.css'

export const Progress = () => {
    const {questions, index, score,maxScore, selectedOption} = useSelector((store) => store.quizReducer)

    return (
        <Box sx = {{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Typography 
                variant="h6"
                sx = {{
                    color: "white",
                    '@media (max-width:450px)': {
                        fontSize: "18px"
           
                      },
                      '@media (max-width:400px)': {
                        fontSize: "15px"
           
                      },
                }}
            >
                <strong>Questions</strong><br/>
                {index + 1 } / {questions.length}
            </Typography>

            <progress  
                className={styles.progress} 
                max={questions.length} 
                value={index + Number(selectedOption != null)}
            >
                
            </progress>

            <Typography 
                variant="h6"
                sx = {{
                    color: "white",
                    '@media (max-width:450px)': {
                        fontSize: "18px"
           
                      },
                      '@media (max-width:400px)': {
                        fontSize: "15px"
           
                      },
                }}
            >
                <strong>Score</strong><br/>
                {score} / {maxScore}
            </Typography>
        </Box>
    )
}