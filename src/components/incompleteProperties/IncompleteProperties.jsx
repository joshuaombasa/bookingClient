import React from "react";
import './incompleteProperties.css'
import { BsArrowDown } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function IncompleteProperties() {

    const incompleteProperties = [
        {
            id: '1',
            name: 'Gretsa View',
            location: 'Kisumu, Kenya',
            progress: '40'
        },
        {
            id: '2',
            name: 'Sunset Residences',
            location: 'Nairobi, Kenya',
            progress: '20'
        },
        {
            id: '3',
            name: 'Majestic Heights',
            location: 'Mombasa, Kenya',
            progress: '60'
        },
        {
            id: '4',
            name: 'Green Valley Estates',
            location: 'Eldoret, Kenya',
            progress: '75'
        },
        {
            id: '5',
            name: 'Silver Springs',
            location: 'Nakuru, Kenya',
            progress: '30'
        }
    ];

    console.log(incompleteProperties[0].name.split(' ')[0][0])

    function generateProgressBar(value) {
        return (
            <div className="bar">
                <span
                    className="gold--level"
                    style={{ width: `${value}%` }}
                ></span>
            </div>
        )
    }

    const incompletePropertiesElements = incompleteProperties.map(item => (
        <div key={item.id} className="incomplete--list">
            <div className="initials--parent">
                <span className="initials">{item.name.split(' ')[0][0]}{item.name.split(' ')[1][0]}</span>
                <p className="property--name"><strong>{item.name}</strong></p>
            </div>
            <p className="location">{item.location}</p>
            <div className="progress">
                {generateProgressBar(item.progress)}
                <p className="">{item.progress}%</p>
            </div>
            <p className="action">Continue registration</p>
            <div className="delete--parent">
                <span><RiDeleteBin6Line /></span>
                <p>Delete</p>
            </div>
        </div>
    ))


    return (
        <div className="incompleteProperties--container">
            <div className="property--head">
                <div className="">
                    <p><strong>Name</strong></p>
                    <span><BsArrowDown /></span>
                </div>
                <p><strong >Location</strong></p>
                <p><strong >Registration progress</strong></p>
                <p><strong >Action</strong></p>
                <p><strong ></strong></p>
            </div>
            {incompletePropertiesElements}
        </div>
    )
}