import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../header/Header";
import Search from "../search/Search";
import Footer from "../footer/Footer";
import './layout.css'

export default function Layout() {
    return (
        <div className="layout--wrapper">
            <div className="compound--header">
                <div className="nav--container">
                    <nav>
                        <Link className="logo">
                            booking.com
                        </Link>
                        <div className="nav--links">
                            <Link className="list--property--link">List your property</Link>
                            <Link className="nav--ctas">Register</Link>
                            <Link className="nav--ctas">Sign In</Link>
                        </div>
                    </nav>
                    <Header />
                    <Search />
                </div>
            </div>
            <div className="layout--container ">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}