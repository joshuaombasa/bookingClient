import React from "react";
import './selectedGroupReview.css'
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { groupReviewsList } from "../../../../utils/reviewsData";

export default function SelectedGroupReview() {
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
                    {selectedReview.comments && <>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Reply here"
                        />
                        <button>Reply</button>
                    </>}
                </div>
            </div>
        </div>
    )
}