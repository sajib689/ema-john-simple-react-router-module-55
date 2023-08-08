import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const signOut = () => {
        logOut()
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">{user?.email}</Link>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user ? 
                    <Link onClick={signOut}>SignOut</Link>
                    :
                    <Link to="/login">Login</Link>
                }
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;