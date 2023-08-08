import React, { useContext, useState } from 'react';
import './Login.css'
import { AuthContext } from '../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const {logIn} = useContext(AuthContext)
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const handlelogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        logIn(email, password)
        .then(result => {
            const data = result.data
            form.reset()
            setUser('Login Success',)
            navigate('/')
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className='main-container'>
            <h2>Please Login</h2>
            <form onSubmit={handlelogin} className="container">
                <div className="container-body">
                    <label htmlFor="">Email</label>
                    <input name='email' placeholder='Enter Your Email' type="text" />
                </div>
                <div className="container-body">
                    <label htmlFor="">Password</label>
                    <input name='password' placeholder='Enter Your Password' type="text" />
                </div>
                <button className='login-btn'>Login</button>
                <p className='text-lime-600'>{user}</p>
            </form>
        </div>
    );
};

export default Login;