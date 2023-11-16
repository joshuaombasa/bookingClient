import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './groupReviewsLayout.css'

export default function GroupReviewsLayout() {


    return (
        <div className="groupReviewsLayout--container">
            <h1>Reviews</h1>
            <p>See what guests are saying about their stays. Read and reply to your guest's reviews.</p>
            <div className="wrap">
                <div className="reviews--content">
                    <div className="average">
                        <span>9.2</span>
                        <div className="">
                            <h3>Your review score</h3>
                            <p>Based on 40 reviews</p>
                        </div>
                    </div>
                </div>
                <div className="group--reviews--nav">
                    <NavLink>Overview</NavLink>
                    <NavLink>Categories</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}