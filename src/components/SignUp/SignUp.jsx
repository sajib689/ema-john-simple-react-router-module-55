import React from 'react';
import './SignUp.css'
const SignUp = () => {
    const signUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
    }
    return (
        <div className='main-container'>
        <h2>Please Register</h2>
        <form className="container">
            <div className="container-body">
                <label htmlFor="">Name</label>
                <input name='name' placeholder='Enter Your Name' type="text" />
            </div>
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

export default SignUp;