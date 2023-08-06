import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='main-container'>
            <h2>Please Login</h2>
            <form className="container">
                <div className="container-body">
                    <label htmlFor="">Email</label>
                    <input name='email' placeholder='Enter Your Email' type="text" />
                </div>
                <div className="container-body">
                    <label htmlFor="">Password</label>
                    <input name='password' placeholder='Enter Your Password' type="text" />
                </div>
                <button className='login-btn'>Login</button>
            </form>
        </div>
    );
};

export default Login;