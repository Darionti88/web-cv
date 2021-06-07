import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
//Iconos
import HtmlIcon from '../../images/icons/html.png'
import CssIcon from '../../images/icons/css.png'
import JsIcon from '../../images/icons/javascript.png'
import ReactIcon from '../../images/icons/react.png'
import SqlIcon from '../../images/icons/sql.png'
import GitIcon from '../../images/icons/github.png'
import FirebaseIcon from '../../images/icons/firebase.png'
import TsIcon from '../../images/icons/typescript.png'
import NodeIcon from '../../images/icons/nodejs.svg'
//Background
import BackgroundImg from '../../images/cool-background.jpeg'
import { Typography } from '@material-ui/core';
import IconsList from '../IconsList/Index';
import {Element} from 'react-scroll'
//Css
import './styles.css'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        width:'100vw'
    },
    container: {
        color:'#fff',
        maxHeight:'70vh',
        background: `url(${BackgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '1rem 1rem 1.5rem 1rem'
    },
    title:{
        alignItems:'center',
        justifyContent: 'center',
        marginBottom:'2rem'
    },
    hr:{
        boxShadow: '0px 1px 1px 2px #a15102ab',
        border: '0.1px solid #a1520286 '
    }
    }));

export default function Tecnologías() {
    const classes = useStyles();

    return (
        <Element name='tecno' id='tecno' className={classes.root}>
            <Grid container spacing={2} fluid className={classes.container}>
                <Grid item container md={12} className={classes.title}>
                    <Typography variant='h4'>Techs</Typography>
                </Grid>
                <IconsList
                    mobile={6}
                    icon1={HtmlIcon}
                    tech1='HTML5'
                    icon2={CssIcon}
                    tech2='CSS3 - Sass'
                    icon3={JsIcon}
                    tech3='Javascript - OOP'
                />
                <IconsList
                    mobile={6}
                    icon1={ReactIcon}
                    tech1='React - Redux'
                    icon2={TsIcon}
                    tech2='Typescript'
                    icon3={FirebaseIcon}
                    tech3='Firebase'
                    />
                <IconsList
                    mobile={12}
                    icon1={GitIcon}
                    tech1='Git - Github'
                    icon2={SqlIcon}
                    tech2='MySql - Postgres - Sequelize'
                    icon3={NodeIcon}
                    tech3='Node.Js - Express'
                />
                
            </Grid>
            <hr className={classes.hr}/>
        </Element>
    );
}