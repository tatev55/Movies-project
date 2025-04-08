import {quizApi} from "../../api/quiz.api"

export const DATA_RECEIVED = "DATA_RECEIVED";
export const DATA_FAILED = "DATA_FAILED";
export const START = "START";
export const SELECT_OPTION = "SELECT_OPTION";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const START_AGAIN = "START_AGAIN";
export const FINISH = "FINISH";
export const CLOSE_FINISH_SCREEN = "CLOSE_FINISH_SCREEN";
export const TIME = "TIME";

export const quizTypes = {
    DATA_RECEIVED,
    DATA_FAILED,
    START,
    SELECT_OPTION,
    NEXT_QUESTION,
    START_AGAIN,
    FINISH,
    CLOSE_FINISH_SCREEN,
    TIME
}

export const startQuiz = () => ({
    type:quizTypes.START  
})

export const selectOption = (index) => ({
    type: quizTypes.SELECT_OPTION,
    payload: index
})

export const nextQuestion = () => ({
    type: quizTypes.NEXT_QUESTION,

})

export const finishQuiz = () => ({
    type: quizTypes.FINISH
})

export const startAgain = () => ({
    type: quizTypes.START_AGAIN
})

export const  closeFinishScreen = () => ({
    type: quizTypes.CLOSE_FINISH_SCREEN
})

export const updateTime = () => ({
    type: quizTypes.TIME
})

export const fetchQuestions = () => async (dispatch) => {
    try {
      const response = await quizApi.getQuestions();
      if (response.success) {
        dispatch({
          type: DATA_RECEIVED,
          payload: response.data,
        });
      } else {
        dispatch({
          type: DATA_FAILED,
        });
      }
    } catch(error) {
      dispatch({
        type: DATA_FAILED,
        payload:error
      });
    }
  };
  
