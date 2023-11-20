import React from "react";
import './newPropertyAmenities.css'
import { Link } from 'react-router-dom'

export default function NewPropertyAmenities() {
    return (
        <div className="newPropertyAmenities--page">
            <div className="newPropertyAmenities--page--container">
                <h1>Amenities</h1>
                <p>You are nearly done! We just need a few more details about the extra bed options you provide, plus any amenities or specific features and services available.</p>
                <div className="extra--bed">
                    <h3>Extra bed options</h3>
                    <label htmlFor="">Can you provide extra beds?</label>
                    <div className="extra--bed--cta">
                        <div className="">
                            <input type="radio" name="extra--bed" id="extra--bed--yes" />
                            <label htmlFor="extra--bed--yes">Yes</label>
                        </div>
                        <div className="">
                            <input type="radio" name="extra--bed" id="extra--bed--no" />
                            <label htmlFor="extra--bed--no">No</label>
                        </div>
                    </div>
                </div>
                <div className="most--popular--amenities">
                    <h3>Amenities</h3>
                    <p>Select any of the following ammenities  you provide?</p>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Toilet pape</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Shower</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor=""> Barbecue</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Outdoor furniture</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Outdoor furniture</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Tea/Coffee maker</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Cleaning products</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Shower</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Toilet</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Room is entirely wheelchair accessible</label>
                    </div>
                </div>
                <Link to='../photos' className="continue--btn">Continue</Link>
            </div>
        </div>
    )
}