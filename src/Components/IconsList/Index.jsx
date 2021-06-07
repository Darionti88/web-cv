import React from 'react'
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    container: {
        color:'#fff',
        minHeight:'60vh',
    },
    title:{
        alignItems:'center',
        justifyContent: 'center'
    },
    icon:{
        height:'40px',
        width:'40px'
    },
    center:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-around',
    }, 
    }));

export default function IconsList(props) {
    const classes = useStyles();

    return (
        <>
        <Grid item container  xs={props.mobile} md={4} sm={4} className={classes.title}>
            <Container className={classes.center}>
                <List component="ul" className={props.className}>
                    <ListItem button>
                        <ListItemIcon>
                            <img src={props.icon1} alt="icon" className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={props.tech1} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <img src={props.icon2} alt="icon" className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={props.tech2} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <img src={props.icon3} alt="icon" className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={props.tech3} />
                    </ListItem>
                </List>
            </Container>
        </Grid>
                    </>
    )
}
