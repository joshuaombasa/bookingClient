import React from "react";
import './reserveLayout.css'
import { FiCheck } from 'react-icons/fi'
import { Outlet } from "react-router-dom";

export default function ReserveLayout() {
    return (
        <div className="reserve--wrapper">
            <div className="reserveLayout--container">
                <div className="your--selection step">
                    <span className="parent">
                        <span><FiCheck className="icon"/></span>
                    </span>
                    <p>Your selection</p>
                </div>
                <span className="line"></span>
                <div className="your--details step">
                    <span className="parent">
                        <span>2</span>
                    </span>
                    <p>Your details</p>
                </div>
                <span className="line"></span>
                <div className="final--step step">
                    <span className="parent">
                        <span>3</span>
                    </span>
                    <p>Final step</p>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}