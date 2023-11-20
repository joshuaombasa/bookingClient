import React from "react";
import { majorLanguages } from '../../../../utils/languages'
import './newPropertyFacilities.css'
import { Link } from 'react-router-dom'

export default function NewPropertyFacilities() {

    const languageOptions = majorLanguages.map(item => (
        <option key={item}>{item}</option>
    ))

    return (
        <div className="newProperty--facilities--page">
            <div className="newProperty--facilities--page--container">
                <h1>Facilities & services</h1>
                <p>Now, tell us some general details about your property, such as facilities available, internet, parking and the languages you speak.</p>
                <div className="parking-info">
                    <h3>Parking</h3>
                    <label htmlFor="">Is parking available to guests?</label>
                    <select name="" id="">
                        <option value="">No</option>
                        <option value="">Yes, Free</option>
                        <option value="">Yes, Paid</option>
                    </select>
                </div>
                <div className="breakfast-info">
                    <h3>Breakfast</h3>
                    <label htmlFor="">Is breakfast available to guests?</label>
                    <select name="" id="">
                        <option value="">No</option>
                        <option value="">Yes, it's included in the price</option>
                        <option value="">Yes, it's not included in the price</option>
                    </select>
                </div>
                <div className="langueges--spoken-info">
                    <h3>Languages spoken</h3>
                    <label htmlFor="">What languages do you or your staff speak?</label>
                    <select name="" id="">
                        {languageOptions}
                    </select>
                </div>
                <div className="popular--facilities">
                    <h3>Facilities that are popular with guests</h3>
                    <p>Guests look for these facilities the most when they’re searching for properties.</p>
                    <div className="facility">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Free WiFi</label>
                    </div>
                    <div className="facility">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Bar</label>
                    </div>
                    <div className="facility">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Sauna</label>
                    </div>
                    <div className="facility">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Garden</label>
                    </div>
                    <div className="facility">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Terrace</label>
                    </div>
                    <div className="facility">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Non-smoking rooms</label>
                    </div>
                    <div className="facility">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Family rooms</label>
                    </div>
                    <div className="facility">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Hot tub/Jacuzzi</label>
                    </div>
                    <div className="facility">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Air conditioning</label>
                    </div>
                    <div className="facility">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Swimming pool</label>
                    </div>
                </div>
                <Link to='../amenities' className="continue--btn">Continue</Link>
            </div>
        </div>
    )
}