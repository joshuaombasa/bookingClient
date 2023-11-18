import React from "react";
import './becomeHostCategory.css'
import { Link } from "react-router-dom";
import { FaHome, FaHotel } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { LiaCampgroundSolid } from "react-icons/lia";

export default function BecomeHostCategory() {


    return (
        <div className="becomeHostCategory--page">
            <div className="becomeHostCategory--page--container">
                <h1>List your property on Booking.com and start welcoming guests in no time!</h1>
                <p>To get started, choose the type of property you want to list on Booking.com</p>
                <div className="property--category--elements">
                <div className="home">
                    <span><FaHome className="icon"/></span>
                    <h3>Apartment</h3>
                    <p>Furnished and self-catering accommodation, where guests rent the entire place.</p>
                    <Link 
                        to='listing' 
                        state={{category: "Apartment"}}
                        className='list--your--property--link'
                    >List your property</Link>
                </div>
                <div className="apartment">
                    <span><MdApartment className="icon"/></span>
                    <h3>Home</h3>
                    <p>Properties like hotels, B&Bs, guest houses, hostels, aparthotels, etc.</p>
                    <Link 
                        to='listing' 
                        state={{category: "Home"}}
                        className='list--your--property--link'
                    >List your property</Link>
                </div>
                <div className="hotel">
                    <span><FaHotel className="icon"/></span>
                    <h3>Hotel, B&Bs, and more</h3>
                    <p>Properties like hotels, B&Bs, guest houses, hostels, aparthotels, etc.</p>
                    <Link 
                        to='listing' 
                        state={{category: "Hotel, B&Bs, and more"}}
                        className='list--your--property--link'
                    >List your property</Link>
                </div>
                <div className="camp">
                    <span><LiaCampgroundSolid className="icon"/></span>
                    <h3>Alternative places</h3>
                    <p>Properties like boats, campsites, luxury tents, etc.</p>
                    <Link 
                        to='listing' 
                        state={{category: "Alternative places"}}
                        className='list--your--property--link'
                    >List your property</Link>
                </div>
            </div>
            </div>
            
        </div>
    )
}