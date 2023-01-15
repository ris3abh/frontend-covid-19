import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import { makeStyles } from '@material-ui/core';


class HomePage extends Component {
    render() {
        return (
        <div>
            <NavBar />
            <Banner />
        </div>
        );
    }
}

export default HomePage;