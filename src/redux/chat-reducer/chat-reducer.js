import {chatTypes} from "./chat-actions";

const savedChatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];




const initialState = {
    input: "",
    apiKey: '',
    loading: false,
    resultData: '',
    showResult: false,
    chatHistory: savedChatHistory,

}


export const chatReducer = (state= initialState, action) => {
    switch (action.type) {
        case chatTypes.SET_INPUT:
            return { ...state, input: action.payload }
        case chatTypes.SET_API_KEY:
            return { ...state, apiKey: action.payload }
        case chatTypes.SET_SHOW_RESULT:
            return { ...state, showResult: action.payload }
        case chatTypes.SET_LOADING:
            return { ...state, loading: action.payload }
        case chatTypes.SET_RESULT_DATA:
            return { ...state, resultData: action.payload }
        case chatTypes.ADD_TO_HISTORY:
            const updatedHistory = [...state.chatHistory, action.payload]
            localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
            return { ...state, chatHistory: updatedHistory };
        case chatTypes.DELETE_FROM_HISTORY:
            const filteredHistory = state.chatHistory.filter((_, index) => index !== action.payload);
            localStorage.setItem('chatHistory', JSON.stringify(filteredHistory));
            return { ...state, chatHistory: filteredHistory };
        
        default:
            return state;
    }

}

