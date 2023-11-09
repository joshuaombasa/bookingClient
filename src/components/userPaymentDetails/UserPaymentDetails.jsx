import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdLockOutline } from 'react-icons/md'
import './userPaymentDetails.css'

export default function UserPaymentDetails() {

    const [saveDetails, setSaveDetails] = useState('')

    function handleSaveDetailsChange(event) {
        const { name, checked } = event.target
        setSaveDetails(checked)
    }

    const [marketingEmails, setMarketingEmails] = useState({
        recieveProductUpdatesMarketingEmails: false,
        recieveTransportDealsMarketingEmails: false
    })

    const expiryMonths = [
        "01-Jan",
        "02-Feb",
        "03-Mar",
        "04-Apr",
        "05-May",
        "06-Jun",
        "07-Jul",
        "08-Aug",
        "09-Sep",
        "10-Oct",
        "11-Nov",
        "12-Dec"
    ];

    const monthsOptionsElements = expiryMonths.map(item => (
        <option key={item}>{item}</option>
    ))

    const yearsList = [
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030",
        "2031",
        "2032",
        "2033",
        "2034",
        "2035",
        "2036",
        "2037",
        "2038",
        "2039",
        "2040",
        "2041",
        "2042",
        "2043",
        "2044",
        "2045",
        "2046",
        "2047",
        "2048",
        "2049",
        "2050",
        "2051",
        "2052",
        "2053"
    ];

    const yearOptionElements = yearsList.map(year => (
        <option key={year}>{year}</option>
    ))


    return (
        <div className="userPaymentDetails--container">
            <div className="save--detals--card">
                <h3>Save your details</h3>
                <div className="">
                    <p>Use your contact details to create an account and speed up future bookings.</p>
                    <p>(We won't save your payment information.)</p>
                </div>
                <div className="save--details">
                    <input
                        type="checkbox"
                        name="saveDetails"
                        id="saveDetails"
                    />
                    <label htmlFor="saveDetails">Save my details so I can book faster next time</label>
                </div>
                <p>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</p>
            </div>
            <div className="how--do--you--want--to--pay--card">
                <h3>How do you want to pay?</h3>
                <div className="">
                    <label htmlFor="">Cardholder's name *</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="">
                    <label htmlFor="">Card type *</label>
                    <select name="" id="">
                        <option value="MasterCard">MasterCard</option>
                        <option value="Visa">Visa</option>
                        <option value="Discover">Discover</option>
                        <option value="American Express">American Express</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="">Card number *</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="card--expiry">
                    <label htmlFor="">Expiry date *</label>
                    <div className="">
                        <select className='date' name="" id="">
                            {monthsOptionsElements}
                        </select>
                        <span>/</span>
                        <select className='year' name="" id="">
                            {yearOptionElements}
                        </select>
                    </div>
                </div>
                <div className="">
                    <p><strong>CVC-code</strong></p>
                    <p>You do not need to enter a CVC code for this booking.</p>
                </div>
            </div>
            <div className="extras">
                <div className="subscriptions">
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Yes, I consent to receiving marketing emails including deals, travel inspiration and updates on products and services from Booking.com.</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Yes, I consent to receiving marketing emails from Booking.com about transport deals from Booking.com Transport Limited</label>
                    </div>
                </div>
                <small>You can unsubscribe at any time. View our <Link>privacy policy.</Link></small>
                <p>Your booking is with The Academy Hotel Colorado Springs directly and by completing this booking you agree to the <Link>booking conditions</Link>, <Link>general terms</Link>, and <Link>privacy policy</Link>.</p>
            </div>
            <div className="page---links">
                <Link className='checkBooking'>Check your booking</Link>
                <Link className='completeBooking'>
                    <span><MdLockOutline /></span>
                    <span>Complete booking</span>
                </Link>

            </div>
        </div>
    )
}