import { TextField, Button, Typography, Box } from '@mui/material';
import backgroundImage from '../../../assets/images/background.jpg';
import { authApi } from "../../../api/auth.api";
import { FileUpload } from "../../../api/file_upload_api";
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { showAlert } from "../../../redux/alert-reducer/alert-reducer"; 

const fileUploadApi = new FileUpload();

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

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const lastNameRef = useRef();
  const firstNameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const fileRef = useRef();

  const handleRegister = async () => {
    

    try {
      const file = fileRef.current.files[0];
      if (!file) {
        dispatch(showAlert('Please upload an avatar image', 'error'));
        return;
      }

      const fileUploadedFile = await fileUploadApi.upload(file);

      const userData = {
        lastName: lastNameRef.current?.value,
        firstName: firstNameRef.current?.value,
        email: emailRef.current?.value,
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
        avatar: fileUploadedFile.url,
      };

      if (!userData.lastName || !userData.firstName || !userData.email || !userData.username || !userData.password || !userData.avatar) {
        dispatch(showAlert('Please fill out all fields', 'error', ));
        return;
      }

      localStorage.setItem('user', JSON.stringify(userData));

      const response = await authApi.register(userData);

      if (response) {
        dispatch(showAlert('Registration successful!', 'success', ));
        navigate('/');
      }
    } catch (error) {
      console.log("Registration failed:", error);
      dispatch(showAlert('Registration failed, please try again.', 'error',));
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          zIndex: '7000',
          top: 0,
          width: "99%",
          height: '100vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% 100%",
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            position: "absolute",
            top: 0,
            zIndex: "-1"
          }}
        />
        <Box
          sx={{
            width: "50%",
            height: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            p: 5,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            '@media (max-width:800px)': {
            width: '90%'
     
            },
            '@media (max-width:440px)': {
           
              textAlign: "center"
 
            },
          }}
        >
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold", mb: 3 }}>Register</Typography>
          <TextField 
            label="LastName" 
            inputRef={lastNameRef} 
            variant="outlined" 
            fullWidth sx={inputStyles} 
            />
          <TextField 
            label="FirstName" 
            variant="outlined" 
            fullWidth inputRef={firstNameRef} 
            sx={inputStyles} 
            />
          <TextField 
            label="Email" 
            variant="outlined" 
            fullWidth inputRef={emailRef} 
            sx={inputStyles} 
          />
          <TextField 
            label="UserName" 
            variant="outlined" 
            fullWidth 
            inputRef={usernameRef} 
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
          <TextField 
            type="file" 
            inputRef={fileRef} 
            sx={inputStyles} 
          />
          <Button 
            variant="contained" 
            onClick={handleRegister} 
            sx={{ 
              backgroundColor: "#E50914" 
              }}
            >
              Register
            </Button>
            <Typography variant="body1" sx={{ mt: 2, color: "#FFf" }}>
                Would you like to go to the home page?
                <Button onClick={() => navigate('/')} sx={{ color: "#E50914", backgroundColor: "rgba(251, 246, 246, 0)" }}>
                    Go to the home page
                </Button>
            </Typography>
        </Box>
        
      </Box>
    </>
  );
};
