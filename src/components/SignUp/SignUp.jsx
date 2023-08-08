import React, { useContext, useState } from 'react';
import './SignUp.css'
import { AuthContext } from '../../Providers/AuthProviders';
const SignUp = () => {
    const {register} = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const signUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        register(name, email, password)
        .then(result => {
            const user = result.user
            setSuccess('Registration successful')
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className='main-container'>
        <h2>Please Register</h2>
        <form onSubmit={signUp} className="container">
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
            <p>{success}</p>
        </form>
    </div>
    );
};

export default SignUp;