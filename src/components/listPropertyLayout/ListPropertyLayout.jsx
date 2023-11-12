import React from "react";
import { Link, Outlet } from "react-router-dom";
import './listPropertyLayout.css'

export default function ListPropertyLayout() {
    return (
        <div className="listPropertyLayout--container">
            <div className="listPropertyLayout--content">
                <div className="partner--heading--parent">
                    <div className="partner--heading">
                        <Link to='/'>Booking.com</Link>
                        <div className="nav--links--parent">
                            <Link className="partner">Already a partner?</Link>
                            <Link className="sign-in">Sign in</Link>
                            <Link className="help">Help</Link>
                        </div>
                    </div>
                </div>
                <div className="outlet--container">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

