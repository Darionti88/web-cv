import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BackgroundImg from '../../images/cool-background.jpeg'
import { Typography } from '@material-ui/core';
import {Element} from 'react-scroll'
import ReactPlayer from 'react-player/youtube'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        color:'#fff',
        minHeight:'55vh',
        background: `url(${BackgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display:'flex',
        flexDirection:'column'
    },
    title:{
        display:'flex',
        marginTop:'1rem',
        alignItems:'center',
        justifyContent: 'center',
        height: '3rem'
    },
    text:{
        padding: '1.3rem 4.5rem'
    },
    textContainer:{
        margin:'0.5rem 0rem'
    },
    videoContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'1rem',
        width:'100vw',
    },
    videoContainer600px:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:'1rem',
        width:'100%',
    },
    video:{
        marginTop:'1rem'
    },
    hr:{
        boxShadow: '0px 1px 1px 2px #a15102ab',
        border: '0.1px solid #a1520286 '
    },
    }));

export default function SobreMi() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');

    return (
        <Element id='about' name='about' className={classes.root}>
            <Grid container spacing={2} fluid className={classes.container}>
                <Grid item container className={classes.textContainer}>
                <Grid item container md={12} className={classes.title}><Typography variant='h4'>About Me</Typography></Grid>
                    <Grid item container xs={12} md={6} >
                        <Container className={classes.text}>
                            <Typography variant='p' gutterBottom>Soy Dario Ontiveros, pero casi todos me dicen Onti. Tengo 32 años y tengo la suerte de haber estado
                                rodeado de computadoras desde pequeño gracias a que mi madre supo trabajar programando en COBOL y Assembler y mi viejo se dedicó a la seguridad informática. Mi formación académica fue por el lado
                                de la Comunicación, desarrollandome profesionalmente durante más de 7 años en el sector Audiovisual. Empecé como
                                asistente en equipos de Producción y seguí hasta poder realizar varios proyecto liderando el equipo de Locaciones
                            </Typography>
                        </Container>
                    </Grid>
                <Grid item container xs={12} md={6}>
                    <Container className={classes.text}>
                        <Typography variant='p' gutterBottom>La segunda mitad de 2019 decidí irme de viaje a Alemania para juntar plata y poder pasar otra cantidad de meses viajando.
                            Pero 2020 nos sorprendió con la pandemia, así que con bastante tiempo libre entre manos empecé a hacer cursos de manera autodidacta sobre Desarrollo Web y finalmente
                            en Noviembre comencé algunos cursos más formales. Hoy puedo decir que me siento cómodo en el Stack MERN con una buena base de REACT y muy entusiasmado ahora
                            adentrandome más en el mundo de Node.js
                        </Typography>
                    </Container>
                </Grid>
                </Grid>
                <Grid item xs={12} className={matches ? classes.videoContainer600px : classes.videoContainer}>
                <Typography variant='h5'>Charla con Goncy</Typography>
                <ReactPlayer 
                    className={classes.video}
                    url={'https://youtu.be/Izl8j3LoGl0'}
                    controls={true}
                    width={matches ? '340px' : '640px'}
                    height={matches ? '200px' : '360px'}
                />
            </Grid>
            </Grid>
            <hr className={classes.hr}/>
        </Element>
    );
}