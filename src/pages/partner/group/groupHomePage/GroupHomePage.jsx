import React, { useState } from "react";
import './groupHomePage.css'
import { SlArrowUp, SlArrowDown } from 'react-icons/sl'
import { GoSearch } from "react-icons/go";
import { Link, NavLink, Outlet } from "react-router-dom";
import IncompleteProperties from "../../../../components/incompleteProperties/IncompleteProperties";

export default function GroupHomePage() {

    const [showIncompleteSection, setShowIncompleteSection] = useState(true)

    function toggleShowIncompleteSection() {
        setShowIncompleteSection(prevState => !prevState)
    }

    return (
        <div className="groupHomePage--page">
            <div className="groupHomePage--page--container">
                <div className="group--head">
                    <h1>Group homepage</h1>
                    <Link to='../../become-a-host'>Add new property</Link>
                </div>
                <div className="not--yet--property--home">
                    <h2>Properties not yet on Booking.com (1)</h2>
                    <div
                        className="show--toggle"
                        onClick={() => toggleShowIncompleteSection()}
                    >
                        {showIncompleteSection ?
                            <div className="">
                                <span><SlArrowUp /></span>
                                <p>Hide section</p>
                            </div>
                            :
                            <div className="">
                                <span><SlArrowDown /></span>
                                <p>Show section</p>
                            </div>
                        }
                    </div>
                </div>
                {showIncompleteSection && <div className="incomplete--area">
                    <p>Grow your business by adding these properties to the world's biggest online travel agency, Booking.com.</p>
                    <IncompleteProperties />
                </div>}
                <h2>Active properties</h2>
                <div className="active--property--search">
                    <input 
                       type="text" 
                       placeholder="Filter by property ID, name or location"
                    />
                    <s><GoSearch className="icon"/></s>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}