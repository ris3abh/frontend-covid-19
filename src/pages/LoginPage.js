import React from 'react';
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
import image from '../assets/contact2.png';

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
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    //setting the login form in the middle of the page
    
}));

//creating form validation for login
const validate = values => {
    const errors = {};
    const requiredFields = [
        'email',
        'password',
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};


export default function LoginPage() {
    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <Container maxWidth="lg" alignContent= "center" justify="center">
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={6} style={{ marginTop: '30vh' }}>
                        <Paper className={classes.paper}>
                            <Box m={2}>
                                <Typography variant="h5" component="h2">
                                    Login
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Email" variant="outlined" />
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
                    <Grid item xs={12} sm={6} style={{ marginTop: '13vh' }}>
                        <div className={classes.paper}>
                            <img src={image} alt="contact" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}



