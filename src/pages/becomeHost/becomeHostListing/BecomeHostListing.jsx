import React, { useState } from "react";
import './becomeHostListing.css'
import { FaChevronLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function BecomeHostListing() {
    const [option1, setOption1] = useState(false)
    const [option2, setOption2] = useState(false)

    function toggleOption1() {
        setOption1(prevState => !prevState)
        setOption2(false)
    }

    function toggleOption2() {
        setOption2(prevState => !prevState)
        setOption1(false)
    }

    const activeStyle = {
        border: '2px solid royalblue'
    }

    let isLinkDisabled = true
    let whatCanGuestBook = ''
    isLinkDisabled = false
    if (option1 === true) {
        whatCanGuestBook = 'Entire place'
        isLinkDisabled = false
    } else if (option2 === true) {
        whatCanGuestBook = 'A private room'
    } else {
        whatCanGuestBook = ''
        isLinkDisabled = true
    }

    const navigate = useNavigate()

    function handleContinueClick() {
        navigate('../property')
    }

    const location = useLocation()

    

    return (
        <div className="becomeHostListing--page">
            <div className="becomeHostListing--page--container">
                <h1>What can guests book?</h1>
                <div className="listing--wrapper">
                    <div
                        className="listing--content"
                        onClick={() => toggleOption1()}
                        style={option1 === true ? activeStyle : null}
                    >
                        <h3>Entire place</h3>
                        <p>Guests are able to use the entire place and do not have to share this with the host or other guests.</p>
                    </div>
                    <div
                        className="listing--content"
                        onClick={() => toggleOption2()}
                        style={option2 === true ? activeStyle : null}
                    >
                        <h3>A private room</h3>
                        <p>Guests rent a room within the property. There are common areas that are either shared with the host or other guests.</p>
                    </div>
                </div>
                <div className="listing--continue">
                    <span><FaChevronLeft className="icon" /></span>
                    <Link
                        className={`listing--continue--btn ${isLinkDisabled ? 'disabled-link' : ''}`}
                        state={{ whatCanGuestBook,  typeOfProperty :  location.state.category}}
                        disabled={isLinkDisabled}
                        // onClick={() => handleContinueClick()}
                        to='../property'
                    >Continue</Link>
                </div>
            </div>
        </div>
    )
}