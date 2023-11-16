import React from "react";
import './adminLayout.css'
import { Link, NavLink, Outlet } from "react-router-dom";
import { GiJeweledChalice } from 'react-icons/gi'
import { CiSearch } from 'react-icons/ci'
import { GrLanguage } from 'react-icons/gr'
import { BsPersonCircle, BsGlobeCentralSouthAsia } from 'react-icons/bs'

export default function AdminLayout() {
    return (
        <div className="adminLayout--container">
            <div className="nav--parent">
                <div className="admin--nav">
                    <div className="logo-side">
                        <Link className="logo">Booking.com</Link>
                        <span> | </span>
                        <p>Joshua Ombasa</p>
                        <span className="account--notice">Primary account</span>
                    </div>
                    <div className="r-search">
                        <div className="search--wrapper">
                            <input type="text" />
                            <span><CiSearch className="icon" /></span>
                        </div>
                        <div className="language">
                            <span><BsGlobeCentralSouthAsia className="icon" /></span>
                        </div>
                        <div className="listed--property">
                            <span><GiJeweledChalice className="icon" /></span>
                        </div>
                        <div className="account-ctas">
                            <span><BsPersonCircle className="icon" /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav--parent">
                <div className="group--nav">
                    <div className="group--nav--links">
                        <NavLink to='home'>Group homepage</NavLink>
                        <NavLink to='reservations'>Reservations</NavLink>
                        <NavLink  to='reviews'>Reviews</NavLink>
                        <NavLink to='finances'>Finance</NavLink>
                        <NavLink>Bulk editing</NavLink>
                        <NavLink>Group Opportunity Centre</NavLink>
                        <NavLink>Analytics</NavLink>
                    </div >
                </div>
            </div>
            <div className="outlet--parent">
                <div className="outlet--container">
                    <Outlet/>
                </div>
            </div>
            <div className="footer--parent">
                <div className="footer--container">
                    <div className="footer--links">
                        <div className="basic--links">
                            <Link>About Us</Link>
                            <Link>Privacy and Cookie Statement</Link>
                            <Link>FAQs</Link>
                        </div>
                        <div className="activity--links">
                            <Link>Add new property</Link>
                            <Link>Share your feedback</Link>
                        </div>
                    </div>
                    <footer>
                        <p>© Copyright <span className="blue--text">Booking.com</span> 2023</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}