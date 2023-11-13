import React, { useState } from "react";
import './groupHomePage.css'
import { SlArrowUp, SlArrowDown } from 'react-icons/sl'
import { Link } from "react-router-dom";
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
                    <Link>Add new property</Link>
                </div>
                <div className="not--yet--property--home">
                    <h2>Properties not yet on Booking.com (1)</h2>
                    <div 
                       className="show--toggle"
                       onClick={() => toggleShowIncompleteSection()}
                    >
                        { showIncompleteSection ?
                            <div className="">
                                <span><SlArrowDown/></span>
                                <p>Show section</p>
                            </div>
                            :
                            <div className="">
                                <span><SlArrowUp/></span>
                                <p>Hide section</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="incomplete--area">
                    <IncompleteProperties/>
                </div>
            </div>
        </div>
    )
}