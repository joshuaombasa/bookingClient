import React from "react";
import { BiSolidBed } from 'react-icons/bi';
import {FaPlane} from 'react-icons/fa'
import { BsCarFrontFill } from "react-icons/bs"
import { MdAttractions } from 'react-icons/md'
import { BsTaxiFront } from 'react-icons/bs'
import './header.css'
import { NavLink } from "react-router-dom";
export default function Header() {

    const activeStyle = {
        backgroundColor: '#5353de'
    }

    return (
        <div className="header--container">
            <NavLink
                to=''
                style={({isActive}) => isActive ? activeStyle : null} 
                className="stays header--links">
                <BiSolidBed className="header--icons"/>
                <span>Stays</span>
            </NavLink>
            <NavLink
                to='flights'
                style={({isActive}) => isActive ? activeStyle : null} 
                className="flights header--links">
                <FaPlane className="header--icons"/>
                <span>Flights</span>
            </NavLink>
            <NavLink
                to='carRentals'
                style={({isActive}) => isActive ? activeStyle : null} 
                className="car--rentals header--links">
                <BsCarFrontFill className="header--icons"/>
                <span>Car rentals</span>
            </NavLink>
            <NavLink
                to='attractions'
                style={({isActive}) => isActive ? activeStyle : null} 
                className="attractions header--links">
                <MdAttractions className="header--icons"/>
                <span>Attractions</span>
            </NavLink>
            <NavLink
                to='airportTaxis'
                style={({isActive}) => isActive ? activeStyle : null} 
                className="airport--taxi header--links">
                <BsTaxiFront className="header--icons"/>
                <span>Airport taxis</span>
            </NavLink>
        </div>
    )
}