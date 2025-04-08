import { useDispatch, useSelector } from "react-redux"
import {Alert, Snackbar} from "@mui/material"
import { HIDE_ALERT } from "../../redux/alert-reducer/alert-reducer";


export const Alerts = () => {
    const dispatch = useDispatch();
    const {open, message, severity} = useSelector((state) => state.alertReducer)

    const handleClose = () => {
        dispatch({type: HIDE_ALERT})
    }
    return(
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            sx = {{position: 'fixed',  zIndex: 10000}}
        >
            <Alert 
                severity={severity}
                variant="filled"
                onClose = {handleClose} >
                {message}
            </Alert>
        </Snackbar>
        
    )
}
