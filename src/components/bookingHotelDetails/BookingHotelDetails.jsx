import React from "react";
import './bookingHotelDetails.css'
import { RiStarSFill } from 'react-icons/ri'
import { LuParkingCircle } from 'react-icons/lu'
import { BsWifi } from 'react-icons/bs'

export default function BookingHotelDetails() {
    return (
        <div className="bookingHotelDetails--container">
            <div className="selected--hotel">
                <span>
                    <RiStarSFill className="gold--star"/>
                    <RiStarSFill className="gold--star"/>
                    <RiStarSFill className="gold--star"/>
                    <RiStarSFill className="gold--star"/>
                </span>
                <h3>Holiday Inn Express & Suites Colorado Springs Central, an IHG Hotel</h3>
                <p>105 North Spruce Street, Colorado Springs, CO 80908, United States</p>
                <p className="green--text">Great location — 8.4</p>
                <div className="rating--line">
                    <p className="rating--value">8.9</p>
                    <small><strong>Very good </strong></small>
                    <small>· 425 reviews</small>
                </div>
                <div className="some--perks">
                    <div className="wifi--perk">
                        <span>< BsWifi/></span>
                        <p>Free WiFi</p>
                    </div>
                    <div className="parking--perk">
                        <span><LuParkingCircle/></span>
                        <p>Parking</p>
                    </div>
                </div>
            </div>
        </div>
    )
}