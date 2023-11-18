import React from "react";
import './becomeHostFeedBackLoop.css'
import { Link, useLocation } from "react-router-dom";

export default function BecomeHostFeedBackLoop() {

    const location = useLocation()

    console.log(location.state)

    return (
        <div className="becomeHostFeedBackLoop--page">
            <div className="becomeHostFeedBackLoop--page--container">
                <h1>You're listing</h1>
                <div className="listing--item">
                    <p><strong>Property of type: </strong></p>
                    <p>{location.state.typeOfProperty}</p>
                </div>
                <div className="listing--item">
                    <p><strong>Guest can Book: </strong></p>
                    <p>{location.state.whatCanGuestBook}</p>
                </div>
                <div className="listing--item">
                    <p><strong>Property of category:</strong></p>
                    <p>{location.state.propertyCategoryIsMostSimilarToYourPlace}</p>
                </div>
                <div className="listing--item">
                    <p><strong>Property unit count is:</strong></p>
                    <p>{location.state.howManyLuxuryTentsAreYouListing}</p>
                </div>
                <div className="listing--ctas">
                    <Link className="continue--btn">Continue</Link>
                    <Link className="make--change--btn">No, I need to make a change</Link>
                </div>
            </div>
        </div>
    )
}
