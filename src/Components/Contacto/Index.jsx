import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container'
import WapIcon from '../../images/icons/whatsapp.png'
import GitIcon from '../../images/icons/github.png'
import LinkedIcon from '../../images/icons/linkedin.svg'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import BackgroundImg from '../../images/cool-background.jpeg'
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ContactForm from '../ContactForm/Index';
import {Element} from 'react-scroll'
import Onticv from '../../docs/cv_Dario_Ontiveros.pdf'

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        padding: '0px 15px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginBottom:'1.5rem',
        alignItems:'center',
    },
    container: {
        color:'#fff',
        minHeight:'40vh',
        background: `url(${BackgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    icon:{
        height:'40px',
        width:'40px'
    }, 
    button: {
        backgroundColor:'#F57C00',
        color:'#fff',
        width:'100%',
        marginTop:'1rem'
        },
    title:{
        alignItems:'center',
        justifyContent: 'center',
        margin:'1rem 0 1rem 0'
    },
    list:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
    listItem:{
        width: '4rem'
    },
    contactForm:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
    }));

export default function Contacto() {
    const classes = useStyles();

    return (
            <Element name='contact' id='contact'>
                <Grid id='contact' container spacing={2} fluid className={classes.container}>
                    <Grid item container md={12}>
                        <Grid item md={6} xs={12}>
                            <Container className={classes.gridContainer}>
                                <Grid item container md={12} className={classes.title}><Typography variant='h6'>Social</Typography></Grid>
                                    <List component="nav" aria-label="main mailbox folders" className={classes.list}>
                                        <ListItem button className={classes.listItem}>
                                            <Link href='https://api.whatsapp.com/send/?phone=5491157532277' target='_blank'>
                                                <ListItemIcon>
                                                    <img src={WapIcon} alt="html-icon" className={classes.icon}/>
                                                </ListItemIcon>
                                            </Link>
                                        </ListItem>
                                            <ListItem button className={classes.listItem}>
                                                <Link target='_blank' href='https://www.linkedin.com/in/dario-ontiveros-1a5148a0/'>
                                                    <ListItemIcon>
                                                        <img src={LinkedIcon} alt="css-icon" className={classes.icon}/>
                                                    </ListItemIcon>
                                                </Link>
                                            </ListItem>
                                        <ListItem button className={classes.listItem}>
                                            <Link target='_blank' href='https://github.com/Darionti88'>
                                                <ListItemIcon>
                                                    <img src={GitIcon} alt="css-icon" className={classes.icon}/>
                                                </ListItemIcon>
                                            </Link>
                                        </ListItem>
                                    </List>
                                    <Link href={Onticv} target='_blank' download>
                                        <Button
                                        variant="contained"
                                        className={classes.button}
                                        startIcon={<SaveAltIcon />}
                                        >
                                            Descargar CV
                                        </Button>
                                    </Link>
                            </Container>
                        </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid item container md={12} className={classes.contactForm}><Typography variant='h6'>Contact</Typography></Grid>
                            <ContactForm />
                        </Grid>
                    </Grid>
                </Grid>
            <hr/>
            </Element>
    );
}