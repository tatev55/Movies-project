import {omdbApi} from "../../api/movie.api"


export const SET_DATA = "SET_DATA";
export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';
export const SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE";
export const SET_PAGE = "SET_PAGE";
export const SET_LOADING = "SET_LOADING"
export const SET_MOVIE_DETAILS = "SET_MOVIE_DETAILS ";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY"


export const moviesTypes = {
   
    SET_DATA,
    SET_MODAL_OPEN,
    SET_SELECTED_MOVIE,
    SET_PAGE,
    SET_LOADING,
    SET_MOVIE_DETAILS,
    SET_SEARCH_QUERY

}

export const setLoading = (loading) => ({
    type: moviesTypes.SET_LOADING,
    payload: loading,
  });

  export const setData = (data, totalPages, currentPage) => ({
    type: moviesTypes.SET_DATA,
    payload: {data, totalPages, currentPage }
  });

  export const setSelectedMovie = (movie, id) => ({
    type: moviesTypes.SET_SELECTED_MOVIE,
    payload: {open: true,  selectedMovie: movie, movieDetails: id}

  })

  export const setModalOpen = (open) => ({
    type: moviesTypes.SET_MODAL_OPEN,
    payload: open
});

export const setMovieDetails = (movieDetails) => ({
  type:moviesTypes.SET_MOVIE_DETAILS,
  payload: movieDetails,
});

export const fetchMovieDetails = (imdbID) => async(dispatch)=> {
  try{
    dispatch(setLoading(true)); 
    const response = await omdbApi.fetchByID(imdbID);
    if(response.success){
      dispatch(setMovieDetails(response.data))
    }
  }catch(error){
    console.error("Error fetching full movie details:", error);
  }finally{
    dispatch(setLoading(false));
  }
}

export const setSearchQuery = (value) => ({
  type: moviesTypes.SET_SEARCH_QUERY,
  payload: value
})

export const setPage = (page)=> ({
  type: moviesTypes.SET_PAGE,
  payload: page
})





  

