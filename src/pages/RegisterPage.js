import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterPage extends Component {
    render() {
        return (
        <div>
            <h1>Register Page</h1>
            <Link to="/register">Register</Link>
        </div>
        );
    }
    }

export default RegisterPage;