import React, { useState } from "react";
import './reserveUserForm.css'
import { FaCheck } from 'react-icons/fa'


export default function ReserveUserForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        telephone: '',
        bookingFor: '',
        iStravelingForWork: '',
        yespaperlessconfirmation: true
    })

    function handleFormDataChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }
        })
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
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleFormDataChange}
                    />
                </div>
                <div className="form--item">
                    <label htmlFor="lastName">Last name </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleFormDataChange}
                    />
                </div>
            </div>
            <div className="form--item">
                <label htmlFor="email">Email address </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleFormDataChange}
                />
                <span>Confirmation email goes to this address</span>
            </div>
            <hr />
            <p><strong>Your address</strong></p>
            <div className="form--item">
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleFormDataChange}
                />
            </div>
            <div className="form--item">
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleFormDataChange}
                />
            </div>
            <div className="form--item">
                <label htmlFor="zipCode">Zip/Post Code</label>
                <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={handleFormDataChange}
                />
            </div>
            <div className="form--item">
                <label htmlFor="country">Country/region</label>
                <input
                    type="text"
                    name="country"
                    id="country"
                    value={formData.country}
                    onChange={handleFormDataChange}
                />
            </div>
            <div className="form--item">
                <label htmlFor="telephone">Telephone (mobile number preferred) *</label>
                <input
                    type="text"
                    name="telephone"
                    id="telephone"
                    value={formData.telephone}
                    onChange={handleFormDataChange}
                />
                <span>Needed by the property to validate your booking</span>
            </div>
            <div className="checked">
                <input
                    type="checkbox"
                    name="yespaperlessconfirmation"
                    id="yespaperlessconfirmation"
                    checked={formData.yespaperlessconfirmation === true}
                    onChange={handleFormDataChange}
                />
                <div className="check--text">
                    <label htmlFor="yespaperlessconfirmation">Yes, I'd like free paperless confirmation (recommended)</label>
                    <span>We'll text you a link to download our app</span>
                </div>
            </div>
            <hr />
            <div className="booking--for">
                <p><strong>Who are you booking for?</strong></p>
                <div className="guest">
                    <div>
                        <input
                            type="radio"
                            name="bookingFor"
                            value={'mainGuest'}
                            checked={formData.bookingFor === 'mainGuest'}
                            id="mainGuest"
                            onChange={handleFormDataChange}
                        />
                        <label htmlFor="mainGuest">I am the main guest</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="bookingFor"
                            value={'someoneElse'}
                            checked={formData.bookingFor === 'someoneElse'}
                            id="someoneElse"
                            onChange={handleFormDataChange}
                        />
                        <label htmlFor="someoneElse">Booking is for someone else</label>
                    </div>
                </div>

            </div>
            <div className="travelling--for">
                <p><strong>Are you travelling for work?</strong></p>
                <div>
                    <input
                        type="radio"
                        name="iStravelingForWork"
                        id="yes"
                        value= 'yes'
                        checked={formData.iStravelingForWork === 'yes'}
                        onChange={handleFormDataChange}
                    />
                    <label htmlFor="yes">Yes</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="iStravelingForWork"
                        id="no"
                        value= 'no'
                        checked={formData.iStravelingForWork === 'no'}
                        onChange={handleFormDataChange}
                    />
                    <label htmlFor="no">No</label>
                </div>
            </div>

        </div>
    )
}