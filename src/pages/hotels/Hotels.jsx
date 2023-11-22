import React from "react";
import { Link } from "react-router-dom";
import './hotels.css'
import { PiLeafFill } from 'react-icons/pi'
import { BsStarFill } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import { FiChevronRight } from 'react-icons/fi'
import { results } from "../../utils/results";

export default function Hotels() {

   

    const resultElements = results.map(item => (
        <div key={item.id} className="single--result">
            <img src={item.imageUrl} alt="" />
            <div className="specs--container">
                <div className="details--and-ratings">
                    <div className="top--left">
                        <div className="name--specs">
                            <h3>{item.name}</h3>
                            <span className="stars">
                                <BsStarFill className="gold--stars" />
                                <BsStarFill className="gold--stars" />
                                <BsStarFill className="gold--stars" />
                                <BsStarFill className="gold--stars" />
                            </span>
                        </div>
                        <div className="location--specs">
                            <Link>{item.center}</Link>
                            <Link>Show on map</Link>
                            <span>{item.distanceFromCenter} from centre</span>
                        </div>
                        <div className="sustainability--specs">
                            <PiLeafFill className="green-icons" />
                            <PiLeafFill className="green-icons" />
                            <PiLeafFill className="green-icons" />
                            <span>Travel Sustainable Level 2</span>
                        </div>
                    </div>
                    <div className="top--right">
                        <div>
                            <p>Good</p>
                            <small>1,000 reviews</small>
                        </div>
                        <span>{item.rating}</span>
                    </div>
                </div>
                <div className="room--and--charges">
                    <div className="room--card">
                        <p>King Room - Non-Smoking</p>
                        <small> 1 extra-large double bed</small>
                        <div className="green--text">
                            <p>Breakfast included</p>
                            <div className="perks">
                                <TiTick />
                                <p>
                                    Free cancellation
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="charges">
                        <small>1 night, 2 adults</small>
                        <span className="main--cost">KES 16,290</span>
                        <small className="taxes">
                            +KES 1,905 taxes and charges
                        </small>

                        <Link  to={item.id} className="availability--link">
                            <span>See availability</span>
                            <span><FiChevronRight className="icon"/></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <div className="searchresults--page">
            <div className="searchresults--page-container">
                <div className="filters--column"></div>
                <div className="results--column">
                    {resultElements}
                </div>
            </div>
        </div>
    )
}