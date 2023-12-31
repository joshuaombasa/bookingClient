import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './hotelLayout.css'

export default function HotelLayout() {
    const activeStyle = {
        textDecoration: "underline"
    }
    return (
        <div className="hotelLayout--container">
           <div className="over-view--head">
                            <div className="hotel--nav">
                                <NavLink
                                   style={({isActive}) => isActive ? activeStyle : null} 
                                   to='.'
                                   end
                                >Overview</NavLink>
                                <NavLink
                                   style={({isActive}) => isActive ? activeStyle : null} 
                                   to='infoAndPrices'
                                >Info and prices</NavLink>
                                <NavLink
                                   style={({isActive}) => isActive ? activeStyle : null} 
                                   to='facilities'
                                >Facilities</NavLink>
                                <NavLink
                                   style={({isActive}) => isActive ? activeStyle : null} 
                                   to='rules'
                                >House Rules</NavLink>
                                <NavLink
                                   style={({isActive}) => isActive ? activeStyle : null} 
                                   to='reviews'
                                >Giest Reviews(2800)</NavLink>
                            </div>
                           
                        </div>
            <Outlet />
        </div>
    )
}