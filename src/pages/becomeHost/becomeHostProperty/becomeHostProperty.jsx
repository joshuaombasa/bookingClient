import React, { useState } from "react";
import './becomeHostProperty.css'
import { FaChevronLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function BecomeHostProperty() {

    const [option1, setOption1] = useState(false)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(false)

    function toggleOption1() {
        setOption1(prevState => !prevState)
        setOption2(false)
        setOption3(false)
    }

    function toggleOption2() {
        setOption2(prevState => !prevState)
        setOption1(false)
        setOption3(false)
    }

    function toggleOption3() {
        setOption3(prevState => !prevState)
        setOption1(false)
        setOption2(false)
    }

    const activeStyle = {
        border: '2px solid royalblue'
    }

    let isLinkDisabled = true
    let propertyCategoryIsMostSimilarToYourPlace = 'Campsite'
    if (option1 === true) {
        propertyCategoryIsMostSimilarToYourPlace = 'Campsite'
        isLinkDisabled = false
    } else if (option2 === true) {
        propertyCategoryIsMostSimilarToYourPlace = 'Boat'
        isLinkDisabled = false
    } else if (option3 === true) {
        propertyCategoryIsMostSimilarToYourPlace = 'Luxury tent'
        isLinkDisabled = false
    }

    const location = useLocation()

    return (
        <div className="becomeHostProperty--page">
            <div className="becomeHostProperty--page--container">
                <h2>From the list below, which property category is most similar to your place?</h2>
                <div className="propety--wrapper">
                    <div
                        className="property--content"
                        onClick={() => toggleOption1()}
                        style={option1 === true ? activeStyle : null}
                    >
                        <h3>Campsite</h3>
                        <p>Accommodation offering cabins or bungalows alongside areas for camping or caravans with shared facilities or recreational activities</p>
                    </div>
                    <div
                        className="property--content"
                        onClick={() => toggleOption2()}
                        style={option2 === true ? activeStyle : null}
                    >
                        <h3>Boat</h3>
                        <p>Commercial travel accommodation located on a boat</p>
                    </div>
                    <div
                        className="property--content"
                        onClick={() => toggleOption3()}
                        style={option3 === true ? activeStyle : null}
                    >
                        <h3>Luxury tent</h3>
                        <p>Tents with fixed bedding and some services, located in natural surroundings</p>
                    </div>
                </div>
                <div className="property--ctas">
                    <span><FaChevronLeft className="icon" /></span>
                    <Link
                        to='../count'
                        className={`listing--continue--btn ${isLinkDisabled ? 'disabled-link' : ''}`}
                        state={
                            {
                                propertyCategoryIsMostSimilarToYourPlace,
                                whatCanGuestBook: location.state.whatCanGuestBook,
                                typeOfProperty: location.state.typeOfProperty
                            }
                        }
                    >Continue</Link>
                </div>
            </div>
        </div>
    )
}