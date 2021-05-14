import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';

// contexts
import { useAuth } from '../../contexts/AuthContext';

function Signup() {

    // routers
    const history = useHistory();


    // fields defined
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [fullname,setFullname] = useState('');

    // auth contexts callings
    const {signup,signupWithGoogle} = useAuth();


    // Form submition
        // Form Submition with Email and Password
     const handleSignupSubmit= async (e)=> {

        e.preventDefault();
        try {
           await  signup(email,password, fullname);
            history.push('/profile')
        }catch{
            window.alert('Signup Failed')
        }
    }


        // Form submition with google login
     const handleSubmitWithGoogle=async (e)=> {
            e.preventDefault();

            try {
                await signupWithGoogle()
                history.push("/profile")
            }catch{
                window.alert("Signup with google failed")
            }
    }

    return (
        <div style={{marginTop:'70px'}}>
            Signup

            {/* Signup Form  Start*/}
            <form onSubmit={handleSignupSubmit}>
            <label>Full Name</label>
            <input type="text" placeholder="Full Name" onChange={(e)=>setFullname(e.target.value)} required/>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} required/>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required/>
            <button type="submit">Signup</button>
            </form>
            {/* Signup Form End */}

            {/* Signup With Google */}
            <button onClick={handleSubmitWithGoogle}>Continue With Google</button>

        </div>
    )
}

export default Signup
