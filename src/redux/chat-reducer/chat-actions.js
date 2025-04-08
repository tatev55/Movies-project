import { geminiService } from "../../api/gemini";
import { showAlert } from "../alert-reducer/alert-reducer";

export const SET_INPUT = "SET_INPUT";
export const SET_API_KEY = "SET_API_KEY"
export const SET_LOADING = 'SET_LOADING';
export const SET_RESULT_DATA = "SET_RESULT_DATA";
export const SET_SHOW_RESULT = 'SET_SHOW_RESULT';
export const ADD_TO_HISTORY = "ADD_TO_HISTORY";
export const DELETE_FROM_HISTORY = "DELETE_FROM_HISTORY";


export const chatTypes = {
    SET_INPUT,
    SET_API_KEY,
    SET_LOADING,
    SET_RESULT_DATA,
    SET_SHOW_RESULT,
    ADD_TO_HISTORY,
    DELETE_FROM_HISTORY
}  

export const setInput = (input) => ({
    type: SET_INPUT,
    payload: input
})

export const setApiKey = (apiKey) => ({
    type: SET_API_KEY,
    payload: apiKey
})

export const setLoading = (loading)=> ({
    type: SET_LOADING,
    payload: loading
})

export const setShowResult = (showResult) => ({
    type: chatTypes.SET_SHOW_RESULT,
    payload: showResult,
  });
  
  export const setResultData = (data) => ({
    type: chatTypes.SET_RESULT_DATA,
    payload: data,
  });


  export const addToHistory= (question) => ({
    type: ADD_TO_HISTORY,
    payload: { prompt: question, timestamp: new Date().toISOString() }  
  })

  
  export const deleteFromHistory = (index) => ({
    type: DELETE_FROM_HISTORY,
    payload: index, 
});



export const onSent = () => async (dispatch, getState) => {
  
    try {
      dispatch(setLoading(true));
      dispatch(setShowResult(true));
  
      const state = getState();
      const prompt = state.chatReducer.input;
  
  
      let response = await geminiService.runWithPrompt(prompt);
      let responseArray = response.split("**");
      let formattedResponse = responseArray
        .map((word, i) => (i % 2 === 1 ? `<b>${word}</b>` : word))
        .join("");
      let finalResponse = formattedResponse.split("*").join("</br>");
      let newResponseArray = finalResponse.split(" ");
  

      dispatch(setResultData(finalResponse ))
  
      newResponseArray.forEach((nextWord, index) => {
  
        setTimeout(() => {
          dispatch(
            setResultData(getState().chatReducer.resultData + nextWord + " ")
          );

        }, 75 * index);
        getState().chatReducer.resultData = ''
        
      }); 
      

     
    } catch (error) {
      console.error("Error sending message", error);
      dispatch(showAlert(error.message, "error"));
    } finally {
      dispatch(setLoading(false));
    }
  };

export default chatTypes;