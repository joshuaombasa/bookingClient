import React from "react";
import { Link } from 'react-router-dom'
import './getStartedCard.css'
import { PiCheckLight } from 'react-icons/pi'
import { BsArrowRight } from 'react-icons/bs'

export default function GetStartedCard() {
    return (
        <div className="getStartedCard--container">
            <h3>Earn more with consistent bookings</h3>
            <div className="checks">
                <span><PiCheckLight className="icon"/></span>
                <p>45% of partners get their first booking within a week</p>
            </div>
            <div className="checks">
                <span><PiCheckLight className="icon"/></span>
                <p>More than 1,1 billion holiday rental guests since 2010</p>
            </div>
            <div className="checks">
                <span><PiCheckLight className="icon"/></span>
                <p>Full control over your property and finances</p>
            </div>
            <div className="checks">
                <span><PiCheckLight className="icon"/></span>
                <p>Registration is free and takes 15 minutes</p>
            </div>
            <span className="line--light"></span>
            <div className="btn">
                <Link to='createAccount'>Get started now</Link>
                <span><BsArrowRight className="icon"/></span>
            </div>
            <span className="line--light"></span>
            <div className="already--registered--link">
                <p><strong>Already started a registration?</strong></p>
                <Link>Continue your registration</Link>
            </div>
        </div>
    )
}