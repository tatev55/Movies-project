import {quizTypes} from "./quiz-actions"

const initialState = {
    status: 'loading', //loading, ready, active, error, finished
    questions: [],
    index: 0,
    score: 0,
    selectedOption: null,
    maxScore: 0,
    quizTime: 0
}

export const quizReducer = (state= initialState, action) => {
    switch (action.type) {
        case quizTypes.DATA_RECEIVED:
            return {
                ...state,
                status: 'ready',
                questions: action.payload,
                maxScore: action.payload.reduce((prev, cur) => prev + cur.points, 0),
            }
        case quizTypes.DATA_FAILED :
            return{
                ...state,
                status: 'error',

            };
        case quizTypes.START :
            return {
                ...state,
                status: 'active',
                quizTime: state.questions.length * 30,
            };
        case quizTypes.SELECT_OPTION :
            const question = state.questions[state.index];
            return {
                ...state,
                selectedOption: action.payload,
                score:
                  action.payload === question.correctOption
                    ? state.score + question.points
                    : state.score,
              };
        case quizTypes.NEXT_QUESTION:
            return {
                ...state,
                index: state.index + 1,
                selectedOption: null,
            };
        case quizTypes.START_AGAIN:
            return {
            ...state,
            index: 0,
            selectedOption: null,
            score: 0,
            status: "active",
            gameTime: state.questions.length * 30,
            };
            
        case quizTypes.FINISH:
            const correctAnswers = state.score / state.questions.length;
            const wrongAnswers = state.questions.length - correctAnswers;
                return {
                  ...state,
                  status: "finished",
                  correctAnswers,
                  wrongAnswers,
                };
        case quizTypes.CLOSE_FINISH_SCREEN:
                return {
                    ...state,
                    status: "ready",
                    index: 0,
                    selectedOption: null,
                    score: 0,
                };
        case quizTypes.TIME : 
            return {
                ...state,
                quizTime: state.quizTime -1,
            }
        default :
            return state;

    }
}