import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import { setUserSession } from '../service/AuthService'
const loginAPIUrl = 'https://ivkq1zsc8a.execute-api.us-east-1.amazonaws.com/prod/login';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            setErrorMessage('Both username and password are required');
            return;
        }
        setErrorMessage(null);
        const requestConfig = {
            headers: {
                'x-api-key': 'gGtWohl4j2a3dgAksnqbJHd6RSvsJcc37dkEhTzd'
            }
        }
        const requestBody = {
            username: username,
            password: password
        }

        axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
            setUserSession(response.data.user, response.data.token);
            navigate("/AdminPage")
            //   props.history.push('/premium-content');
        }).catch((error) => {
            if (error.response.status === 401 || error.response.status === 403) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('sorry....the backend server is down. please try again later!!');
            }
        })
    }

    return (
        <>
            <AdminLogin />
            <div style={{ color: 'white' }}>
                <form onSubmit={submitHandler}>
                    <h5>Login</h5>
                    username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br />
                    password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br />
                    <input type="submit" value="Login" />
                </form>
                {errorMessage && <p className="message">{errorMessage}</p>}
            </div>
        </>

    )
}

export default Login;