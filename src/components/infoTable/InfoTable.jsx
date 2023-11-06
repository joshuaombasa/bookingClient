import React, { useState } from 'react'
import './infoTable.css'
import { LuBedDouble, LuSofa } from 'react-icons/lu'
import { MdMeetingRoom, MdOutlineOtherHouses, MdOutlineLocationCity, MdOutlineSevereCold, MdNoiseControlOff, MdOutlineCoffeeMaker, MdWifi } from 'react-icons/md'
import { FaShower } from 'react-icons/fa'
import { PiTelevisionSimpleLight } from 'react-icons/pi'
import { MdPerson2, MdPersonOutline } from 'react-icons/md'
import { RiCupLine} from 'react-icons/ri'
import { FiCheck } from 'react-icons/fi'



export default function InfoTable() {

    const [roomCount, setRoomCount] = useState(1)

    function handleRoomCountChange(event) {
        const { name, value} = event.target
        setRoomCount(value)
    }

    console.log(roomCount)

    const amenities = [
        'Private suite', '46 m²', 'Mountain view', 'Air conditioning', 'Ensuite bathroom', 'Flat-screen TV', 'Coffee machine', 'Free WiFi',
        'Free toiletries', 'Toilet', 'Sofa', 'Bath or shower ', 'Towels', 'Linen', ' Cleaning products', 'Hypoallergenic Desk', 'TV Refrigerator', 'Telephone', 'Satellite channels', 'Tea/Coffee maker', 'Iron', 'Microwave', 'Heating ', 'Hairdryer', ' Wake up service/Alarm clock', 'Carpeted', 'Cable channels', 'Wardrobe or closet', ' Upper floors accessible by elevator', 'Clothes rack', 'Toilet paper', 'Child safety socket covers', 'Sofa bed', 'Hearing accessible', 'Single-room air conditioning for guest accommodation', 'Carbon monoxide detector'
    ]

    const rooms = [
        {
            name: 'Kings Room',
            id: '',
            bed: '1 extra-large double bed',
            guests: '2',
            nights: '8',
            total: '163,598',
            tax: '16,687',
            amenities: amenities
        },
        {
            name: 'Kings Room',
            id: '',
            bed: '1 extra-large double bed',
            guests: '2',
            nights: '8',
            total: '163,598',
            tax: '16,687',
            amenities: amenities
        },
        {
            name: 'Kings Room',
            id: '',
            bed: '1 extra-large double bed',
            guests: '2',
            nights: '8',
            total: '163,598',
            tax: '16,687',
            amenities: amenities
        },
        {
            name: 'Kings Room',
            id: '',
            bed: '1 extra-large double bed',
            guests: '2',
            nights: '8',
            total: '163,598',
            tax: '16,687',
            amenities: amenities
        },
        {
            name: 'Kings Room',
            id: '',
            bed: '1 extra-large double bed',
            guests: '2',
            nights: '8',
            total: '163,598',
            tax: '16,687',
            amenities: amenities
        },
    ]

    function addPersonIcon(value) {
        const icons = []
        while (value > 0) {
            icons.push(<span><MdPerson2 className='person--icon'/></span>)
            value--
        }
        return icons
    }


    const roomElements = rooms.map(room => (
        <div className="table--content">
            <div className="room--type">
                <h3>{room.name}</h3>
                <div className="bed--type">
                    <p>{room.bed}</p>
                    <span><LuBedDouble className='icon' /></span>
                </div>
                <div className="popular--amenities">
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
            </div>
            <div className="guest--number">
                {addPersonIcon(room.guests)}
            </div>
            <div className="total--price">
                <h3>KES {room.total}</h3>
                <p>+KES {room.tax} taxes and charges</p>
            </div>
            <div className="choices">
                <div className="breakfast">
                    <span><RiCupLine className='person--icon'/></span>
                    <p><strong>Good breakfast </strong> included</p>
                </div>
                <div className="cancelation">
                    <span><FiCheck className='person--icon'/></span>
                    <p><strong>Free cancellation</strong> before 21 December 2023</p>
                </div>
                <ul>
                    <li>Pay nothing until 18 December 2023</li>
                    <li className='red'>Only 6 rooms left on our site</li>
                </ul>
            </div>
            <div className="rooms">
                <select 
                    name="room" 
                    id="" 
                    className='room--select'
                    onChange={handleRoomCountChange}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                </select>
            </div>
            <div className="reserve reserve--style">
                <p>{roomCount} room for</p>
                <h3>KES {room.total}</h3>
                <p>+KES {room.tax} taxes and charges</p>
                <button className='reserver--btn'>I'll reserve</button>
            </div>
        </div>
    ))

    return (
        <div className="info--table">
            <div className="table--head">
                <span className="room--type">Room type</span>
                <span className="guest--number">Number of guests</span>
                <span className="total--price">Price for 8 nights</span>
                <span className="choices">Your choices</span>
                <span className="rooms">Select rooms</span>
                <span className="reserve">Reserve</span>
            </div>
            {roomElements}
        </div>
    )
}