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
        'username',
        'email',
        'password',
        'confirmPassword',
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
    if (
        values.confirmPassword &&
        values.password !== values.confirmPassword
    ) {
        errors.confirmPassword = 'Passwords do not match';
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
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
                                    Sign Up
                                </Typography>
                            </Box>
                            <Box m={2}>
                                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                    <TextField
                                        id="username"
                                        label="Username"
                                        variant="outlined"
                                        value={values.username}
                                        onChange={handleChange('username')}
                                        error={errors.username ? true : false}
                                        helperText={errors.username}
                                    />
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
                                    <TextField
                                        id="confirmPassword"
                                        label="Confirm Password"
                                        variant="outlined"
                                        type="password"
                                        value={values.confirmPassword}
                                        onChange={handleChange('confirmPassword')}
                                        error={errors.confirmPassword ? true : false}
                                        helperText={errors.confirmPassword}
                                    />
                                </form>
                            </Box>
                            <br />
                            <Box m={4}>
                                <Button variant="contained" color="primary" type="submit">
                                    Sign Up
                                </Button>
                            </Box>
                            <br />
                            <Box m={2} >
                                <Typography variant="body2" component="p">
                                    Already have an account? <Link to="/login">Login</Link>
                                </Typography>
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








