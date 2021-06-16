import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import BackgroundImg from '../../images/cool-background.jpeg'
import OntiPerrito from '../../images/Onti_perrito.png'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        width:'100vw'
    },
    container: {
        padding: '3rem 3rem 1.5rem 1.5rem',
        color:'#fff',
        minwidth:'100vw',
        minHeight:'100vh',
        overflow:'hidden',
        background: `url(${BackgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    container600px:{
        padding: '2rem 0 1rem 0.5rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:'#fff',
        minWidth:'100vw',
        minHeight:'100vh',
        background: `url(${BackgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    imagen:{
        borderRadius: '50%',
        width: '100%'
        
    },
    imgContainer:{
        minHeight:'350px',
        marginTop:'1rem'
    },
    hr:{
        boxShadow: '0px 1px 1px 2px #a15102ab',
        border: '0.1px solid #a1520286 '
    },
    textContainer:{
        padding:'1rem',
        zIndex:'100',
    },
    notDisplay:{
        display:'none'
    },
    orange:{
        color: 'rgb(231, 129, 26)'
    },
    circle1:{
        height: '20rem',
        width: '20rem',
        borderRadius: '50%',
        background:'linear-gradient(0deg, rgba(129,68,5,1) 40%, rgba(245,124,0,0.2) 89%)',
        position: 'absolute',
        right: '3rem',
        bottom: '-1rem',
        marginBottom: '1rem'
    },
    relative:{
        position:'relative'
    },
    circle2:{
        height: '10rem',
        width: '10rem',
        borderRadius: '50%',
        background:'linear-gradient(0deg, rgba(129,68,5,1) 40%, rgba(245,124,0,0.2) 89%)',
        position: 'absolute',
        right: '14rem',
        bottom: '10rem',
        marginBottom: '1rem'
    },
    circle1600px:{
        height: '15rem',
        width: '15rem',
        borderRadius: '50%',
        background:'linear-gradient(0deg, rgba(129,68,5,1) 40%, rgba(245,124,0,0.2) 89%)',
        position: 'absolute',
        right: '1rem',
        top: '1rem',
        marginBottom: '1rem'
    },
    
    circle2600px:{
        height: '8rem',
        width: '8rem',
        borderRadius: '50%',
        background:'linear-gradient(0deg, rgba(129,68,5,1) 40%, rgba(245,124,0,0.2) 89%)',
        position: 'absolute',
        right: '10rem',
        bottom: '7rem',
        marginBottom: '1rem'
    }
    
    }));

export default function Landing() {
    const matches = useMediaQuery('(max-width:600px)');
    const isMatch = useMediaQuery('(max-width:900px)');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2} fluid className={matches || isMatch ? classes.container600px : classes.container}>
                <Grid item container xs={12} md={5} alignContent='center' className={matches || isMatch ? classes.notDisplay : classes.imgContainer}>
                    <img src={OntiPerrito} alt="profile" className={classes.imagen}/>
                </Grid>
                <Grid item className={classes.relative} container xs={12} md={7} alignContent='center'>
                <div className={matches || isMatch ? classes.circle1600px : classes.circle1}><div className={matches || isMatch ? classes.circle2600px : classes.circle2}></div></div>
                    <Container className={classes.textContainer}>
                        <Typography variant={matches ? 'h3' : 'h1'}><span className={classes.orange}>Dario</span> Ontiveros</Typography>
                        <Typography variant='h3' ><Typography variant='caption' className={classes.orange}>(...en camino de ser)</Typography><span className={classes.orange}>FullStack </span>Developer</Typography>
                    </Container>
                </Grid>
            </Grid>
            <hr className={classes.hr}/>
        </div>
    );
}