import React, { useState } from "react";
import './groupReservations.css'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { reservations } from "../../../../utils/data";

export default function GroupReservations() {

    const [showMoreFilters, setShowMoreFilters] = useState(false)

    function toggleShowMoreFilters() {
        setShowMoreFilters(prevState => !prevState)
    }

    const reservationElements = reservations.map(item => (
        <div key={item.propertyId} className="reservations--table--head">
            <p>{item.propertyId}</p>
            <p className="property--name">{item.propertyName}</p>
            <p>{item.location}</p>
            <p>{item.guestName}</p>
            <p>{item.checkIn}</p>
            <p>{item.checkOut}</p>
            <p>{item.status}</p>
            <p>{item.totalPayment}</p>
            <p>{item.commission}</p>
            <p>{item.reservationNumber}</p>
            <p>{item.bookedOn}</p>
        </div>
    ))

    return (
        <div className="groupReservations--page">
            <div className="groupReservations--page--container">
                <h1>Reservations</h1>
                <div className="filters">
                    <div className="action--filter">
                        <label htmlFor="dateOf">Date of</label>
                        <select name="" id="dateOf">
                            <option value="">Reservation</option>
                            <option value="">Check-in</option>
                            <option value="">Check-out</option>
                        </select>
                    </div>
                    <div className="dates--filter">
                        <label htmlFor="dateValue">Filter by dates</label>
                        <input type="date" name="" id="dateValue" />
                    </div>
                    <div
                        className="more--filters"
                        onClick={() => toggleShowMoreFilters()}
                    >
                        <p>More filters</p>
                        <span>
                            {showMoreFilters ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </span>
                    </div>
                    <button>Show reservations</button>
                </div>
                {showMoreFilters && <div className="more--filters--container">
                    <div className="filter--by--property">
                        <label htmlFor="">Properties</label>
                        <select name="" id="">
                            <option value="">Sunset Residences</option>
                            <option value="">Gretsa View</option>
                            <option value="">Silver Springs</option>
                            <option value="">Green Valley Estates</option>
                            <option value="">Majestic Heights</option>
                        </select>
                    </div>
                    <div className="filter--byt--reservation--status">
                        <h3>Reservation status</h3>
                        <div className="status--checks">
                            <div className="">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Ok</label>
                            </div>
                            <div className="">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Cancelled</label>
                            </div>
                            <div className="">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">No show</label>
                            </div>
                            <div className="">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Paid online</label>
                            </div>
                        </div>
                    </div>
                </div>}
                <div className="reservations--table">
                    <div className="reservations--table--head bold">
                        <p>Property ID</p>
                        <p className="property--name">Property name</p>
                        <p>Location</p>
                        <p>Guest name</p>
                        <p>Check-in</p>
                        <p>Check-out</p>
                        <p>Status</p>
                        <p>Total payment</p>
                        <p>Commission</p>
                        <p>Reservation number</p>
                        <p>Booked on</p>
                    </div>
                    {reservationElements}
                </div>
            </div>
        </div>
    )
}