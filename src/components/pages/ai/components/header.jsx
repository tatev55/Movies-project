import { Toolbar,  Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';

const Header = () => {
    return (
        <AppBar position="absolute" sx = {{backgroundColor:"#070B1C",top: '500px' }} >
            <Toolbar >
            <Typography variant="h6" flexGrow="1" sx = {{textAlign:'center '}}>AI ASSISTENT</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;



