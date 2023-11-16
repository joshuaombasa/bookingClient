import React from "react";
import './groupReviewsList.css'
import { groupReviewsList } from "../../utils/reviewsData";
import { Link } from "react-router-dom";

export default function GroupReviewsList({filterByValue}) {

    const  reviewsList = filterByValue !== null ? 
                            groupReviewsList.filter(item => item[filterByValue] !== null) :
                            groupReviewsList
    
    
    
    const reviewsElements = reviewsList.map(item => (
        <div key={item.reservationId} className='review--wrapper'>
            <div className="right">
                <span>{item.overallRating}</span>
                <div className="reservation--details">
                    <p className="name"><strong>{item.propertyName}</strong></p>
                    <p className="reservation--number">Reservation Number <strong>{item.reservationId}</strong></p>
                </div>
            </div>
            <div className="dates--and--more">
                <p>{item.reviewDate}</p>
                <Link to={`${item.reservationId}`}>More</Link>
            </div>
        </div>
    ))
  
    return (
        <div className="group--reviews--list--container">
           
            <div className="reviewElements--parent">
                {reviewsElements}
            </div>
        </div>
    )
}