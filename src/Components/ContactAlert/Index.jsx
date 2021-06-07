import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';





export default function ContactAlert({message, severity, open, close}){

    return(
        <Snackbar open={open} anchorOrigin={{vertical:'top', horizontal:'center'}} autoHideDuration={1400} onClose={close}>
            <Alert onClose={close} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    )
}