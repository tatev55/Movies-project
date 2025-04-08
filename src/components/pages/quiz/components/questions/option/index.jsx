import { useDispatch, useSelector } from "react-redux"
import { Loading } from "../../../../../loading";
import { Box } from "@mui/material";
import { selectOption } from "../../../../../../redux/quiz-reducer/quiz-actions";
import { Button } from "../../../../../button/index";
import styles from './index.module.css'



export const Option = ({options})=> {
    const {selectedOption, questions, index} = useSelector((store) => store.quizReducer)
    const dispatch = useDispatch();
    const correctOption = questions[index].correctOption;

    if(!options){
        return <Loading/>
    }

const handleSelectOption = (index) => {
    dispatch(selectOption(index))
}
    return(
        <Box sx = {{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between"

        }}>
            {options.map((option, index) =>{
               let className = selectedOption !== null
               ? index === correctOption
                 ?styles.correct
                 : styles.inCorrect
               : "";
                return (
                    <Button key={option} 
                        className = {`${styles.btnOption} ${className}`}
                        onClick = {() => handleSelectOption(index)}
                        
                    >
                        {option}
                    </Button>
                )
            })}

        </Box>
    )

} 