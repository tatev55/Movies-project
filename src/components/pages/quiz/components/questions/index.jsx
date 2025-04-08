import { useSelector } from "react-redux"
import {Loading} from '../../../../loading/index'
import { Option } from "./option/index";
import {Box, Typography} from "@mui/material"

export const Questions = () => {
    const {questions, index} = useSelector((store) => store.quizReducer);
    const questionText = questions[index];

    if(!questionText){
        return <Loading/>
    }

    return (
        <Box>
            <Typography 
                variant="h4" 
                component="h2"
                sx = {{
                    fontSize: 24,
                    color: "white",
                    m:2,
                    '@media (max-width:450px)': {
                        fontSize: "25px"
           
                      },
                      '@media (max-width:400px)': {
                        fontSize: "20px"
           
                      },
                }}
             >
                {questionText.question}
            </Typography>
            <Option options = {questionText.options}/>
        </Box>
    )

}