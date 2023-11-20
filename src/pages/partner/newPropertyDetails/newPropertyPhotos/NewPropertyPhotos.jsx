import React from "react";
import './newPropertyPhotos.css'
import { MdOutlinePhoto } from "react-icons/md";
import { Link } from 'react-router-dom'

export default function NewPropertyPhotos() {
    return (
        <div className="newPropertyPhotos--page">
            <div className="newPropertyPhotos--page--container">
                <h1>Property photos</h1>
                <p>Great photos invite guests to get the full experience of your property, so upload some high-resolution photos that represent all your property has to offer. We will display these photos on your property's page on the Booking.com website.</p>
                <div className="new--property--photo--gallery">
                    <h3>Photo gallery</h3>
                    <div className="photo--cta">
                        <label htmlFor="propertyPhoto">
                            <h3>Upload at least one photo</h3>
                            <p>You will also be able to upload more photos after registration</p>
                            <h3>Drag and drop your photos here</h3>
                            <p>or</p>
                            <div className="continue--btn add--photo--btn">
                                <span><MdOutlinePhoto className="icon"/></span>
                                <span>Add photos</span>
                            </div>
                        </label>
                        <input type="file" name="" id="propertyPhoto"/>
                    </div>
                </div>
                <Link to='../settings' className="continue--btn">Continue</Link>
            </div>
        </div>
    )
}