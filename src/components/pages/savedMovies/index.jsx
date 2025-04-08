import { useLocalStorageState } from "../../../hooks/use-local-storage-state";
import { Card, CardContent, Typography, Button, CardMedia, Box } from "@mui/material";
import QuestionsSection from "../about-project/question-section"
import { useDispatch } from "react-redux";
import { showAlert } from "../../../redux/alert-reducer/alert-reducer";

export const SavedMovies = () => {
  const [savedMovies] = useLocalStorageState([], "savedMovies");
  const dispatch = useDispatch();

  const handleOpenIMDBbMovie = (event, imdbID) => {
    event.stopPropagation();

    const token = localStorage.getItem('token'); 
    if (!token) {
        
        dispatch(showAlert("Please log in to watch the movie.", "warning"));
    } else {
        
        window.open(`https://www.imdb.com/title/${imdbID}`, " ");
    }
};

  return (
    <Box sx = {{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}>
        <Typography 
            variant="h4"
            sx = {{
                mt: 2,
                color: 'white'
            }}
        >
            My favorite movies
        </Typography>
        
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:"space-around" }}>
        {savedMovies.length === 0 ? (
         
          <Typography color="#fff" m={3}>
            You haven't liked any movies yet.
          </Typography>
        ) : (
          
          <Box sx = {{display: "flex", flexDirection: 'column', justifyContent: "space-around", alignItems: "center"}}>
            <Typography color="#fff" m={3}>
              You have saved {savedMovies.length} movie{savedMovies.length > 1 ? 's' : ''}.
            </Typography>
            {savedMovies.map((movie) => (
              <Card key={movie.imdbID} 
                sx={{ 
                    width: 400, 
                    margin: 2,
                    textAlign:"center",
                    backgroundColor: " #1B1F3F", 
                    boxShadow: '#451B4F 0px 2px 4px, #451B4F 0px 7px 13px -3px, #451B4F 0px -3px 0px inset'
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={movie.Poster}
                  alt={movie.Title}
                />
                <CardContent>
                  <Typography 
                      variant="h6"
                      sx = {{
                          color: '#E50914',
                          m:2
                      }}
                  >
                      {movie.Title}
                  </Typography>
                  <Typography 
                      variant="body1"
                      sx = {{
                          color: 'white'
                      }}
                  >
                      <strong>Year : </strong>
                      {movie.Year}
                  </Typography>
                  <Typography 
                      variant="body1"
                      sx = {{
                          color: 'white',
                          m: 3
                      }}
                  >
                      <strong>Type : </strong>
                      {movie.Type}
                  </Typography>
                  <Button
                    variant="contained"
                    sx = {{
                      backgroundColor: '#E50914',
                    }}
                    onClick={(event) => handleOpenIMDBbMovie(event, movie.imdbID)}
                  >
                    Watch on IMDB
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Box>
      <QuestionsSection />
    </Box>
  );
};
