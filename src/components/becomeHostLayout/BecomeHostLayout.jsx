import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

import './becomeHostLayout.css'

export default function BecomeHostLayout() {
    return (
        <div className="becomeHostLayout--Layout">
            <div className="become--host--nav">
                <Link className="logo">Booking.com</Link>
                <div className="become--host--nav--ctas">
                    <Link>Help</Link>
                    <Link><span><BsPersonCircle className="icon"/></span></Link>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}