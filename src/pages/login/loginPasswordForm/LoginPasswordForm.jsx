import React from "react";
import './loginPasswordForm.css'
import { Link } from "react-router-dom";

export default function LoginPasswordForm() {
    return (
        <div className="loginPasswordForm--container">
            <h2>Enter your password</h2>
            <p>Please enter your Booking.com password for</p>
            <p><strong>nyambegaombasa@gmail.com.</strong></p>
            <form action="">
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" />
                <button>Sign in</button>
            </form>
            <div className="">
                <span className="line--light"></span>
                <p>or</p>
                <span className="line--light"></span>
            </div>
            <Link className="verification--btn">Sign up with a verification Link</Link>
            <Link className="forgotten--password--link">Forgotten your password?</Link>
        </div>
    )
}