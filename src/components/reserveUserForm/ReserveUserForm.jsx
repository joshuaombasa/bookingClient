import React, { useState } from "react";
import './reserveUserForm.css'


export default function ReserveUserForm() {

    const [formData, setFormData]  = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country:'',
        telephone:'',
        bookingFor: '',
        travelingForWork: ''
    })

    function handleFormDataChange(event) {
        const {name, value, checked} = event.target
    }

    return (
        <div className="reserveUserForm--container">
            <h3>Enter your details</h3>
            <div className="info--text">
                <p>
                    Almost done! Just fill in the * required info
                </p>
            </div>
            <div className="personals">
                <div className="form--item">
                    <label htmlFor="">First name</label>
                    <input 
                       type="text" 
                       name="" 
                       id="" 
                    />
                </div>
                <div className="form--item">
                    <label htmlFor="">Last name </label>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className="form--item">
                <label htmlFor="">Email address </label>
                <input type="text" name="" id="" />
                <span>Confirmation email goes to this address</span>
            </div>
            <hr />
            <p><strong>Your address</strong></p>
            <div className="form--item">
                <label htmlFor="">Address</label>
                <input type="text" name="" id="" />
            </div>
            <div className="form--item">
                <label htmlFor="">City</label>
                <input type="text" name="" id="" />
            </div>
            <div className="form--item">
                <label htmlFor="">Zip/Post Code</label>
                <input type="text" name="" id="" />
            </div>
            <div className="form--item">
                <label htmlFor="">Country/region</label>
                <input type="text" name="" id="" />
            </div>
            <div className="form--item">
                <label htmlFor="">Telephone (mobile number preferred) *</label>
                <input type="text" name="" id="" />
                <span>Needed by the property to validate your booking</span>
            </div>
            <div className="checked">
                <input type="checkbox" name="" id="" />
                <div className="check--text">
                    <label htmlFor="Yes, I'd like free paperless confirmation (recommended)">Yes, I'd like free paperless confirmation (recommended)</label>
                    <span>We'll text you a link to download our app</span>
                </div>
            </div>
            <hr />
            <div className="booking--for">
                <p><strong>Who are you booking for?</strong></p>
                <div className="guest">
                    <div>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">I am the main guest</label>
                    </div>
                    <div>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Booking is for someone else</label>
                    </div>
                </div>

            </div>
            <div className="travelling--for">
                <p><strong>Are you travelling for work?</strong></p>
                <div>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">Yes</label>
                </div>
                <div>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">No</label>
                </div>
            </div>

        </div>
    )
}