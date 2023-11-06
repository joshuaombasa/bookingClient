import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidBed } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl'
import { GoDash } from 'react-icons/go'
import { BsFillPersonFill } from 'react-icons/bs'
import { FiChevronDown } from 'react-icons/fi'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './search.css'

export default function Search() {

    const [destination, setDestination] = useState("")

    const [showCalender, setshowCalender] = useState(false)

    const [showGuestModal, setShowGuestModal] = useState(false)

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    function toggleGuestModal() {
        setShowGuestModal(prevState => !prevState)
        setshowCalender(false)
    }

    function toggleCalenderModal() {
        setshowCalender(prevState => !prevState)
        setShowGuestModal(false)
    }

    function handleDestinationChange(event) {
        const { name, value } = event.target
        setDestination(value)
    }

    function closeGuestModal() {
        setShowGuestModal(false)
    }

    const [guestsSearchObject, setGuestsSearchObject] = useState(
        {
            adults: 1,
            chilren: 0,
            rooms: 1
        }
    )

    function handleGuestsSearchObjectChanges(type) {
        setGuestsSearchObject(prevState => {
            switch (type) {
                case "addAdult":
                    return {
                        ...prevState,
                        adults: prevState.adults++
                    }
                case "minusAdult":
                    return {
                        ...prevState,
                        adults: prevState.adults--
                    }
                case "addChildren":
                    return {
                        ...prevState,
                        chilren: prevState.chilren++
                    }
                case "minusChilren":
                    return {
                        ...prevState,
                        chilren: prevState.chilren--
                    }
                case "addRooms":
                    return {
                        ...prevState,
                        rooms: prevState.rooms++
                    }
                case "minusRooms":
                    return {
                        ...prevState,
                        rooms: prevState.rooms--
                    }
                default:
                    return prevState
            }
        })
    }


    return (
        <div className="search-wrapper">
            <div className="search--container">
                <div className="destination-search search-sections">
                    <div className="inner--search">
                        <BiSolidBed className="search-icon" />
                        <input
                            type="text"
                            name="destination"
                            value={destination}
                            onChange={handleDestinationChange}
                            placeholder="Where are you going?"

                        />
                    </div>
                </div>
                <div className="dates-search search-sections">
                    <div
                        className="inner--search--section"
                        onClick={() => toggleCalenderModal()}
                    >
                        <SlCalender className="search-icon" />
                        <span>Check-in date <GoDash />
                            Check-out date
                        </span>
                    </div>
                    {showCalender && <div className="calender--modal">
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date-range"
                        />
                    </div>}
                </div>
                <div className="guest-search search-sections">
                    <div className="inner--search--section"
                        onClick={() => toggleGuestModal()}
                    >
                        <BsFillPersonFill className="search-icon" />
                        <span>{guestsSearchObject.adults} adults . {guestsSearchObject.chilren} children . {guestsSearchObject.rooms} room</span>
                        <FiChevronDown className="search-icon down--icon" />
                    </div>
                    {showGuestModal && <div className="guest-search-modal">
                        <div className="adults guest--section--wrappers">
                            <p>Adults</p>
                            <div className="adults--cta ctas">
                                <button
                                    disabled={guestsSearchObject.adults <= 1}
                                    onClick={() => handleGuestsSearchObjectChanges("minusAdult")}
                                >-</button>
                                <span>{guestsSearchObject.adults}</span>
                                <button
                                    onClick={() => handleGuestsSearchObjectChanges("addAdult")}
                                >+</button>
                            </div>
                        </div>
                        <div className="children guest--section--wrappers">
                            <p>Children</p>
                            <div className="children--cta ctas">
                                <button
                                    disabled={guestsSearchObject.chilren <= 0}
                                    onClick={() => handleGuestsSearchObjectChanges("minusChilren")}
                                >-</button>
                                <span>{guestsSearchObject.chilren}</span>
                                <button
                                    onClick={() => handleGuestsSearchObjectChanges("addChildren")}
                                >+</button>
                            </div>
                        </div>
                        <div className="guest--section--wrappers">
                            <p>Rooms</p>
                            <div className="roooms--cta ctas">
                                <button
                                    disabled={guestsSearchObject.rooms <= 1}
                                    onClick={() => handleGuestsSearchObjectChanges("minusRooms")}
                                >-</button>
                                <span>{guestsSearchObject.rooms}</span>
                                <button
                                    onClick={() => handleGuestsSearchObjectChanges("addRooms")}
                                >+</button>
                            </div>
                        </div>
                        <button className="close--guests--modal--btn"
                            onClick={() => closeGuestModal()}
                        >Done</button>
                    </div>}
                </div>
                <Link to="/hotels" className="search-btn">Search</Link>
            </div>
        </div>
    )
}