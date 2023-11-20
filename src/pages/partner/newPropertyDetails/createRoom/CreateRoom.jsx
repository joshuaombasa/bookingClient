import React from "react";
import './createRoom.css'
import { Link } from 'react-router-dom'

export default function CreateRoom() {
    return (
        <div className="createRoom--page">
            <div className="createRoom--page--container">
                <h1>Layout and pricing</h1>
                <Link>Go back to overview</Link>
                <div className="room--info">
                    <h3>Tent</h3>
                    <label htmlFor="">Smoking policy</label>
                    <select name="" id="">
                        <option value="">Smoking</option>
                        <option value="">Non-smoking</option>
                        <option value="">Smoking and non-smoking options available</option>
                    </select>
                    <label htmlFor="">Number of rooms (of this type)</label>
                    <input type="number" name="" id="" />
                </div>
                <div className="bed--optios">
                    <label className="about--beds" htmlFor="">What kind of beds are available in this room?
                        <select name="" id="">
                            <option value="">Single beds</option>
                            <option value="">Double beds</option>
                            <option value="">Large beds</option>
                            <option value="">Extra-Large beds</option>
                        </select>
                        <select name="" id="">
                            <option value="">Select the number of beds available</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                        </select>
                    </label>
                    <label htmlFor="">How many guests can stay in this room?</label>
                    <div className="room--pricing">
                        <label htmlFor="">Base price per night</label>
                        <input type="text" name="" id="" />
                        <div className="">
                            <span>US$/per night</span>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                </div>
                <Link to='../facilities' className="continue--btn">Continue</Link>
            </div>
        </div>
    )
}