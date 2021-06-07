import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import SendIcon from '@material-ui/icons/Send';
import Container from '@material-ui/core/Container'
import {db}  from '../../Firebase/Firebase'
import './contactform.styles.css'
import ContactAlert from '../ContactAlert/Index';

    const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
        alignItems:'center',
        position:'relative',
        '& .MuiTextField-root': {
        backgroundColor: 'rgba(252, 248, 246, 0.925)',
        margin: theme.spacing(1),
        width: '100%',
        },
    },
    mailName:{
        display:'flex',
        width: '100%',
},
    button: {
    margin: theme.spacing(1),
    backgroundColor:'#F57C00',
    color:'#fff',
    width:'100%'
    },
    textField:{
        width:'50%',
        backgroundColor: 'rgba(252, 248, 246, 0.925)'
    },
    container:{
        padding:'0px 3rem'
    },
    }));

    export default function ContactForm() {

    const initialValues = {
        mail: '',
        name: '',
        content:''
    }

    const classes = useStyles();
    const [values, setValue] = useState(initialValues);
    const [success, setSuccess] = useState('')
    const [open, setOpen] = useState(false)

    const createPostOnFirestore = async (values)=>{
        await db.collection('contactos').doc().set(values)
        console.log('Post Subido')
    }
    
    const resetForm = ()=>{
        setValue(initialValues)
    }

    const handleChange = (e) => {
        setValue(prevValues => ({
            ...prevValues,
                [e.target.name]: e.target.value
                }))
            };

            const handleClose = (bool) => {
                    setOpen(bool);
                    };

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (values.name !== '' && values.mail !== '' && values.content !== ''){
            createPostOnFirestore(values)
            resetForm()
            setOpen(true)
            setSuccess('success')
            
        } else {
            setOpen(true)
            setSuccess('error')
            
        }
        
            }

    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} md={12} >
                <Container >
                    <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
                    <div className={classes.mailName}>
                        <TextField
                        className={classes.textField}
                        id="outlined-multiline-flexible"
                        label="E-mail"
                        name='mail'
                        rowsMax={4}
                        
                        type='email'
                        value={values.mail}
                        onChange={handleChange}
                        variant="filled"
                        />
                        <TextField
                        className={classes.textField}
                        id="outlined-textarea"
                        name='name'
                        value={values.name}
                        label="Nombre"
                        onChange={handleChange}
                        placeholder="Nombre"
                        variant="filled"
                        />
                        </div>
                        <TextField
                        id="outlined-multiline-static"
                        label="Mensaje"
                        placeholder='Escribí tu mensaje'
                        name='content'
                        
                        value={values.content}
                        multiline
                        onChange={handleChange}
                        rows={6}
                        variant="filled"
                        />
                        <Button
                        variant="contained"
                        className={classes.button}
                        startIcon={<SendIcon />}
                        type='submit'
                        >
                        Enviar
                    </Button>
                    </form>
                    <ContactAlert
                        open={open}
                        close={()=> handleClose(false)}
                        message={success === 'success' ? 'El formulario fué enviado' : 'Te olvidaste de llenar algo' }
                        severity={success}
                        />
                </Container>
            </Grid>
        </Grid>
    );
    }