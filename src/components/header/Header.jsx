import React from "react";
import { BiSolidBed } from 'react-icons/bi';
import {FaPlane} from 'react-icons/fa'
import { BsCarFrontFill } from "react-icons/bs"
import { MdAttractions } from 'react-icons/md'
import { BsTaxiFront } from 'react-icons/bs'
import './header.css'
export default function Header() {
    return (
        <div className="header--container">
            <div className="stays header--links">
                <BiSolidBed className="header--icons"/>
                <span>Stays</span>
            </div>
            <div className="flights header--links">
                <FaPlane className="header--icons"/>
                <span>Flights</span>
            </div>
            <div className="car--rentals header--links">
                <BsCarFrontFill className="header--icons"/>
                <span>Car rentals</span>
            </div>
            <div className="attractions header--links">
                <MdAttractions className="header--icons"/>
                <span>Attractions</span>
            </div>
            <div className="airport--taxi header--links">
                <BsTaxiFront className="header--icons"/>
                <span>Airport taxis</span>
            </div>
        </div>
    )
}