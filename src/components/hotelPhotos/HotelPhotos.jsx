import React from "react";
import { BsStarFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare2 } from 'react-icons/fi'
import { MdLocationPin } from 'react-icons/md'
import { Link } from "react-router-dom";
import './hotelPhotos.css'

export default function HotelPhotos() {

    const images = [
        {
            id: '1',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D'
        },
        {
            id: '2',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D'
        },
        {
            id: '3',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1682089297123-85459da8036b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdGVsfGVufDB8fDB8fHww'
        },
        {
            id: '4',
            imageUrl: 'https://images.unsplash.com/photo-1562790351-d273a961e0e9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsfGVufDB8fDB8fHww'
        },
        {
            id: '5',
            imageUrl: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdGVsfGVufDB8fDB8fHww'
        },
        {
            id: '',
            imageUrl: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsfGVufDB8fDB8fHww'
        },
    ]

    const imageElements = images.map(image => <img key={image.id} src={image.imageUrl} />)

    return (
        <div className="hotel--photos">
            <div className="text--side">
                <div className="hotel--text">
                    <span>
                        <BsStarFill className="gold--star" />
                        <BsStarFill className="gold--star" />
                        <BsStarFill className="gold--star" />
                        <BsStarFill className="gold--star" />
                    </span>
                    <h1>The Academy Hotel Colorado Springs</h1>
                    <p><MdLocationPin className="location-pin" />8110 North Academy Boulevard, Colorado Springs, CO 80920, United States –</p>
                    <Link> Great location - show map</Link>
                </div>
                <div className="hotel-ctas">
                    <AiOutlineHeart className="icons" />
                    <FiShare2 className="icons" />
                    <button>Reserve</button>
                </div>
            </div>
            <div className="hotel--images--container">
                {imageElements}
            </div>
        </div>
    )
}