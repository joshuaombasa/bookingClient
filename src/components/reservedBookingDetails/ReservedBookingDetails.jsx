import React from "react";
import './reservedBookingDetails.css'
import { Link } from 'react-router-dom'

export default function ReservedBookingDetails() {
    return (
        <div className="reservedBookingDetails--container">
            <p><strong>Your booking details</strong></p>
            <div className="checkin--checkout">
                <div className="check--in check">
                    <p>Check-in</p>
                    <p><strong>Fri 22 Dec 2023</strong></p>
                    <p>From 15:00</p>
                </div>
                <div className="check--out check">
                    <p>Check-out</p>
                    <p><strong>Sat 30 Dec 2023</strong></p>
                    <p>Until 12:00</p>
                </div>
            </div>
            <p>Total length of stay:</p>
            <p>8 nights</p>
            <hr />
            <p>You selected</p>
            <p><strong>1 room for 2 adults</strong></p>
            <div className="room--text">
                <p>1 x King Room</p>
                <p>2 adults</p>
            </div>
            <Link>Change your selection</Link>
        </div>
    )
}