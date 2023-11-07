import React from "react";

import './reservedCancellPolicy.css'
import { FcAlarmClock } from 'react-icons/fc'

export default function ReservedCancellPolicy() {
    return (
        <div className="reservedCancellPolicy--container">
            <div className="warning--card">
                <p><strong>How much will it cost to cancel?</strong></p>
                <p className="green--text">Free cancellation before 21 Dec</p>
                <div className="amounts">
                    <p>From 00:00 on 21 Dec</p>
                    <p>KES 21,494 *</p>
                </div>
            </div>
            <div className="cancel">
                <span><FcAlarmClock/></span>
                <div>
                    <p><strong>Limited supply for your dates:</strong></p>
                    <p>22 two-star hotels like this are already unavailable on our site</p>
                </div>
            </div>
        </div>
    )
}