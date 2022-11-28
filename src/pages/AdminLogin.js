import { NavLink } from "react-router-dom";

function AdminLogin() {
    return (
        <div id="albums" className="container">
            <div className="albumgroup">
                <div style={{ color: 'white' }}>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/register">Register</NavLink>
                </div>
                <div>
                    <NavLink to="/login">Login</NavLink>
                </div>
                <div>
                    <NavLink to="/adminPage">Premium Content</NavLink>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;