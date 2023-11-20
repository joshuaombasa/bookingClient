import React from "react";
import './aboutPropertyLayout.css'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
import { majorLanguages } from "../../utils/languages";

export default function AboutPropertyLayout() {

    const [searchParams, setSearchParams] = useSearchParams()

    const languageOptions = majorLanguages.map(item => (
        <option key={item}>{item}</option>
    ))

    function generateNewURLSearchParameters(key, value) {
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
            sp.delete(key)
        } else {
            sp.set(key, value)
        }
        setSearchParams(sp)
    }

    return (
        <div className="aboutPropertyLayout--container">
            <div className="about--header--parent">
                <div className="about--header--container">
                    <Link className="logo">Booking.com</Link>
                </div>
            </div>
            <div className="about--property--nav--parent">
                <div className="about--property--nav">
                    <Link
                        to='.'
                    >Basic info</Link>
                    <Link
                        to='createRoom'
                    >Layout and pricing</Link>
                    <Link
                        to='facilities'
                    >Facilities & services</Link>
                    <Link
                        to='amenities'
                    >Amenities</Link>
                    <Link
                        to='photos'
                    >Photos</Link>
                    <Link
                        to=''
                    >Policies</Link>
                    <Link to='settings'>
                         settings
                    </Link>
                </div>
            </div>
            <div className="about--outlet--container">
                <Outlet />
            </div>
            <div className="about--footer--parent">
                <div className="about--footer--container">
                    <div className="main--links">
                        <Link>About Us</Link>
                        <Link>Privacy and Cookie Statement</Link>
                        <Link>FAQs</Link>
                    </div>
                    <div className="other--stuff">
                        <div className="lang">
                            <label htmlFor="">Your language:</label>
                            <select name="" id="">
                                {languageOptions}
                            </select>
                        </div>
                        <p>© Copyright <span className="blue-text">Booking.com</span> 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}