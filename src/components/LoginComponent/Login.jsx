import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

// contexts
import { useAuth } from '../../contexts/AuthContext';

function Login() {

    // routers
    const history = useHistory();


    // fields defined
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    // auth contexts callings
    const {login,signupWithGoogle} = useAuth();


    // Form submition
        // Form Submition with Email and Password
     const handleLoginSubmit= async (e)=> {

        e.preventDefault();
        try {
           await  login(email,password);
            history.push('/profile')
        }catch{
            window.alert('Login Failed')
        }
    }


        // Form submition with google login
     const handleSubmitWithGoogle=async (e)=> {
        e.preventDefault();

        try {
            await signupWithGoogle()
            history.push("/profile")
        }catch{
            window.alert("Login with google failed")
        }
    }

    return (
        <div style={{marginTop:'70px'}}>
            Login
            {/* Login Form Start */}
            <form onSubmit={handleLoginSubmit}>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} required/>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required/>
            <button type="submit">Login</button>
            </form>
            <p><Link to="resetPassword">Forgot your password ?</Link></p>
            {/* Login Form End */}

            {/* Login With Google */}
            <button onClick={handleSubmitWithGoogle}>Continue With Google</button>
        </div>
    )
}

export default Login
