import React from "react";
import { Link } from "react-router-dom";
import './createPassword.css'

export default function CreatePassword () {
    return (
        <div className="createPassword--page">
            <div className="createPassword--page--container">
                <h3>Create password</h3>
                <p>Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers.</p>
                <form action="">
                    <div>
                        <label htmlFor="">Password</label>
                        <input 
                            type="password" 
                            name="" 
                            id="" 
                            placeholder="Enter a password"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Confirm password</label>
                        <input 
                            type="password" 
                            name="" 
                            id="" 
                            placeholder="Confirm your password"
                        />
                    </div>
                    <Link to='../../verifyAccount' className="btn--style continue-btn">Create account</Link>
                </form>
            </div>
        </div>
    )
}