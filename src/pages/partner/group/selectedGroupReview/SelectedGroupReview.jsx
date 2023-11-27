import React, { useState } from "react";
import './selectedGroupReview.css'
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { groupReviewsList } from "../../../../utils/reviewsData";

export default function SelectedGroupReview() {

    const [responseText, setResponseText] = useState('')
    const [showResponseText, setShowResponseText] = useState(false)


    function handleResponseTextChange(event) {
        setResponseText(event.target.value)
    }

    function handleResponseSubmission() {
        if (responseText === '') {
            setShowResponseText(false)
        } else {
            setShowResponseText(true)
        }
    }

    const params = useParams()

    const selectedReview = groupReviewsList.find(item => item.reservationId === params.id)

    const categoryRatingBars = selectedReview.reviewCategories.map(item => {
        const widthPercentage = (item.rating / 10) * 100
        return (
            <div key={item.category} className="rating--bar--parent">
                <div className="rating--text">
                    <p>{item.category}</p>
                    <p>{item.rating}</p>
                </div>
                <div className="bar">
                    <span style={{ width: `${widthPercentage}%` }}></span>
                </div>
            </div>
        )
    }


    )

    return (
        <div className="selectedGroupReview--page">
            <div className="selectedGroupReview--page--container">
                <Link
                    className="back--link"
                    to='..'
                    relative='path'
                >
                    <span><GoArrowLeft className="icon" /></span>
                    <span>Back to all reviews</span>
                </Link>
                <div className="selected--review--wrapper">
                    <div className="vitals">
                        <span className="rating--value">{selectedReview.overallRating}</span>
                        <div className="">
                            <p className="guest--name">{selectedReview.guestName}</p>
                            <p className="reservationId">Reservation Number<strong>{selectedReview.reservationId}</strong></p>
                        </div>
                    </div>
                    <p className="time">{selectedReview.reviewDate}</p>
                </div>
                <h3>Categories</h3>
                <div className="bars--cover">
                    {categoryRatingBars}
                </div>
                <div className="comments">
                    <h3>Comments</h3>
                    {selectedReview.comments ?
                        <p>{selectedReview.comments}</p> :
                        <p>No comments</p>
                    }
                    {showResponseText && <p>{responseText}</p>}
                    {selectedReview.comments && <>
                        <textarea
                            name="responseText"
                            id=""
                            cols="30"
                            value={responseText}
                            rows="10"
                            onChange={handleResponseTextChange}
                            placeholder="Reply here"
                        />
                        <button
                            onClick={() => handleResponseSubmission()}
                        >Reply</button>
                    </>}
                </div>
            </div>
        </div>
    )
}