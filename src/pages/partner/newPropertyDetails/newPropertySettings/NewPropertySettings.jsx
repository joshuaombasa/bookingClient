import React from "react";
import { FiPaperclip } from "react-icons/fi";
import { Link } from 'react-router-dom'
import './newPropertySettings.css'

export default function NewPropertySettings() {
    return (
        <div className="newPropertySettings--page">
            <div className="newPropertySettings--page--container">
                <h1>Payments</h1>
                <p>Specify the types of payment you accept, tax details and other options like additional charges.</p>
                <div className="guest--payment">
                    <h3>Guest payment options</h3>
                    <label htmlFor="">Can you charge credit cards at the property?</label>
                    <div className="">
                        <div className="radio--choise">
                            <input type="radio" name="" id="" />
                            <label htmlFor="">Yes</label>
                        </div>
                        <div className="radio--choise">
                            <input type="radio" name="" id="" />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                    <small>We will inform guests that you only accept cash.</small>
                </div>
                <div className="commission--payments">
                    <h3>Commission payments</h3>
                    <div className="commision--text">
                        <p>At the beginning of each month we will send you an invoice for all complete bookings in the previous month.</p>
                        <div className="">
                            <p><strong>Commission percentage:</strong></p>
                            <span className="number">15%</span>
                        </div>
                    </div>
                    <label htmlFor="">What name should be placed on the invoice (e.g. legal/company name)?</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Does this recipient have the same address as your property?</label>
                    <div className="radio--choise--parent">
                        <div className="radio--choise">
                            <input type="radio" name="" id="" />
                            <label htmlFor="">Yes</label>
                        </div>
                        <div className="radio--choise">
                            <input type="radio" name="" id="" />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="considerations">
                    <h4>You’re almost done – just a few final things to consider</h4>
                    <h3>Your availability to guests</h3>
                    <p>To help you start earning, we automatically make your property open for bookings for the next 18 months. If you would like to make changes to your availability before opening, you can choose ‘complete registration and open later’. Your availability can also be adjusted after you open for bookings.</p>
                    <div className="agreement--parent">
                        <span><FiPaperclip className="icon" /></span>
                        <div className="agreement">
                            <p>You have already signed your Accommodation Agreement with Booking.com. When you signed your Agreement, we sent a confirmation email and a copy of the agreement as a PDF.</p>
                            <p>To receive another copy of your Agreement, simply click here.</p>
                        </div>
                    </div>
                </div>
                <Link to='../photos' className="continue--btn">Complete registration and open for bookings</Link>
                <Link className="open--btn">Complete registration and open later</Link>
            </div>
        </div>
    )
}