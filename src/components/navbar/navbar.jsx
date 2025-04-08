import { Link, useLocation } from "react-router"; 
import { useState, useEffect, useRef } from "react";
import { Box, Typography, TextField, IconButton, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import backgroundImage from "../../assets/images/background.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/movies-reducer/movies-actions";
import { Header } from "../header";
import styles from "./nav.module.css";

export const Nav = () => {
  const [activeLink, setActiveLink] = useState("searchMovies");
  const { searchQuery } = useSelector((store) => store.moviesReducer);
  const [value, setValue] = useState(searchQuery);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation(); 

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  useEffect(() => {
    
    if (location.pathname === "/") {
      setActiveLink("searchMovies");
    } else if (location.pathname === "/savedMovies") {
      setActiveLink("savedMovies");
    } else if (location.pathname === "/quiz") {
      setActiveLink("quiz");
    } else if (location.pathname === "/ai") {
      setActiveLink("ai");
    }
  }, [location.pathname]); 

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleSubmit = () => {
    dispatch(setSearchQuery(value));
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100% 100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          position: "absolute",
          top: 0,
        }}
      ></Box>
      <Box
        sx={{
          height: "200px",
          position: "absolute",
          zIndex: "1000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          
          sx={{
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
           '@media (max-width:660px)': {
                fontSize: '30px',
            },
            '@media (max-width:440px)': {
                fontSize: '25px',
     
              },
          }}
       
        >
          Unlimited movies, TV shows, and more
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            mb: 7,
            '@media (max-width:440px)': {
                display: "none"
     
              },
          }}
          
        >
          You can search for your favorite movie and watch.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            '@media (max-width:440px)': {
                marginTop: "20px"
     
              },
          }}
          
        >
          <TextField
            fullWidth
            value={value}
            ref={inputRef}
            onChange={(e) => setValue(e.target.value)}
            label="Enter a prompt here"
            id="fullWidth"
            placeholder="Type something..."
            sx={{
              width: "500px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
                "& input": {
                  color: "white",
                },
                "& input::placeholder": {
                  color: "white",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
              '@media (max-width:660px)': {
                width: "300px", 
              },
              '@media (max-width:440px)': {
                width: "200px", 
     
              },
            }}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
            sx={{
              height: "55px",
              backgroundColor: "transparent",
              border: "1px solid white",
              ml: 2,
              '@media (max-width:440px)': {
                width: "80px"
     
              },
            }}
            
          >
            Send
          </Button>
        </Box>
        <Box
          sx={{
            height: "70px",
            zIndex: "1000",
            mt: 3,
            display: "flex",
            '@media (max-width:660px)': {
                flexDirection: "column",
     
            },
          }}
          
        >
          <Box sx = {{
            display: "flex",
            
            }}
          >
          <Link
            to="/"
            className={styles.linkItem}
            onClick={() => handleLinkClick("searchMovies")}
          >
            Search Movies
            <IconButton>
              <ChevronRightIcon
                sx={{
                  color: "white",
                  transform:
                    activeLink === "searchMovies" ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </IconButton>
          </Link>
          <Link
            to="/savedMovies"
            className={styles.linkItem}
            onClick={() => handleLinkClick("savedMovies")}
          >
            Like Movies
            <IconButton>
              <ChevronRightIcon
                sx={{
                  color: "white",
                  transform:
                    activeLink === "savedMovies" ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </IconButton>
          </Link>
          </Box>
          <Box sx = {{display: "flex"}}>
          <Link
            to="/quiz"
            className={styles.linkItem}
            onClick={() => handleLinkClick("quiz")}
          >
            Quiz
            <IconButton>
              <ChevronRightIcon
                sx={{
                  color: "white",
                  transform: activeLink === "quiz" ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </IconButton>
          </Link>
          <Link
            to="/ai"
            className={styles.linkItem}
            onClick={() => handleLinkClick("ai")}
          >
            AI
            <IconButton>
              <ChevronRightIcon
                sx={{
                  color: "white",
                  transform: activeLink === "ai" ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </IconButton>
          </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
