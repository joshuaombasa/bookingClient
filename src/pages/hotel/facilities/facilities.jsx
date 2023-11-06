import React from "react";
import './facilities.css'
import { LuSofa } from 'react-icons/lu'
import { PiTelevisionSimpleBold, PiWheelchairFill, PiLockSimpleBold, PiSuitcaseSimpleLight } from 'react-icons/pi'
import { GiFlowerPot, GiFlexibleLamp } from 'react-icons/gi'
import { IoIosBed } from 'react-icons/io'
import { IoGolfOutline } from 'react-icons/io5'
import { TiTickOutline, TiTick } from 'react-icons/ti'
import { BiWifi, BiBed, BiConversation } from 'react-icons/bi'
import { FaCocktail } from 'react-icons/fa'
import { BsFan, BsInfoCircle } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { TbSmokingNo } from 'react-icons/tb'
import { NavLink } from "react-router-dom";
import { RiRestaurantLine } from 'react-icons/ri'
import { MdOutlineBathroom, MdPets, MdFamilyRestroom, MdOutlineBathtub, MdOutlineHealthAndSafety, MdEventSeat } from 'react-icons/md'
import { FaSwimmingPool } from 'react-icons/fa'
import { LuParkingCircle } from 'react-icons/lu'

export default function Facilities() {
    const bathroom = [
        'Toilet paper',
        'Towels',
        'Bath or shower',
        'Private bathroom',
        'Toilet',
        'Free toiletries',
        'Hairdryer',
    ]

    const bathroomElements = bathroom.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))
    const bedroom = ['Linen',
        'Wardrobe or closet',
        'Alarm clock']
    const bedroomElements = bedroom.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const outdoors = [
        ' Picnic area',
        'Outdoor furniture',
        'Sun terrace',
        'BBQ facilities',
    ]

    const outdoorsElements = outdoors.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const kitchen = [
        'Coffee machine',
        'Cleaning products',
        'Microwave',
        'Refrigerator',
    ]

    const kitchenElements = kitchen.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const roomAmenities = ['Clothes rack']

    const roomAmenitiesElements = roomAmenities.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const activities = [
        {
            activity: ' Bingo',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: ' Bingo',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: ' Bingo',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: ' Bingo',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: ' Bingo',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: 'Live sport events (broadcast)',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: 'Live music/performance            ',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: ' Cooking class',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: 'Horse riding',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: ' Bowling',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: 'Hiking',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: ' Skiing',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: 'Fishing',
            charges: 'Additional charge',
            site: 'Off-site'
        },
        {
            activity: 'Golf course (within 3 km)',
            charges: 'Additional charge',
            site: 'Off-site'
        },

    ]

    const activitiesElements = activities.map(item => (
        <div className='wrapper' key={item.activity}>
            <TiTick />
            <span>{item.activity}</span>
            {item.charges && <span>{item.charges}</span>}
            {item.site && <span>{item.site}</span>}
        </div>
    ))

    const livingArea = ['Desk']

    const livingAreaElements = livingArea.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))
    const media = [
        'Flat-screen TV',
        'Cable channels',
        'Satellite channels',
        'Telephone',
        'TV']

    const mediaElements = media.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const food = [
        ' Fruits',
        'Kid-friendly buffet',
        'Tea/Coffee maker'
    ]

    const foodElements = food.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const parking = [
        ' Street parking',
        'Accessible parking'
    ]

    const parkingElements = parking.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const reception = [
        'Luggage storage',
        'Express check-in/check-out',
        '24-hour front desk'
    ]
    const receptionElements = reception.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const entertainment = ['Child safety socket covers']

    const entertainmentElements = entertainment.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const cleaning = [
        'Daily housekeeping',
        'Laundry',
        'Additional charge'
    ]

    const cleaningElements = cleaning.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const business = ['Fax/photocopying',
        'Business centre',
        'Meeting/banquet facilities']

    const businessElements = business.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const safety = [
        'Fire extinguishers',
        'CCTV in common areas',
        'Smoke alarms',
        'Security alarm',
        'Key card access',
        'Safety deposit box'
    ]

    const safetyElements = safety.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const genearal = [
        'Shuttle service',
        'Carbon monoxide detector',
        'Minimarket on site',
        'Vending machine (snacks)',
        'Vending machine (drinks)',
        'Hypoallergenic',
        'Designated smoking area',
        'Air conditioning',
        'Non-smoking throughout',
        'Allergy-free room',
        'Wake-up service',
        'Heating',
        'Carpeted',
        'Lift',
        'Facilities for disabled guests',
        'Non-smoking rooms',
        'Iron',
        'Wake up service/Alarm clock'
    ]

    const genearalElements = genearal.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const accecibility = [
        ' Visual aids: Braille',
        'Lower bathroom sink',
        'Higher level toilet',
        'Toilet with grab rails',
        'Wheelchair accessible',
        'Upper floors accessible by elevator'
    ]

    const accecibilityElements = accecibility.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const wellness = [
        ' Fitness',
        'Sun loungers or beach chairs',
        'Hot tub/Jacuzzi',
        'Fitness centre'
    ]

    const wellnessElements = wellness.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    const languages = [
        'English',
        'Spanish'
    ]

    const languagesElements = languages.map(item => (
        <div className='wrapper' key={item}>
            <TiTick />
            <span>{item}</span>
        </div>
    ))

    return (
        <div className="facilities--page">
            <h2>Facilities of Holiday Inn Express & Suites Colorado Springs Central, an IHG Hotel</h2>
            <div className="most--popular--facilities">
                <p>Great facilities! Review score, 8.7</p>
                <h4>Most popular facilities</h4>
                <div className="ammenities">
                    <div className="all-ammenities--icon-container">
                        <FaSwimmingPool className="icon" />
                        <span>Indoor swimming pool</span>
                    </div>
                    <div className="all-ammenities--icon-container">
                        <RiRestaurantLine className="icon" />
                        <span>Restaurant</span>
                    </div>
                    <div className="all-ammenities--icon-container">
                        <MdOutlineBathroom className="icon" />
                        <span>Private bathroom</span>
                    </div>
                    <div className="all-ammenities--icon-container">
                        <LuParkingCircle className="icon" />
                        <span>Free parking</span>
                    </div>
                    <div className="all-ammenities--icon-container">
                        <BiWifi className="icon" />
                        <span>Free WiFi</span>
                    </div>
                    <div className="all-ammenities--icon-container">
                        <BsFan className="icon" />
                        <span>Air conditioning</span>
                    </div>
                    <div className="all-ammenities--icon-container">
                        <MdPets className="icon" />
                        <span>Pets allowed</span>
                    </div>
                    <div className="all-ammenities--icon-container">
                        <MdFamilyRestroom className="icon" />
                        <span>Family rooms</span>
                    </div>
                    <div className="all-ammenities--icon-container">
                        <TbSmokingNo className="icon" />
                        <span>Non-smoking rooms</span>
                    </div>
                    <div className="all-ammenities--icon-container">
                        <MdOutlineBathtub className="icon" />
                        <span>Bath</span>
                    </div>
                    <div className="all-ammenities--icon-container">
                        <FaCocktail className="icon" />
                        <span>Bar</span>
                    </div>
                </div>
            </div>
            <div className="facilities--page--container">
                <div className="bathroom">
                    <div className="header">
                        <span> <MdOutlineBathroom className='icon' /></span>
                        <h4>Bathroom</h4>
                    </div>
                    {bathroomElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span><IoIosBed className='icon' /></span>
                        <h4>Bedroom</h4>
                    </div>
                    {bathroomElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span> <GiFlowerPot className='icon' /></span>
                        <h4>Outdoors</h4>
                    </div>
                    {outdoorsElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span> <GiFlexibleLamp className='icon' /></span>
                        <h4>Room Amenities</h4>
                    </div>
                    {roomAmenitiesElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span> <IoGolfOutline className='icon' /></span>
                        <h4>Activities</h4>
                    </div>
                    {activitiesElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span> <LuSofa className='icon' /></span>
                        <h4>Living Area</h4>
                    </div>
                    {livingAreaElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span> <PiTelevisionSimpleBold className='icon' /></span>
                        <h4>Media & Technology</h4>
                    </div>
                    {mediaElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span> <RiRestaurantLine className='icon' /></span>
                        <h4>Food & Drink</h4>
                    </div>
                    {foodElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span><LuParkingCircle className='icon' /></span>
                        <h4>Parking</h4>
                    </div>
                    {parkingElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span> <MdEventSeat className='icon' /></span>
                        <h4>Reception services</h4>
                    </div>
                    {receptionElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span> <MdFamilyRestroom className='icon' /></span>
                        <h4>Entertainment and family services</h4>
                    </div>
                    {entertainmentElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span><PiSuitcaseSimpleLight className='icon' /></span>
                        <h4>Business facilities</h4>
                    </div>
                    {businessElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span><PiLockSimpleBold className='icon' /></span>
                        <h4>Safety & security</h4>
                    </div>
                    {safetyElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span><BsInfoCircle className='icon' /></span>
                        <h4>General</h4>
                    </div>
                    {genearalElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span><PiWheelchairFill className='icon' /></span>
                        <h4>Accessibility</h4>
                    </div>
                    {accecibilityElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span><MdOutlineHealthAndSafety className='icon' /></span>
                        <h4>Wellness</h4>
                    </div>
                    {wellnessElements}
                </div>
                <div className="bathroom">
                    <div className="header">
                        <span><BiConversation className='icon' /></span>
                        <h4>Languages spoken</h4>
                    </div>
                    {languagesElements}
                </div>
            </div>
        </div>

    )
}