import React from "react";
import './groupHomePerformance.css'

export default function GroupHomePerformance() {

    const propertyList = [
        {
          id: '11063028',
          property: 'Magwagwa Best',
          bookedAvgDailyRate: '$150',
          stayedAvgDailyRate: '$120',
          cancellationRate: '5%',
          stayedRoomNights: '100',
          stayedEarnings: '$12,000',
          reviewScore: '4.2',
          hotelReservations: '50'
        },
        {
          id: '21063029',
          property: 'Sunset Retreat',
          bookedAvgDailyRate: '$180',
          stayedAvgDailyRate: '$160',
          cancellationRate: '3%',
          stayedRoomNights: '120',
          stayedEarnings: '$15,000',
          reviewScore: '4.5',
          hotelReservations: '70'
        },
        // 3 more properties added
        {
          id: '31063030',
          property: 'Mountain View Lodge',
          bookedAvgDailyRate: '$200',
          stayedAvgDailyRate: '$180',
          cancellationRate: '2%',
          stayedRoomNights: '150',
          stayedEarnings: '$18,000',
          reviewScore: '4.8',
          hotelReservations: '90'
        },
        {
          id: '41063031',
          property: 'Oceanfront Paradise',
          bookedAvgDailyRate: '$220',
          stayedAvgDailyRate: '$200',
          cancellationRate: '4%',
          stayedRoomNights: '80',
          stayedEarnings: '$10,000',
          reviewScore: '4.0',
          hotelReservations: '40'
        },
        {
          id: '51063032',
          property: 'Urban Oasis',
          bookedAvgDailyRate: '$160',
          stayedAvgDailyRate: '$140',
          cancellationRate: '1%',
          stayedRoomNights: '200',
          stayedEarnings: '$20,000',
          reviewScore: '4.7',
          hotelReservations: '120'
        }
      ];

      const propertiesPerformanceElements = propertyList.map(item => (
        <div className="performance--head">
            <p>{item.id}</p>
            <p className="property">{item.property}</p>
            <p>{item.bookedAvgDailyRate}</p>
            <p>{item.stayedAvgDailyRate}</p>
            <p>{item.cancellationRate}</p>
            <p>{item.stayedRoomNights}</p>
            <p>{item.stayedEarnings}</p>
            <p>{item.reviewScore}</p>
            <p>{item.hotelReservations}</p>
        </div>
      ))
    return (
        <div className="group--home--performace--container">
            <h2>Your overall performance this week</h2>
            <div className="key--stats">
                <div className="stat">
                    <p><strong>Booked avg. daily rate</strong></p>
                    <h3>$ 0</h3>
                </div>
                <div className="stat">
                    <p><strong>Stayed avg. daily rate</strong></p>
                    <h3>$ 0</h3>
                </div>
                <div className="stat">
                    <p><strong>Cancellation rate</strong></p>
                    <h3>0</h3>
                </div>
                <div className="stat">
                    <p><strong>Stayed room nights</strong></p>
                    <h3>0</h3>
                </div>
                <div className="stat">
                    <p><strong>Stayed earnings</strong></p>
                    <h3>$ 0</h3>
                </div>
                <div className="stat">
                    <p><strong>Avg. booking window</strong></p>
                    <h3>0</h3>
                </div>
                <div className="stat">
                    <p><strong>Avg. length of stay</strong></p>
                    <h3>0</h3>
                </div>
                <div className="stat">
                    <p><strong>Open / Bookable</strong></p>
                    <h3>0/1</h3>
                </div>
            </div>
            <p>Below you can find a breakdown of your properties' performance.</p>
            <div className="period--filter">
                <label htmlFor="">Filter by period</label>
                <select name="" id="">
                    <option value="">Month-to-date</option>
                    <option value="">Year-to-date</option>
                    <option value="">Last month</option>
                    <option value="">Last 3 months</option>
                </select>
            </div>
            <div className="performance--wrapper">
                <div className="performance--head">
                    <p>ID</p>
                    <p className="property">Property</p>
                    <p>Booked avg. daily rate </p>
                    <p>Stayed avg. daily rate </p>
                    <p>Cancellation rate</p>
                    <p>Stayed room nights </p>
                    <p>Stayed earnings </p>
                    <p>Review score</p>
                    <p>Hotel reservations </p>
                </div>
                {propertiesPerformanceElements}
            </div>
        </div>
    )
}