//login button opens a popup window from LoginPage.js

//navbar with a logo, login button, registration button, and a link to the developers page and making it responsive


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src= {logo} alt="logo" style={{ width: 50, height: 50 }}
                            component = {Link} to = "/"
                        />
                    </IconButton>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>

                    <Button color="inherit" component={Link} to="/login">
                        Login
                    </Button>
                    <Button color="inherit" component={Link} to="/register">
                        Register
                    </Button>
                    <Button color="inherit" component={Link} to="/developers">
                        Developers
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );

}