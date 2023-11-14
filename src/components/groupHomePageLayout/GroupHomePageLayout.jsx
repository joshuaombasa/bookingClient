import React from "react";
import './groupHomePageLayout.css'
import { NavLink, Outlet } from "react-router-dom";

export default function GroupHomePageLayout() {

    const activeStyle = {
        color: 'red'
    }

    return (
        <div className="groupHomePageLayout--container">
            <h2>Happening today</h2>
            <div className="group--homepage--nav">
                <NavLink
                    to='.'
                    style={({ isActive }) => isActive ? activeStyle : null}
                >Operations</NavLink>
                <NavLink
                    to='performance'
                    style={({ isActive }) => isActive ? activeStyle : null}
                >Performance</NavLink>
                {/* <NavLink
                    style={({ isActive }) => isActive ? activeStyle : null}
                >Settings</NavLink> */}
            </div>
            <Outlet />
        </div>
    )
}