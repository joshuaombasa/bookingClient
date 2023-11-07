import React from "react";
import './reservedBookingPriceSummary.css'

import { FaMoneyBillWaveAlt } from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { MdOutlineCurrencyExchange } from 'react-icons/md'
import { Link } from "react-router-dom";

export default function ReservedBookingPriceSummary() {
    return (
        <div className="reservedBookingPriceSummary--container">
            <p><strong>Your price summary</strong></p>
            <div className="price--line">
                <h3>Price</h3>
                <div>
                    <h3>KES 163,598.43</h3>
                    <p>+KES 16,687 taxes and charges</p>
                    <p>In property currency: US$1,082</p>
                </div>
            </div>
            <p><strong>Price information</strong></p>
            <div className="price--info">
                <span><FaMoneyBillWaveAlt/></span>
                <div className="tax-line">
                    <p>Excludes KES 16,687.04 in taxes and charges</p>
                    <div>
                        <p>10.20 % Tax</p>
                        <p>KES 16,687.04</p>
                    </div>
                </div>
                
            </div>
            <div className="price--note">
                    <span><RiSecurePaymentFill/></span>
                    <p>This price is converted to show you the approximate cost in KES. You'll pay in <strong>US$</strong>. The exchange rate may change before you pay.</p>
            </div>
            <div className="price--note">
                    <span><MdOutlineCurrencyExchange/></span>
                    <p>Bear in mind that your card issuer may charge you a foreign transaction fee.</p>
                </div>
            <Link>Hide details</Link>
        </div>
    )
}