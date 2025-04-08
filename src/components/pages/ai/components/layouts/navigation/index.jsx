import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../../header"
import Sidebar from '../../sidebar';



export const Navigation = () => {
    return (
        <>
           <CssBaseline/> 
           <div className='chat'>
            <Sidebar/>
                <Box sx={{
                    width : "100%",
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: "hidden"
                }}>
                    <Header/>
                   
                    <Outlet/>
                </Box>
           </div>
        </>
    )
}

