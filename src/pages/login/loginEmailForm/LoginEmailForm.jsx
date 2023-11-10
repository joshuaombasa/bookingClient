import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginEmailForm'

import fbLogo from '../../../assets/facebook.png'
import googleLogo from '../../../assets/google.png'
import appleLogo from '../../../assets/apple.png'


export default function LoginEmailForm() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        navigate('password', {email})
        console.log(email)
    }


    return (
        <div className="email--form--page">
            <div className="email--form--container">
                <h2>Sign in or create an account</h2>
                <form onSubmit={handleSubmit} action="">
                    <label htmlFor="">Email address</label>
                    <input 
                        type="email" 
                        name="" 
                        required
                        id="" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email address"
                    />
                    <button>Continue with your email</button>
                </form>
                <div className="line--wrap">
                    <span className="line--light"></span>
                    <p>or use one of these options</p>
                    <span className="line--light"></span>
                </div>
                <div className="register--options">
                    <img src={fbLogo} alt="" />
                    <img src={googleLogo} alt="" />
                    <img src={appleLogo} alt="" />
                </div>
                
            </div>
        </div>
    )
}