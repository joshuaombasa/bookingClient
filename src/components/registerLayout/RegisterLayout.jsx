import React from "react";
import { Outlet } from "react-router-dom";
import './registerLayout.css'


export default function RegisterLayout() {
    return (
        <div className="registerLayout--container">
            <Outlet />
            <span className="line--light"></span>
            <p>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</p>
            <span className="line--light"></span>
            <p>All rights reserved.</p>
            <p>Copyright (2006 - 2023) - Booking.com™</p>
        </div>
    )
}