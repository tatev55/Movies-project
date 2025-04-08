import {moviesTypes} from "./movies-actions"

const initialState = {
    data: [],
    open: false,
    selectedMovie: null,
    currentPage: 1,
    totalPages: 1,
    loading: false,
    movieDetails: null,
    searchQuery: "Top"
}

export const moviesReducer = (state= initialState, action) => {
    switch(action.type){
        case moviesTypes.SET_DATA:
            return { 
                ...state, 
                data: action.payload.data, 
                totalPages: action.payload.totalPages,
                loading: false,
            }
        case moviesTypes.SET_MODAL_OPEN:
            return{
                ...state,
                open: action.payload,
                movieDetails: null
            }
        case moviesTypes.SET_SELECTED_MOVIE :
            return{
                ...state,
                open: action.payload.open,
                selectedMovie: action.payload.selectedMovie
            }
        case moviesTypes.SET_PAGE: 
            return{
                ...state,
                currentPage: action.payload 
            }
        case moviesTypes.SET_LOADING:
            return{
                ...state,
                loading: true, 
            }
        case moviesTypes.SET_MOVIE_DETAILS:
            return { 
                ...state, 
                movieDetails: action.payload 
            };
        case moviesTypes.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state

    }
}