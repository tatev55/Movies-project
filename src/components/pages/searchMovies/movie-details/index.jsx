import { useSelector } from "react-redux";
import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import { Box, CardContent, Button, Typography, IconButton , Card} from '@mui/material';
import { useState, useEffect } from "react";
import { Genre } from "../../../../components/genre/index";
import { Flag } from "../../../../components/flag/index";
import { useLocalStorageState } from "../../../../hooks/use-local-storage-state";
 
import { motion } from "motion/react" 

export const MovieDetails = ({ onCloseModal }) => {
  const movieDetails = useSelector((store) => store.moviesReducer.movieDetails);
  const [isMovieFavorite, setIsMovieFavorite] = useState(false);
  const [savedMovies, setSavedMovies] = useLocalStorageState([], "savedMovies");

  useEffect(() => {
    const movieInStorage = savedMovies.find((movie) => movie.imdbID === movieDetails?.imdbID);
    setIsMovieFavorite(!!movieInStorage); 
  }, [movieDetails, savedMovies]);

  if (!movieDetails) {
    return null;  
  }

  const handleUpdateFavoriteStatus = () => {
    if (isMovieFavorite) {
      setSavedMovies(savedMovies.filter((movie) => movie.imdbID !== movieDetails.imdbID));
    } else {
      setSavedMovies([...savedMovies, movieDetails]);
    }
    setIsMovieFavorite(!isMovieFavorite); 
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2, position: "relative", }}>
      <motion.div
        initial={{ scale: 0 }}  
        animate={{ scale: 1 }}   
        exit={{ scale: 0 }}      
        transition={{ duration: 0.5 }} 
      >
        <Card sx={{ display: 'flex', width: '80%', backgroundColor: '#070B1C', color: 'white', padding: 2, margin: "30px auto", }}>
          <Box sx={{ width: '48%', display: 'flex', flexDirection: 'column' }}>
            <img
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              style={{ width: '90%', height: '400px', borderRadius: 8 }}
            />
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6" 
                sx={{ 
                  color: 'white',
                  '@media (max-width:800px)': {
                      fontSize: '18px'
                    },
                    '@media (max-width:600px)': {
                      display: "none"
                    },
                }}
              >
                <strong>Awards:</strong> 
                {movieDetails.Awards}
              </Typography>
              <Typography variant="h6" sx={{ color: 'white' }}><strong>Box Office:</strong> {movieDetails.BoxOffice}</Typography>
            </Box>
            <ul style={{ paddingLeft: 0 }}>
              {(movieDetails?.Ratings || []).map((rating) => (
                <li key={rating.Source} style={{ listStyle: 'none', marginBottom: '10px' }}>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    {rating.Source} <span>{rating.Value}</span>
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>

          <Box sx={{ width: '48%', display: 'flex', flexDirection: 'column', position: "relative" }}>
            <CardContent sx={{ padding: 2 }}>
              <Typography variant="h5" sx={{ color: '#E50914', marginBottom: 1, fontWeight: "bold" }}>{movieDetails.Title}</Typography>

              <Typography variant="body1" 
                sx={{ 
                  color: 'white', 
                  margin: '15px 0', 
                  borderBottom: '2px solid #3333', 
                  p: 1, 
                  '@media (max-width:500px)': {
                      fontSize: "15px"
                    }, 
                  }}
                >
                <strong>Directed by:</strong> {movieDetails.Director}
              </Typography>

              <IconButton
                onClick={handleUpdateFavoriteStatus}
                sx={{ 
                  position: 'absolute', 
                  top: 0, 
                  right: 0 ,
                  '@media (max-width:780px)': {
                      right: "-40px"
                    },
                }}
              >
                {isMovieFavorite ? (
                  <Bookmark sx={{ fontSize: '2rem', color: 'rgb(245, 197, 24)' }} />
                ) : (
                  <BookmarkBorder sx={{ fontSize: '2rem', color: '#E50914' }} />
                )}
              </IconButton>

              <Typography variant="body1" 
                sx={{ 
                  color: 'white', 
                  margin: '10px 0', 
                  borderBottom: '2px solid #3333', 
                  p: 1,
                  '@media (max-width:500px)': {
                      fontSize: "15px"
                    }, 
                  
                 }}
                >
                <strong>Writer:</strong> {movieDetails.Writer}
              </Typography>
              <Typography variant="body1" 
                sx={{ 
                  color: 'white', 
                  margin: '10px 0', 
                  borderBottom: '2px solid #3333', 
                  p: 1,
                  '@media (max-width:500px)': {
                      fontSize: "15px"
                    },  
                }}
              >
                <strong>Actors:</strong> {movieDetails.Actors}
              </Typography>
              <Typography variant="body1" 
                sx={{ 
                  color: 'white', 
                  margin: '10px 0', 
                  borderBottom: '2px solid #3333', 
                  p: 1 ,
                  '@media (max-width:500px)': {
                      fontSize: "15px"
                    }, 
                }}
              >
                <strong>Genre:</strong> {movieDetails.Genre}
                {(movieDetails.Genre || "").split(", ").map((genre, index) => (
                  <Genre key={index} genre={genre} />
                ))}
              </Typography>
              <Typography variant="body1" 
                sx={{ 
                  color: 'white', 
                  margin: '10px 0', 
                  borderBottom: '2px solid #3333', 
                  p: 1,
                  '@media (max-width:500px)': {
                      fontSize: "15px"
                    }, 
                   }}
                >
                <strong>Language:</strong> {movieDetails.Language}
              </Typography>

              <Typography variant="body1" 
                sx={{ 
                  color: 'white', 
                  margin: '10px 0', 
                  borderBottom: '2px solid #3333', 
                  p: 1,
                  '@media (max-width:500px)': {
                      fontSize: "15px"
                    },  
                  }}
                >
                <strong>Countries:</strong>
                {(movieDetails.Country || "").split(", ").map((country) => (
                  <Flag key={country} country={country} />
                ))}
              </Typography>

              <Typography variant="body1" 
                sx={{ 
                  color: 'white', 
                  margin: '10px 0', 
                  borderBottom: '2px solid #3333', 
                  p: 1,
                  '@media (max-width:500px)': {
                      fontSize: "15px"
                    },  
                  }}
                >
                <strong>Released:</strong> {movieDetails.Released}
              </Typography>
              <Typography variant="body1" 
                sx={{ 
                  color: 'white', 
                  margin: '10px 0', 
                  borderBottom: '2px solid #3333', 
                  p: 1,
                  '@media (max-width:500px)': {
                      fontSize: "15px"
                    },  
                  }}
              >
                <strong>Runtime:</strong> {movieDetails.Runtime}
              </Typography>

              <Typography variant="body1" 
                sx={{ 
                  color: 'white',
                  '@media (max-width:500px)': {
                      fontSize: "15px"
                    },  
                  }}
                >
                <strong>IMDb Votes:</strong> {movieDetails.imdbRating} ({movieDetails.imdbVotes} votes)
              </Typography>

              <Typography variant="body1" 
                sx={{ 
                  color: 'white', 
                  marginTop: 2 ,
                  '@media (max-width:750px)': {
                      display: "none"
                    },
                }}
              >
                <strong>Plot:</strong> {movieDetails.Plot}
              </Typography>
            </CardContent>
            <Button 
              variant="contained" 
              sx={{ width: "70px", position: "absolute", bottom: "0", right: "0", backgroundColor: " #E50914",
                '@media (max-width:600px)': {
                      right: "-30px"
                    },
               }}
              onClick={onCloseModal}
            >
              Close
            </Button>
          </Box>
        </Card>
      </motion.div>
    </Box>
  );
};
