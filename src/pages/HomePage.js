//create a home page with a link to the login page
//

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

class HomePage extends Component {
    render() {
        return (
        <div>
            <NavBar />
        </div>
        );
    }
}

export default HomePage;