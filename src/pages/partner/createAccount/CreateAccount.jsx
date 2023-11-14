import React from "react";
import { Link } from "react-router-dom";
import './createAccount.css'

export default function CreateAccount() {
    return (
        <div className="createAccount-page">
            <div className="createAccount--page--container">
                <h3>Create your partner account</h3>
                <p>Create an account to list and manage your property.</p>
                <form action="">
                    <label htmlFor="">Email address</label>
                    <input 
                       type="email" 
                       name="" 
                       id="" 
                       placeholder="Enter your email adress"
                    />
                    <Link to='contactDetails' className="continue-btn btn--style ">Continue</Link>
                </form>
                <hr />
                <p>Do you have questions about your property or the extranet? Visit Partner Help or ask another question on the Partner Community.</p>
                <Link  to='/admin/home/operations' className="sign-in-redirect btn--style ">Sign in</Link>
            </div>
        </div>
    )
}