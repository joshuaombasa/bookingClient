import React from "react";
import './aboutProperty.css'
import { dialCodes } from "../../../../utils/data";
import { countries } from "../../../../utils/countries";
import { Link } from "react-router-dom";

export default function AboutProperty() {

    const dialCodeOptions = dialCodes.map(item => (
        <option key={item}>{item}</option>
    ))

    const countiesOptions = countries.map(item => (
        <option value={item}>{item}</option>
    ))


    return (
        <div className="aboutProperty--page">
            <div className="aboutProperty--page--container">
                <h1>Welcome Mark Abbot</h1>
                <p>Start by telling us your property's name, contact details and address.</p>
                <div className="name--of--property">
                    <h3>What is the name of your property?</h3>
                    <input type="text" name="" id="" />
                    <p>This name will be seen by guests when they search for a place to stay.</p>
                </div>
                <div className="contact--details">
                    <h3>What are the contact dcreateRoometails for this property?</h3>
                    <div className="name">
                        <label htmlFor="">Contact name</label>
                        <input type="text" name="" id="" />
                    </div>
                    <p>Contact number (so we can assist with your registration when needed)</p>
                    <div className="">
                        <div className="numbers">
                            <div className="number--input">
                                <label htmlFor="">Phone number</label>
                                <div className="">
                                    <select name="" id="">
                                        {dialCodeOptions}
                                    </select>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="number--input">
                                <label htmlFor="">Alternative phone number (optional)</label>
                                <div className="">
                                    <select name="" id="">
                                        {dialCodeOptions}
                                    </select>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property--location--container">
                    <div className="">
                        <h3>Where is your property located?</h3>
                        <div className="addresses">
                            <div className="address">
                                <label htmlFor="">Street address</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="address">
                                <label htmlFor="">Address line 2</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="address">
                                <label htmlFor="">Country/region</label>
                                <select name="" id="">
                                    {countiesOptions}
                                </select>
                            </div>
                            <div className="address">
                                <label htmlFor="">City</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="address">
                                <label htmlFor="">Post code</label>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='createRoom' className="continue--btn">Continue</Link>
            </div>
        </div>
    )
}