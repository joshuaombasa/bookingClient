import React from "react";
import './finalStep.css'

import BookingHotelDetails from "../../../components/bookingHotelDetails/BookingHotelDetails";
import ReservedBookingDetails from "../../../components/reservedBookingDetails/ReservedBookingDetails";
import ReservedBookingPriceSummary from "../../../components/reservedBookingPriceSummary/ReservedBookingPriceSummary";
import ReservedCancellPolicy from "../../../components/reservedCancellPolicy/ReservedCancellPolicy";
import PromoCode from "../../../components/promoCode/PromoCode";
import UserPaymentDetails from "../../../components/userPaymentDetails/UserPaymentDetails";


export default function FinalStep () {
    return (
        <div className="finalStep--page">
            <div className="finalStep--page--container">
                <div className="selected--hotel--details">
                    <BookingHotelDetails/>
                    <ReservedBookingDetails/>
                    <ReservedBookingPriceSummary/>
                    <ReservedCancellPolicy/>
                    <PromoCode/>

                </div>
                <div className="user--payment--details">
                    <UserPaymentDetails/>
                </div>
            </div>
        </div>
    )
}