import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import GitIcon from '../../images/icons/github.png'
import Link from '@material-ui/core/Link';
import WwwIcon from '../../images/icons/www.png'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import './cardTrabajo.css'

    const useStyles = makeStyles({
    container:{
        margin: '1rem 0',
        
    },
    center:{
        margin:'0 auto',
    },
    media: {
        minWidth:'100%',
        height: 140,
        objectFit: 'cover',
        
    },
    icon:{
        height:'30px',
        width:'30px'
    },
    iconContainer:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        margin: '0 auto'
    },
    text:{
        color:'#fff',
    },
    avatar: {
        backgroundColor: 'blue',
        color: 'blue',
      },
    listItem:{
        marginTop:'10px'
    },
    dialog:{
        color:'#333'
    }
    });


    export default function CardTrabajo(props) {
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
            };
        
        const handleClose = () => {
            setOpen(false);
            };


    return (
        <>
        <Grid item container md={6} xs={6} className={classes.container}>
            <Container >
                <Grid item md={6} className={classes.center}>
                    <Card raised='true'  >
                        <CardActionArea>
                            <CardMedia
                            onClick={handleClickOpen}
                            className={classes.media}
                            image={props.media}
                            title={props.title}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            <Grid item md={6} className={classes.iconContainer}>
                <ListItem className={classes.listItem}>
                    <ListItemIcon >
                        <img src={GitIcon} alt="html-icon" className={classes.icon}/>
                    </ListItemIcon>
                    <Link href={props.repo} target='_blank' className={classes.text} align='left'  noWrap='true' underline='none'>{props.repo}</Link>
                    </ListItem>
                    <ListItem >
                    <ListItemIcon >
                        <img src={WwwIcon} alt="html-icon" className={classes.icon}/>
                    </ListItemIcon>
                    <Link href={props.web} target='_blank' className={classes.text} align='left' noWrap='true' underline='none' >{props.web}</Link>
                </ListItem>
            </Grid>
            </Container>
                    </Grid>
                        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                            <DialogTitle id="simple-dialog-title">{props.proyecto}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        {props.desc}
                                    </DialogContentText>
                                </DialogContent>
                            </Dialog>
        </>
    );
    }