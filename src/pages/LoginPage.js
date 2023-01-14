//create a login page with a link to register page, splitting the login page into two parts login form and an image using react material ui
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function LoginPage() {
    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Box m={2}>
                                <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" className={classes.large} />
                            </Box>
                            <Box m={2}>
                                <Typography variant="h5" component="h2">
                                    Login
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Username" variant="outlined" />
                                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                                    <Button variant="contained" color="primary">
                                        Login
                                    </Button>
                                </form>
                            </Box>
                            <Box m={2}>
                                <Typography variant="body2" component="p">
                                    Don't have an account? <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>Register</Link>
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="login" />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}



