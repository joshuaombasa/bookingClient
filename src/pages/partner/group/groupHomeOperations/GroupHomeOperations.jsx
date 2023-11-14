import React from 'react'
import './groupHomeOperations.css'
import { GiEntryDoor, GiExitDoor } from "react-icons/gi";
import { MdStars, MdOutlineCancel } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";

export default function GroupHomeOperations() {

    const listedProperty = [
        {
            id: '11063028',
            name: 'Magwagwa Best',
            bookable: false,
            arrivals: '0',
            departures: '0',
            guestMessages: '0',
            bookingComMessages: '0'
        },

        {
            id: '21063029',
            name: 'Sunset Retreat',
            bookable: true,
            arrivals: '5',
            departures: '3',
            guestMessages: '10',
            bookingComMessages: '2'
        },
        {
            id: '31063030',
            name: 'Mountain View Lodge',
            bookable: true,
            arrivals: '8',
            departures: '6',
            guestMessages: '5',
            bookingComMessages: '1'
        },
        {
            id: '41063031',
            name: 'Oceanfront Paradise',
            bookable: false,
            arrivals: '2',
            departures: '1',
            guestMessages: '3',
            bookingComMessages: '0'
        },
        {
            id: '51063032',
            name: 'Urban Oasis',
            bookable: true,
            arrivals: '12',
            departures: '9',
            guestMessages: '15',
            bookingComMessages: '4'
        }
    ];

    const openPropertyStyle = {
        color : "green"
    }

    const closedPropertyStyle = {
        color : "red"
    }


    const listedPropertyElements = listedProperty.map(item => (
        <div className='single--listed--property'>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p
              style={item.bookable ? openPropertyStyle : closedPropertyStyle}
            >{item.bookable ? "Open / bookable" : "Closed / not bookable"}</p>
            <p>{item.arrivals}</p>
            <p>{item.departures}</p>
            <p>{item.guestMessages}</p>
            <p>{item.bookingComMessages}</p>
        </div>
    ))

    return (
        <div className="operations--page">
            <div className="day--actions">
                <div className="">
                    <span><CiBoxList className="icon" /></span>
                    <h3>0</h3>
                    <p>Reservations</p>
                </div>
                <div className="">
                    <span><GiEntryDoor className="icon" /></span>
                    <h3>0</h3>
                    <p>Arrivals</p>
                </div>
                <div className="">
                    <span><GiExitDoor className="icon" /></span>
                    <h3>0</h3>
                    <p>Departures</p>
                </div>
                <div className="">
                    <span><MdStars className="icon" /></span>
                    <h3>0</h3>
                    <p>Reviews</p>
                </div>
                <div className="">
                    <span><MdOutlineCancel className="icon" /></span>
                    <h3>0</h3>
                    <p>Cancellations</p>
                </div>
            </div>
            <div className="filter">
                <p>Filter by status</p>
                <select name="" id="">
                    <option value="">All properties</option>
                    <option value="">Open/bookable</option>
                    <option value="">Closed/not bookable</option>
                </select>
            </div>
            <div className="operational--property">
                <div className="head">
                    <p>ID</p>
                    <p>Property</p>
                    <p>Status on Booking.com</p>
                    <p>Arrivals in next 48 hours </p>
                    <p>Departures in next 48 hours</p>
                    <p>Guest messages</p>
                    <p>Booking.com messages</p>
                </div>
                {listedPropertyElements}
            </div>
        </div>
    )
}