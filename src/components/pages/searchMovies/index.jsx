import { omdbApi } from "../../../api/movie.api"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef} from "react";
import { setData , setLoading, setSelectedMovie, setModalOpen, fetchMovieDetails, setPage} from "../../../redux/movies-reducer/movies-actions";
import { Box, Card, Typography, CardContent, CardActions, Button, CardMedia, Modal } from "@mui/material";
import {Loading} from "../../../components/loading/index"
import {getAppTitleByMovie} from '../../../utils/helpers'
import{APP_TITLE} from "../../../utils/constant"
import {MovieDetails} from "./movie-details/index"
import { useKey } from "../../../hooks/use-key";
import {Pagination} from "../../pagination/index"
import { showAlert } from "../../../redux/alert-reducer/alert-reducer";
import QuestionsSection from "../about-project/question-section"




export const  SearchMovies = ()=> {
    const {currentPage, data, loading, open, selectedMovie, searchQuery, totalPages} = useSelector((store) => store.moviesReducer);
    
    const dispatch = useDispatch();
    const timeoutIdRef = useRef(null);
    
    

    const fetchMovies = async () => {
        
        const response = await omdbApi.fetchMoviesBySearch( searchQuery, currentPage);

        if (response.success) {
            
            dispatch(setData(response.data.Search || [], response.data.totalResults))
            
        }else{
             dispatch(setLoading(true))
        }
        
      };

      useEffect(() => {
        clearTimeout(timeoutIdRef.current);
    
        const toId = setTimeout(() => {
          fetchMovies();
          
        }, 1000);
    
        timeoutIdRef.current = toId;
      }, [searchQuery, currentPage]);

      
    

      
    
    const handleOpenIMDBbMovie = (event, imdbID) => {
        
        event.stopPropagation();
       

        const token = localStorage.getItem('token'); 
        if (!token) {
            
            dispatch(showAlert("Please log in to watch the movie.", "warning", ));
        } else {
            
            window.open(`https://www.imdb.com/title/${imdbID}`, " ");
        }
    };
      const handleCardClick = (movie) => {
       
        dispatch(setSelectedMovie(movie)); 
        dispatch(fetchMovieDetails(movie.imdbID));
        
        document.title = getAppTitleByMovie(movie.Title, movie.Year);

       
        window.history.pushState(
          null,
          "",
          `?movieId=${movie.imdbID}&title=${movie.Title}&year=${movie.Year}`
        );
    };


    
    const handleCloseModal = () => {
        dispatch(setModalOpen(false));
        dispatch(setData(data));
        dispatch(setPage(currentPage)); 
        
        
        window.history.pushState("", "", "/");
        document.title = APP_TITLE; 
    };

    useKey("Escape", () => {
        handleCloseModal();
      });

      
    

    const handlePageChange = (page) => {
         dispatch(setPage(page))
       
    }


    return (
        <>
            <Box sx = {{
                width: '90%',
                height: "auto",
                margin: "20px auto",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                alignItems: "center"
                }}
            >
            {loading?(
                <Loading/>
            ):(data.map((movie) => {
                return(
                    <Card key= {movie.imdbID} 
                        sx ={{
                             width: 430,
                             height: 500, 
                             maxWidth: 430, 
                             mt:3,
                             cursor: "pointer",
                             textAlign:"center",
                             backgroundColor: " #1B1F3F", 
                             boxShadow: '#451B4F 0px 2px 4px, #451B4F 0px 7px 13px -3px, #451B4F 0px -3px 0px inset'
                        }}
                        onClick = {() => handleCardClick(movie)}
                    >
                        <CardMedia
                            component="img"
                            height="300"
                            image={movie.Poster}
                            alt={movie.Title}
                            sx = {{
                                objectFit: "cover",
                            }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div"
                                sx ={{
                                    color: "white"
                                }}
                            >
                                {movie.Title}
                            </Typography>
                            <Typography variant="body1" 
                                sx = {{ 
                                    color: 'white',
                                    
                                }}
                            >
                                <strong>Year:</strong> {movie.Year}
                            </Typography>
                            <Typography variant="body1" 
                                sx = {{ 
                                    color: 'white' 
                                }}
                            >
                                <strong>Type:</strong> {movie.Type}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button  
                                size="small"
                                variant="contained"
                                onClick={(event) => handleOpenIMDBbMovie(event, movie.imdbID)}
                                sx = {{
                                    margin: "10px auto",
                                    backgroundColor: "#E50914"
                                    
                                }}
                            >
                                Wach on IMDB
                            </Button>
                        </CardActions>
                    </Card>
                )
            }))}
            {open && selectedMovie && (
                <Modal
                    open={open}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx = {{
                        overflow: "auto",
                        zIndex: '9000',
        
                    }}
                >   
                    <MovieDetails id={selectedMovie.imdbID}  onCloseModal={handleCloseModal}/>
                </Modal>
                
            )}
            
        </Box>
        <Pagination
            key={`pagination-${currentPage}`} 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
        />
<QuestionsSection/>
        </>
    )
}
