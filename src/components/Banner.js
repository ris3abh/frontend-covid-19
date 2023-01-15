import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpeg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#000',
        textAlign: 'center',
        '& h1': {
            fontSize: '4rem',
            textTransform: 'uppercase',
            fontWeight: '900',
            letterSpacing: '4px',
            marginBottom: '0',
            '@media (max-width: 600px)': {
                fontSize: '2.5rem'
            }
        },
        '& h3': {
            fontSize: '1.5rem',
            fontWeight: '300',
            letterSpacing: '2px',
            marginTop: '0',
            '@media (max-width: 600px)': {
                fontSize: '1rem'
            }
        },
        '& a': {
            display: 'inline-block',
            marginTop: '20px',
            background: '#fff',
            color: '#000',
            textDecoration: 'none',
            padding: '10px 30px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontWeight: '700',
            fontSize: '1rem',
            borderRadius: '4px',

            '&:hover': {
                background: '#000',
                color: '#fff'
            }
        }
    }
});

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <h1>COVID-19</h1>
            <h3>Vaccine suggesstions and get tested for covid-19 with an online test</h3>
            <Link to="/login">login</Link>
        </div>
    );
}

export default Banner;

