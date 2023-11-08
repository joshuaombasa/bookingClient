import React, { useState } from "react";
import './reservedRoomDetails.css'
import { BsCheckCircle, BsFillCupHotFill, BsCheck2, BsPeople, BsQuestionCircle, BsTaxiFrontFill } from 'react-icons/bs'
import { LuSparkles } from 'react-icons/lu'
import { TbSmokingNo } from 'react-icons/tb'
import { IoCarSportSharp } from 'react-icons/io5'

import { LuBedDouble, LuSofa } from 'react-icons/lu'
import { MdMeetingRoom, MdOutlineOtherHouses, MdOutlineLocationCity, MdOutlineSevereCold, MdNoiseControlOff, MdOutlineCoffeeMaker, MdWifi } from 'react-icons/md'
import { FaShower, FaHotel } from 'react-icons/fa'
import { PiTelevisionSimpleLight } from 'react-icons/pi'
import { MdPerson2, MdPersonOutline } from 'react-icons/md'
import { RiCupLine } from 'react-icons/ri'
import { FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function ReservedRoomDetails() {
    const [guestName, setGuestName] = useState('')

    function handleGuestNameChange(event) {
        const { name, value } = event.target
        setGuestName(value)
    }

    const hours = [
        {
            id: '',
            time: 'I dont know'
        },
        {
            id: '1',
            time: '00:00 - 01:00'
        },
        {
            id: '2',
            time: '01:00 - 02:00'
        },
        {
            id: '',
            time: '02:00 - 03:00'
        },
        {
            id: '',
            time: '03:00 - 04:00'
        },
        {
            id: '',
            time: '04:00 - 05:00'
        },
        {
            id: '',
            time: '05:00 - 06:00'
        },
        {
            id: '',
            time: '06:00 - 07:00'
        },
        {
            id: '',
            time: '07:00 - 08:00'
        },
        {
            id: '',
            time: '08:00 - 09:00'
        },
        {
            id: '',
            time: '09:00 - 10:00'
        },
        {
            id: '',
            time: '10:00 - 11:00'
        },
        {
            id: '',
            time: '11:00 - 12:00'
        },
        {
            id: '',
            time: '12:00 - 13:00'
        },
        {
            id: '',
            time: '13:00 - 14:00'
        },
        {
            id: '',
            time: '14:00 - 15:00'
        },
        {
            id: '',
            time: '15:00 - 16:00'
        },
        {
            id: '',
            time: '16:00 - 17:00'
        },
        {
            id: '',
            time: '17:00 - 18:00'
        },
        {
            id: '',
            time: '18:00 - 19:00'
        },
        {
            id: '',
            time: '19:00 - 20:00'
        },
        {
            id: '',
            time: '20:00 - 21:00'
        },
        {
            id: '',
            time: '21:00 - 22:00'
        },
        {
            id: '',
            time: '22:00 - 23:00'
        },
        {
            id: '',
            time: '23:00 - 00:00'
        },
        {
            id: '',
            time: '00:00 - 01:00 (the next day)'
        },
        {
            id: '',
            time: '01:00 - 02:00 (the next day)'
        },
    ]

    const optionElements = hours.map(item => (
        <option key={item.time}>{item.time}</option>
    ))

    return (
        <div className="reservedRoomDetails--container">
            <div className="cancellation--note">
                <h3>Good to know:</h3>
                <div>
                    <span><BsCheckCircle /></span>
                    <p>Stay flexible: You can cancel for free before 21 December 2023, so lock in this great price today.</p>
                </div>
            </div>
            <div className="room--note">
                <h3>King Room</h3>
                <div className="green-color">
                    <span><BsFillCupHotFill /></span>
                    <p><strong>Breakfast included in the price</strong></p>
                </div>
                <div className="green-color">
                    <span><BsCheck2 /></span>
                    <p><strong>Free cancellation </strong> before 21 December 2023</p>
                    <span><BsQuestionCircle /></span>
                </div>
                <div>
                    <span><BsPeople /></span>
                    <p><strong>Guests: </strong>2 adults</p>
                    <span><BsQuestionCircle /></span>
                </div>
                <div>
                    <p>Exceptionally clean rooms - 8.8</p>
                </div>
                <div>
                    <p>No smoking</p>
                </div>
                <div className="reserved--room--amenities">
                    <div className="perk">
                        <span><MdMeetingRoom className='icon' /></span>
                        <span>Room</span>
                    </div>
                    <div className="perk">
                        <span><MdOutlineOtherHouses className='icon' /></span>
                        <span>46 m²</span>
                    </div>
                    <div className="perk">
                        <span><MdOutlineLocationCity v /></span>
                        <span>City view</span>
                    </div>
                    <div className="perk">
                        <span><MdOutlineSevereCold className='icon' /></span>
                        <span>Air conditioning</span>
                    </div>
                    <div className="perk">
                        <span><FaShower className='icon' /></span>
                        <span>Ensuite bathroom</span>
                    </div>
                    <div className="perk">
                        <span><PiTelevisionSimpleLight className='icon' /></span>
                        <span>Flat-screen TV</span>
                    </div>
                    <div className="perk">
                        <span><MdNoiseControlOff className='icon' /></span>
                        <span>Soundproofing</span>
                    </div>
                    <div className="perk">
                        <span><MdOutlineCoffeeMaker className='icon' /></span>
                        <span>Coffee machine</span>
                    </div>
                    <div className="perk">
                        <span><MdWifi className='icon' /></span>
                        <span>Free WiFi</span>
                    </div>
                </div>
                <div className="guest--name">
                    <label htmlFor="guestName"><strong>Full guest name</strong></label>
                    <input
                        type="text"
                        name="guestName"
                        id="guestName"
                        value={guestName}
                        onChange={handleGuestNameChange
                        }
                    />
                </div>
            </div>
            <div className="adds--to--stay">
                <h3>Add to your stay</h3>
                <div className="car--line">
                    <div className="inner">
                        <input type="checkbox" name="" id="" />
                        <div>
                            <label htmlFor="">I'm interested in renting a car</label>
                            <small>Make the most out of your trip and check car hire options in your booking confirmation.</small>
                        </div>
                    </div>
                    <span><IoCarSportSharp className="icon" /></span>
                </div>
                <div className="taxi--line">
                    <div className="inner">
                        <input type="checkbox" name="" id="" />
                        <div>
                            <label htmlFor="">Want to book a taxi or shuttle ride in advance?</label>
                            <small>Avoid surprises - get from the airport to your accommodation without a hitch. We'll add taxi options to your booking confirmation</small>
                        </div>
                    </div>
                    <span><BsTaxiFrontFill className="icon" /></span>
                </div>
            </div>
            <div className="special--requests">
                <h3>Special requests</h3>
                <p>Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can always make a special request after your booking is complete!</p>
                <div className="">
                    <label htmlFor=""><strong>Please write your requests in English. </strong> <small>(optional)</small></label>
                    <textarea name="" id="" rows='3' />
                </div>
            </div>
            <div className="arrivals">
                <h3>Your arrival time</h3>
                <div className="">
                    <span><FaHotel className="icon"/></span>
                    <p>Your room will be ready for check-in at 15:00</p>
                </div>
                <div className="">
                    <span><BsCheckCircle className="icon"/></span>
                    <p>24-hour front desk – Help whenever you need it!</p>
                </div>
                <div className="select--arrival--time">
                    <label htmlFor=""><strong>Add your estimated arrival time </strong><small>(optional)</small></label>
                    <select name="" id="">
                        {optionElements}
                    </select>
                    <p>Time is for Colorado Springs time zone</p>
                </div>
            </div>
        </div>
    )
}