//create a regiter page with a form that has a username, email, password, and confirm password field and a submit button that will send the data to the backend

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
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
}));

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
    if (
        values.password &&
        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
    ) {
        errors.password = 'Password must contain at least 8 characters, one letter, and one number';
    }
    return errors;
}
// setting validation on button click
const onSubmit = (values) => {
    console.log(values);
}

export default function RegisterPage() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = React.useState({});

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));
    };

    return (
        <div>
            <NavBar />
            <Container className={classes.container} maxWidth="lg">
            <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Box m={2}>
                                <Typography variant="h5" component="h2">
                                    Log In
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                        error={errors.email ? true : false}
                                        helperText={errors.email}
                                    />
                                    <TextField
                                        id="password"
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        error={errors.password ? true : false}
                                        helperText={errors.password}
                                    />
                                    <Box m={2}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            align = "center"
                                        >
                                            Sign Up
                                        </Button>

                                    </Box>
                                </form>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.image}>
                            <img src={image} alt="contact" />
                        </div>
                    </Grid>

            </Container>
        </div>
    );
}



