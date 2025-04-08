import React, { useState, useEffect, useRef } from 'react';
import { Typography, Button, TextField, Box, Avatar } from '@mui/material';
import { useNavigate } from 'react-router';
import backgroundImage from '../../../assets/images/background.jpg';
import { useDispatch } from 'react-redux';
import { showAlert } from "../../../redux/alert-reducer/alert-reducer";   
import { authApi } from "../../../api/auth.api";
   

const inputStyles = {
  mb: 2,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    '& input': {
      color: 'white',
    },
    '& input::placeholder': {
      color: 'white',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  },
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    
    try {
      const user = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      };

      const response = await authApi.login(user);

      if (response.accessToken && response.user) {
        localStorage.setItem('token', JSON.stringify(response.accessToken));
        localStorage.setItem('user', JSON.stringify(response.user));
        setIsLoggedIn(true);
        dispatch(showAlert('Login successful!', 'success',));
        navigate('/');
      }else {
        dispatch(showAlert('Invalid credentials', 'error',));
      }
    } catch (error) {
      dispatch(showAlert('Invalid credentials, please try again.', 'error', ));
      console.log(error);
      
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false); 
    navigate('/'); 
  };

  
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Box sx={{
      position: "absolute",
      zIndex: '7000',
      top: 0,
      width: "99%",
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "100% 100%",
      display: "flex",
      justifyContent: 'center',
      alignItems: "center"
    }}>
      <Box sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        position: "absolute",
        top: 0,
        zIndex:"-1"
      }}>
      </Box>

      <Box sx={{
        width: "50%",
        height: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: 5,
        '@media (max-width:800px)': {
            width: '90%'
     
          },
          '@media (max-width:440px)': {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
 
          },
      }}>
        <Typography variant="h4" gutterBottom color="#fff" fontWeight="bold">Login</Typography>
        <div>
          {!isLoggedIn ? (
            <>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                inputRef={emailRef}
                sx={inputStyles}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                inputRef={passwordRef}
                sx={inputStyles}
              />
              <Button variant="contained" onClick={handleLogin} sx={{ backgroundColor: "#E50914" }}>
                Login
              </Button>
            </>
          ) : (
            <>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar 
                  alt={user?.username} 
                  src={user?.avatarUrl} 
                  sx={{ width: 50, height: 50, marginRight: 2 }}
                />
                <Typography variant="h6" color="#fff">{user?.username}</Typography>
              </Box>
              <Button variant="contained" onClick={handleLogout} sx={{ backgroundColor: "#E50914" }}>
                Log out
              </Button>
            </>
          )}
        </div>

        {!isLoggedIn && (
          <>
          <Typography variant="body1" sx={{ mt: 2, color: "#FFf" }}>
            Don't have an account?
            <Button onClick={() => navigate('/register')} sx={{ color: "#E50914", backgroundColor: "rgba(251, 246, 246, 0)" }}>
              Register here
            </Button>
          </Typography>

          <Typography variant="body1" sx={{ mt: 2, color: "#FFf" }}>
            Would you like to go to the home page?
            <Button onClick={() => navigate('/')} sx={{ color: "#E50914", backgroundColor: "rgba(251, 246, 246, 0)" }}>
              Go to the home page
            </Button>
          </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};
