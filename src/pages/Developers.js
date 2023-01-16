
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

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


export default function Developers() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar />
            <Typography variant="h1" component="h2" gutterBottom>
                Developers
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                This is the developers page
            </Typography>
            <Button color="inherit" component={Link} to="/">
                Home
            </Button>
        </div>
    );

}