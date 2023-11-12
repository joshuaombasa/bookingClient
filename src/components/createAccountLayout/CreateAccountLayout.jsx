import React from "react";
import { Outlet } from "react-router-dom";
import './createAccountLayout.css'

export default function CreateAccountLayout() {
    return (
        <div className="createAccountLayout--container">
            <Outlet/>
            <div className="footer--common">
                <p>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</p>
                <hr />
                <p>All rights reserved.</p>
                <p>Copyright (2006 - 2023) - Booking.com™</p>
            </div>
        </div>
    )
}