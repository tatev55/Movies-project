import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {moviesReducer } from "./movies-reducer/movies-reducer";
import {quizReducer }  from "./quiz-reducer/quiz-reducer";
import {alertReducer} from "./alert-reducer/alert-reducer";
import {chatReducer} from "./chat-reducer/chat-reducer"
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
     moviesReducer,
     quizReducer,
     chatReducer,
     alertReducer,
     
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

