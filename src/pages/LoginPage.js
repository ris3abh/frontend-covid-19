//create a login page   

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    render() {
        return (
        <div>
            <h1>Login Page</h1>
            <Link to="/login">login</Link>
        </div>
        );
    }
    }

export default LoginPage;