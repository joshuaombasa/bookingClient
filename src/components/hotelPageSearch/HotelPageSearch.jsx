import React, {useState} from "react";
import './hotelPageSearch.css'
import { DateRange } from 'react-date-range';
import { BsSearch, BsCalendar4, BsChevronDown } from 'react-icons/bs'
export default function HotelPageSearch() {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);


      const [destination, setDestination] = useState('')


    return (
        <div className="hotelPageSearch--container">
            <h4>Search</h4>
            <div className="destination--name">
                <small>Destination/property name:</small>
                <div className="search--area">
                    <BsSearch className="hotel--page--search--icons"/>
                    <input 
                      type="text"
                      name="destination"
                      value={destination}
                      onChange={({value}) => setDestination(value)}
                      placeholder="Where are you going?"
                    />
                   
                </div>
            </div>
            <div className="checkin--date">
                <small>Check-in date</small>
                <div className="search--area">
                    <BsCalendar4 className="hotel--page--search--icons"/>
                    <span>Wednesday 10th November ...</span>
                    <BsChevronDown className="down--icon"/>
                </div>
            </div>
            <div className="check--out--date">
                <small>Check-out date</small>
                <div className="search--area">
                    <BsCalendar4 className="hotel--page--search--icons"/>
                    <span>Wednesday 10th November 2023</span>
                    <BsChevronDown className="down--icon"/>
                </div>
            </div>
            <small>9-night stay</small>
            <div className="guest--select">
                <div className="search--area">
                    <span>1 adult . 1 chilren . 1room</span>
                    <BsChevronDown className="down--icon"/>
                </div>
            </div>
            <button className="hotels--page--search--btn">Search</button>
        </div>
    )
}