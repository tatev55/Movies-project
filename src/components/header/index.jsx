import { Box, Button, Typography, Avatar } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();

  
  const token = localStorage.getItem('token');
  const user = token ? JSON.parse(localStorage.getItem('user')) : null; 


  const avatarUrl = user ? user.avatar : null; 

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/'); 
  };

  return (
    <Box sx={{
      width: '95%',
      height: "80px",
      position: "absolute",
      top: "10px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      zIndex: "2000"
    }}>
      {token ? ( 
        < Box sx = {{display: "flex", justifyContent: "space-between", alignItems: "center",  height: "auto"}}>
        <Button
            variant="contained"
            sx={{
              width: "100px",
              height: '40px',
              backgroundColor: 'transparent',
              border: "1px solid white",
              ml: 2,
              borderRadius: '20px'
            }}
            onClick={handleLogoutClick}
          >
            Log out
          </Button>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", ml: 2 }}>
            <Avatar src={avatarUrl} alt="User Avatar" sx={{ width: 40, height: 40, marginTop: "20px "}} />
            <Typography variant="body1" sx={{ ml: 1, color: "white" }}>
              {user.firstName} 
            </Typography>
          </Box>
          
        </Box>
      ) : (
        <Button
          variant="contained"
          endIcon={<ChevronRightIcon sx={{ transform: "rotate(90deg)" }} />}
          sx={{
            width: "100px",
            height: '40px',
            backgroundColor: 'transparent',
            border: "1px solid white",
            ml: 2,
            borderRadius: '20px'
          }}
          onClick={handleLoginClick}
        >
          Login
        </Button>
      )}
    </Box>
  );
};
