import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-scroll'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(() => ({
  navbar:{
    backgroundColor:'rgb(20, 20, 20)',
    minWidth:'100vw',
    position:'fixed'
  },
  title: {
    display:'flex',
    justifyContent:'flex-end'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.navbar}>
        <Toolbar className={classes.title}>
          <Link 
            activeClass="active" 
            to='tecno'
            smooth={true}
            duration={500}
            >
            <Button color="inherit">Technologies</Button>
          </Link>
          <Link 
            activeClass="active" 
            to='about'
            smooth={true}
            duration={500}
            >
            <Button color="inherit">About</Button>
          </Link>
          <Link 
            activeClass="active" 
            to='works'
            smooth={true}
            duration={500}
            >
            <Button color="inherit">Works</Button>
          </Link>
          <Link 
            activeClass="active" 
            to='contact'
            smooth={true}
            duration={500}
            >
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
  );
}