import React from "react";
import './reviews.css'
import { BiUserCircle } from 'react-icons/bi'
import { MdPeopleOutline , MdOutlineFamilyRestroom} from 'react-icons/md'
import { TbUsersGroup } from 'react-icons/tb'
import { IoIosBed } from 'react-icons/io'
import {  BiBed } from 'react-icons/bi'
import { BsFillHeartbreakFill , BsFillHeartFill, BsCalendar}  from 'react-icons/bs'
import { PiPersonArmsSpreadThin } from 'react-icons/pi'
import { TiTickOutline } from 'react-icons/ti'

export default function Reviews()  {

    const reviews = [
        {
            name: 'Scott Riter',
            id: '1',
            date: '27 September 2023',
            country: 'Russia',
            room: 'Quee Room with two queen bed - No pets',
            days: '4',
            guestCategory: 'family',
            text: 'Good value and convenient location',
            rating: '9',
            good:'Spacious rooms with comprehensive amenities. Very comfortable and quiet. Price compared favourably with neighboring hotels. Charging points for electric vehicles were conveniently located in the gas station opposite, which came in handy when Avis could only offer me a Chevy Bolt.',
            bad: 'The buffet style breakfast, which was fairly extensive and included in my room rate, was of somewhat mediocre quality. Friends who were staying in the same hotel were also underwhelmed when they dined in the on-site restaurant. Although the room was mostly very clean, the A/C and ceiling vents needed a good vacuuming.'
        },
         {
            name: 'Scott Riter',
            id: '2',
            date: '27 September 2023',
            country: 'Russia',
            room: 'Quee Room with two queen bed - No pets',
            days: '4',
            guestCategory: 'family',
            text: 'Good value and convenient location',
            rating: '9',
            good:'Spacious rooms with comprehensive amenities. Very comfortable and quiet. Price compared favourably with neighboring hotels. Charging points for electric vehicles were conveniently located in the gas station opposite, which came in handy when Avis could only offer me a Chevy Bolt.',
            bad: 'The buffet style breakfast, which was fairly extensive and included in my room rate, was of somewhat mediocre quality. Friends who were staying in the same hotel were also underwhelmed when they dined in the on-site restaurant. Although the room was mostly very clean, the A/C and ceiling vents needed a good vacuuming.'
        },
        {
            name: 'Scott Riter',
            id: '3',
            date: '27 September 2023',
            country: 'Russia',
            room: 'Quee Room with two queen bed - No pets',
            days: '4',
            guestCategory: 'family',
            text: 'Good value and convenient location',
            rating: '9',
            good:'Spacious rooms with comprehensive amenities. Very comfortable and quiet. Price compared favourably with neighboring hotels. Charging points for electric vehicles were conveniently located in the gas station opposite, which came in handy when Avis could only offer me a Chevy Bolt.',
            bad: 'The buffet style breakfast, which was fairly extensive and included in my room rate, was of somewhat mediocre quality. Friends who were staying in the same hotel were also underwhelmed when they dined in the on-site restaurant. Although the room was mostly very clean, the A/C and ceiling vents needed a good vacuuming.'
        },
        {
            name: 'Scott Riter',
            id: '4',
            date: '27 September 2023',
            country: 'Russia',
            room: 'Quee Room with two queen bed - No pets',
            days: '4',
            guestCategory: 'family',
            text: 'Good value and convenient location',
            rating: '9',
            good:'Spacious rooms with comprehensive amenities. Very comfortable and quiet. Price compared favourably with neighboring hotels. Charging points for electric vehicles were conveniently located in the gas station opposite, which came in handy when Avis could only offer me a Chevy Bolt.',
            bad: 'The buffet style breakfast, which was fairly extensive and included in my room rate, was of somewhat mediocre quality. Friends who were staying in the same hotel were also underwhelmed when they dined in the on-site restaurant. Although the room was mostly very clean, the A/C and ceiling vents needed a good vacuuming.'
        },
        {
            name: 'Scott Riter',
            id: '5',
            date: '27 September 2023',
            country: 'Russia',
            room: 'Quee Room with two queen bed - No pets',
            days: '4',
            guestCategory: 'family',
            text: 'Good value and convenient location',
            rating: '9',
            good:'Spacious rooms with comprehensive amenities. Very comfortable and quiet. Price compared favourably with neighboring hotels. Charging points for electric vehicles were conveniently located in the gas station opposite, which came in handy when Avis could only offer me a Chevy Bolt.',
            bad: 'The buffet style breakfast, which was fairly extensive and included in my room rate, was of somewhat mediocre quality. Friends who were staying in the same hotel were also underwhelmed when they dined in the on-site restaurant. Although the room was mostly very clean, the A/C and ceiling vents needed a good vacuuming.'
        },
        {
            name: 'Scott Riter',
            id: '6',
            date: '27 September 2023',
            country: 'Russia',
            room: 'Quee Room with two queen bed - No pets',
            days: '4',
            guestCategory: 'family',
            text: 'Good value and convenient location',
            rating: '9',
            good:'Spacious rooms with comprehensive amenities. Very comfortable and quiet. Price compared favourably with neighboring hotels. Charging points for electric vehicles were conveniently located in the gas station opposite, which came in handy when Avis could only offer me a Chevy Bolt.',
            bad: 'The buffet style breakfast, which was fairly extensive and included in my room rate, was of somewhat mediocre quality. Friends who were staying in the same hotel were also underwhelmed when they dined in the on-site restaurant. Although the room was mostly very clean, the A/C and ceiling vents needed a good vacuuming.'
        },
    ]

    const reviewElements =  reviews.map(item => (
        <div className="reviews--card">
            <div className="reviewer--data">
                <div className="name flat">
                   <span> <BiUserCircle className="icon"/></span>
                    <span>{item.name}</span>
                </div>
                <div className="bed flat">
                    <span><BiBed className="icon"/></span>
                    <span>{item.room}</span>
                </div>
                <div className="nights flat">
                   <span> <BsCalendar className="icon"/></span>
                    <span>{item.days} nights</span>
                </div>
                <div className="guest--type flat">
                    <span><MdOutlineFamilyRestroom className="icon"/></span>
                    <span>{item.guestCategory}</span>
                </div>
            </div>
            <div className="review--text">
                <span>{item.date}</span>
                <h3>{item.text}</h3>
                <div className="good">
                   <span> <BsFillHeartFill className="green--icon"/></span>
                    <p>{item.good}</p>
                </div>
                <div className="bad">
                    <span><BsFillHeartbreakFill className="red--icon"/></span>
                    <p>{item.bad}</p>
                </div>
            </div>
            <span className="rating">{item.rating}</span>
        </div>
    ))

    return (
        <div className="reviews--page">
            <div className="reviews--page--container">
               {reviewElements}
                
            </div>
        </div>
    )

}