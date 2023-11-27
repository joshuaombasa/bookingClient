import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import './becomeHostPropertyCount.css'

export default function BecomeHostPropertyCount() {

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

    let howManyLuxuryTentsAreYouListing = ''
    let isLinkDisabled = true

    if (option1 === true) {
        howManyLuxuryTentsAreYouListing = 'One luxury tent'
        isLinkDisabled = false
    } else if (option2 === true) {
        howManyLuxuryTentsAreYouListing = 'Multiple luxury tents'
        isLinkDisabled = false
    }


    const location = useLocation()
    console.log(location.state)

    return (
        <div className="propertyCount--page">
            <div className="propertyCount--page--container">
                <h1>How many luxury tents are you listing?</h1>
                <div className="listing--wrapper">
                    <div className="propertyCount--content">
                        <p
                            onClick={() => toggleOption1()}
                            style={option1 === true ? activeStyle : null}
                        >One luxury tent</p>
                        <p
                            onClick={() => toggleOption2()}
                            style={option2 === true ? activeStyle : null}
                        >Multiple luxury tents</p>
                    </div>
                </div>
                <div className="listing--continue">
                    <span><FaChevronLeft className="icon" /></span>
                    <Link
                        className={`listing--continue--btn ${isLinkDisabled ? 'disabled-link' : ''}`}
                        to='../feedback--loop'
                        state={{
                            typeOfProperty: location.state.typeOfProperty,
                            whatCanGuestBook: location.state.whatCanGuestBook,
                            propertyCategoryIsMostSimilarToYourPlace: location.state.propertyCategoryIsMostSimilarToYourPlace,
                            howManyLuxuryTentsAreYouListing
                        }}
                    >Continue</Link>
                </div>
            </div>
        </div>
    )
}