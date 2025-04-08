
import { Nav } from "../navbar/navbar"
import { Footer } from "../footer"
import { Outlet } from "react-router";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Alerts } from "../alerts/alerts"


export const Layout =() => {
    return (
        <>
            <CssBaseline />
            <Box>
                <Nav/>
                <Alerts/>
                <Outlet/>     
                <Footer/>
            </Box>
            
        </>

    )
}