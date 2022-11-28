import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../service/AuthService';

export const PrivateRoute = () => {
    const auth = getToken();
    return auth ? <Outlet /> : <Navigate to="/login" />;
}