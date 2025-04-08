import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import {finishQuiz} from "../../../../../redux/quiz-reducer/quiz-actions"
import { Typography, Box } from "@mui/material";


export const Timer = () => {
    const {quizTime} = useSelector((store) => store.quizReducer);
    const dispatch = useDispatch();

    useEffect(()=> {
        if(quizTime <= 0){
            dispatch(finishQuiz());
            return
        }

        const interval = setInterval(()=> {
            dispatch({type: "TIME"})
        }, 1000)

        return(() => clearInterval(interval))
    }, [quizTime, dispatch])


    const minutes = Math.floor( quizTime/ 60);
    const seconds = quizTime % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;


    return (
        <Box>
            <Typography 
                variant="body1"
                sx = {{
                    fontSize: 20,
                    color: "white",
                    m: 2
                }}
            >
                Time: {formattedTime}
            </Typography>
        </Box>
    )


}