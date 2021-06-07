import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardTrabajo from '../CardTrabajo/Index'
import Periodistan from '../../images/capturas/periodistan.png'
import Lady from '../../images/capturas/ladyahorro.png'
import Keeper from '../../images/capturas/keeper.png'
import Bakery from '../../images/capturas/bakery.png'
import BackgroundImg from '../../images/cool-background.jpeg'
import { Typography } from '@material-ui/core';
import {Element} from 'react-scroll'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    container: {
        color:'#fff',
        minHeight:'50vh',
        background: `url(${BackgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    title:{
            display:'flex',
            marginTop:'1rem',
            marginBottom:'1rem',
            alignItems:'center',
            justifyContent: 'center',
            height: '3rem'
    },
    hr:{
        boxShadow: '0px 1px 1px 2px #a15102ab',
        border: '0.1px solid #a1520286 '
    },
    }));

export default function Trabajos() {
    const classes = useStyles();

    return (
        <Element name='works' id='works' className={classes.root}>
            <Grid container spacing={2} fluid className={classes.container}>
                <Grid item container md={12} className={classes.title}><Typography variant='h4'>Works</Typography></Grid>
                <Grid item container md={12}>
                    <CardTrabajo 
                    proyecto='Periodistan'
                    desc= 'Proyecto realizado con React.Js más JSON locales y una DB con MySql deployada con Heroku. Recopila algunos hilos de Twitter del Periodista Fernando Dúclos (alias @periodistan_) y los agrupa por continente'
                    media={Periodistan}
                    title='Periodistan'
                    repo='https://github.com/Darionti88/periodistan'
                    web='https://periodistan-threads.netlify.app/' />
                    <CardTrabajo
                    proyecto='E-Bakery'
                    desc='E-Commerce hecho para practicar Typescript. Se utilizó Strapi como Content Manager de una DB en Mongo. Las imagenes están alojadas en S3 de AWS'
                    media={Bakery}
                    title='Bakery'
                    repo='https://github.com/Darionti88/bakery-ecommerce-front'
                    web='https://bakery-mjo.vercel.app/'  />
                    <CardTrabajo
                    proyecto='Clon de un viejo Google Keep'
                    desc='De mis primeros proyectos para practicar React. Se pueden hacer notas. Próximos pasos, poder iniciar sesión y guardar las notas'
                    media={Keeper}
                    title='Keeper'
                    repo='https://github.com/Darionti88/keeper'
                    web='https://keeper-by-gugul.netlify.app/'  />
                    <CardTrabajo
                    proyecto='Lady Ahorro Web'
                    desc='Es una colaboración con Lady ahorro. Necesita desarrollar una parte de Blog y para poder practicar me dejó hacer ese feature. Está armado el Dashboard y los Admin ya pueden crear los Posteos, eliminarlos y editarlos. Falta armar la vista para el cliente. Está pusheado en mi branch del feature pero su desarrollador todavía no lo mergeo'
                    media={Lady}
                    title='Periodistan'
                    repo=''
                    web='http://ladyahorro.com/'  />
                </Grid>
            </Grid>
            <hr className={classes.hr}/>
        </Element>
    );
}