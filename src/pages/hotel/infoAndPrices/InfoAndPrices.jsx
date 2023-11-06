import React, { useState } from "react";
import './infoAndPrices.css'
import { LuBedDouble, LuSofa } from 'react-icons/lu'
import { PiPersonLight } from 'react-icons/pi'
import { DateRange } from 'react-date-range';
import { BsSearch, BsCalendar4, BsChevronDown } from 'react-icons/bs'
import { HiOutlineMinus } from 'react-icons/hi'
import { MdPerson2, MdPersonOutline } from 'react-icons/md'
import { BsInfoCircle, BsCreditCard2Back } from 'react-icons/bs'
import InfoTable from "../../../components/infoTable/InfoTable";

export default function InfoAndPrices() {

    const [showDateModal, setshowDateModal] = useState(false)
    const [showGuestModal, setshowGuestModal] = useState(false)

    function toggleShowDateModal() {
        setshowDateModal(prevState => !prevState)
        setshowGuestModal(false)
    }

    function toggleShowGuestModal() {
        setshowGuestModal(prevState => !prevState)
        setshowDateModal(false)
    }


    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    const [guestObject, setGuestObject] = useState({
        adults: '1',
        children: '0',
        rooms: '1'
    })

    function handleGuestObjectChange(type, operation) {
        setGuestObject(prevState => {
            return {
                ...prevState,
                [type]: operation === 'add' ? prevState[type]++ : prevState[type]--
            }
        })
    }

    const amenities = [
        'Private suite', '46 m²', 'Mountain view', 'Air conditioning', 'Ensuite bathroom', 'Flat-screen TV', 'Coffee machine', 'Free WiFi',
        'Free toiletries', 'Toilet', 'Sofa', 'Bath or shower ', 'Towels', 'Linen', ' Cleaning products', 'Hypoallergenic Desk', 'TV Refrigerator', 'Telephone', 'Satellite channels', 'Tea/Coffee maker', 'Iron', 'Microwave', 'Heating ', 'Hairdryer', ' Wake up service/Alarm clock', 'Carpeted', 'Cable channels', 'Wardrobe or closet', ' Upper floors accessible by elevator', 'Clothes rack', 'Toilet paper', 'Child safety socket covers', 'Sofa bed', 'Hearing accessible', 'Single-room air conditioning for guest accommodation', 'Carbon monoxide detector'
    ]

    return (
        <div className="infoAndPrices--page">
            <div className="infoAndPrices--page">
                <h1>Availability</h1>
                <div className="price--line">
                    <p>Prices converted to KES</p>
                    <span>< BsInfoCircle /></span>
                </div>
                <div className="search--tag">
                    <div className="date--search">
                        <div 
                           className="guest--search--area"
                           onClick={() => toggleShowDateModal()}
                        >
                            <span><BsCalendar4 className="icon" /></span>
                            <p>Fri 22 Dec 2023 --- Mon 5 Jan 2024</p>
                        </div>
                        {showDateModal && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date--modal'
                        />}
                    </div>
                    <div className="guest--search">
                        <div 
                           className="guest--search--area"
                           onClick={() => toggleShowGuestModal()}
                        >
                            <span><MdPersonOutline className="icon" /></span>
                            <p>{guestObject.adults} adults. {guestObject.children} children . {guestObject.rooms} rooms</p>
                        </div>
                        {showGuestModal &&
                            <div className="guest--search--modal">
                                <div className="adults">
                                    <span>Adults</span>
                                    <div className="ctas">

                                        <button
                                            onClick={() => handleGuestObjectChange('adults', 'minus')}
                                            disabled={guestObject.adults <= 1}
                                        >-</button>
                                        <span>{guestObject.adults}</span>
                                        <button
                                            onClick={() => handleGuestObjectChange('adults', 'add')}
                                        >+</button>
                                    </div>
                                </div>
                                <div className="children">
                                    <span>Children</span>
                                    <div className="ctas">
                                        <button
                                            onClick={() => handleGuestObjectChange('children', 'minus')}
                                            disabled={guestObject.children <= 0}
                                        >-</button>
                                        <span>{guestObject.children}</span>
                                        <button
                                            onClick={() => handleGuestObjectChange('children', 'add')}
                                        >+</button>
                                    </div>
                                </div>
                                <div className="room">
                                    <span>Rooms</span>
                                    <div className="ctas">

                                        <button
                                            onClick={() => handleGuestObjectChange('rooms', 'minus')}
                                            disabled={guestObject.rooms <= 1}
                                        >-</button>
                                        <span>{guestObject.rooms}</span>
                                        <button
                                            onClick={() => handleGuestObjectChange('rooms', 'add')}
                                        >+</button>
                                    </div>
                                </div>
                                <button className="done--btn">Done</button>
                            </div>
                        }
                    </div>
                    <button className="search--btn">change search</button>
                </div>
                <InfoTable/>
            </div>
        </div>

    )
}