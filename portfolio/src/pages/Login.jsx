import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/profile');
            }
        }
        catch (err) {
            console.error(err);
            alert('An error occured. Please try again')
        }
    };

    return (
        <form className ="form login-form" onSubmit={handleSubmit}>
            <div className ="form-group">
                <label for="email-login">Email:</label>
                <input className ="form-control" type="text" id="email-login" value={email} onChange={handleEmailChange} required />
            </div>
            <div className ="form-group">
                <label for="password-login">Password:</label>
                <input className ="form-control" type="password" id="password-login" value={password} onChange={handlePasswordChange} required />
            </div>
            <div className ="form-group my-2">
                <button className ="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
    );
}

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/profile');
            }
        }
        catch (err) {
            console.error(err);
            alert('An error occured. Please try again')
        }
    };

    return (
        <form className ="form signup-form" onSubmit={handleSubmit}>
            <div className ="form-group">
                <label for="name-signup">Username:</label>
                <input className ="form-control" type="text" id="name-signup" value={username} onChange={handleUsernameChange} required />
            </div>
            <div className ="form-group">
                <label for="email-signup">Email:</label>
                <input className ="form-control" type="text" id="email-signup" value={email} onChange={handleEmailChange} required />
            </div>
            <div className ="form-group">
                <label for="password-signup">Password:</label>
                <input className ="form-control" type="password" id="password-signup" value={password} onChange={handlePasswordChange} required />
            </div>
            <div className ="form-group my-2">
                <button className ="btn btn-primary" type="submit">Sign up</button>
            </div>
        </form>
    );
}

const Login = () => {
    return (
        <Row className='mx-5'>
            <Col className='mx-5'>
                <h2>Login</h2>
                <LoginForm />
            </Col>
            <Col className='mx-5'>
                <h2>Signup</h2>
                <SignupForm />
            </Col>
        </Row>
    )
}

export default Login;