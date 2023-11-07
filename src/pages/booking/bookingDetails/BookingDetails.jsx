import React, { useState } from "react";
import './bookingDetails.css'

import { Link } from "react-router-dom";
import BookingHotelDetails from "../../../components/bookingHotelDetails/BookingHotelDetails";
import ReservedBookingDetails from "../../../components/reservedBookingDetails/ReservedBookingDetails";
import ReservedBookingPriceSummary from "../../../components/reservedBookingPriceSummary/ReservedBookingPriceSummary";
import ReservedCancellPolicy from "../../../components/reservedCancellPolicy/ReservedCancellPolicy";
import ReserveUserForm from "../../../components/reserveUserForm/ReserveUserForm";

export default function BookingDetails() {

    

    return (
        <div className="bookingDetails--page">
            <div className="bookingDetails--page--container">
                <div className="hotel--details">
                    <BookingHotelDetails/>
                    <ReservedBookingDetails/>
                    <ReservedBookingPriceSummary/>
                    <ReservedCancellPolicy/>
                </div>
                <div className="your--personal--details">
                    <ReserveUserForm/>
                </div>
            </div>
        </div>
    )
}