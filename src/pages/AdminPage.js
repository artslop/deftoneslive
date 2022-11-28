import React from 'react';
import { useNavigate } from "react-router-dom";
import { getUser, resetUserSession } from '../service/AuthService';

const AdminPage = (props) => {
    const navigate = useNavigate();
    const user = getUser();
    const name = user !== 'undefined' && user ? user.name : '';

    const logoutHandler = () => {
        resetUserSession();
        navigate('/login');
    }
    return (
        <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
            Hello {name}! You have been loggined in!!!! Welcome to the premium content. <br />
            <input type="button" value="Logout" onClick={logoutHandler} />
        </div>
    )
}

export default AdminPage;