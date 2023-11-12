import React from "react";
import { Link } from "react-router-dom";
import { dialCodes } from "../../../utils/data";
import './contactDetails.css'

export default function ContactDetails() {

    const dialCodeOptionElements = dialCodes.map(code => (
        <option key={code}>{code}</option>
    ))

    return (
        <div className="contactDetails--page">
            <div className="contactDetails--page--container">
                <h3>Contact details</h3>
                <p>Your full name and phone number are needed to ensure the security of your Booking.com account.</p>
                <form action="">
                    <div className="">
                        <label htmlFor="">First name</label>
                        <input type="text" />
                    </div>
                    <div className="">
                        <label htmlFor="">Last name</label>
                        <input type="text" />
                    </div>
                    <div className="">
                        <label htmlFor="">Phone number</label>
                        <select className="dial--code" name="" id="">
                        {dialCodeOptionElements}
                        </select>
                        <div className="phoneNumber">
                            <span>+241</span>
                            <input type="text" name="" id="" />
                        </div>
                        <p>We'll text a two-factor authentication code to this number when you sign in.</p>
                    </div>
                    <Link to='../createPassword' className="continue-btn btn--style">Next</Link>
                </form>
            </div>
        </div>
    )
}