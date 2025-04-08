import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions,  } from "../../../redux/quiz-reducer/quiz-actions"; 
import { useEffect } from "react"; 
import { StartScreen } from "./components/start-screen";
import { Progress } from "./components/progress";
import { Questions } from "./components/questions";
import { Loading } from "../../loading";
import { FinishScreen } from "./components/finished-screen";
import { Error } from "./components/error/index";
import { Footer } from "./components/footer";
import { Box } from "@mui/material";
import QuestionsSection from "../about-project/question-section"

export const QuizApp = () => {
  const { status } = useSelector((store) => store.quizReducer); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions()); 
  }, [dispatch]);

  return (
    <Box>
      <Box>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <Box sx = {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <Progress />
            <Questions />
            <Footer />
          </Box>
        )}
        {status === "finished" && <FinishScreen />}
      </Box>
      <QuestionsSection/>
    </Box>
  );
};
