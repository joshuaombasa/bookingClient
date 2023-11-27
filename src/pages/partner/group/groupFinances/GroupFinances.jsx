import React from 'react'
import { Link } from 'react-router-dom';
import './groupFinances.css'
import { RxDownload } from "react-icons/rx";

export default function GroupFinances() {

    const invoicesList = [
        {
          invoiceId: 'INV123456',
          bookingId: 'BK789012',
          guestName: 'Alice Johnson',
          checkInDate: '2023-02-15',
          checkOutDate: '2023-02-20',
          totalAmount: 300.00,
          paymentStatus: 'Paid',
        },
        {
          invoiceId: 'INV789012',
          bookingId: 'BK345678',
          guestName: 'Bob Smith',
          checkInDate: '2023-03-10',
          checkOutDate: '2023-03-15',
          totalAmount: 250.00,
          paymentStatus: 'Pending',
        },
      ];

      const inviceElements = invoicesList.map(item => (
        <div key={item.invoiceId} className="invoice--head">
            <p>{item.invoiceId}</p>
            <p>{item.bookingId}</p>
            <p>{item.guestName}</p>
            <p>{item.checkInDate}</p>
            <p>{item.checkOutDate}</p>
            <p>$ {item.totalAmount}</p>
            <Link className='action--links'>PDF <span><RxDownload /></span> | View statement </Link>
            <p>{item.paymentStatus}</p>
        </div>
      ))

    return (
        <div className="groupFinances--page">
            <div className="groupFinances--page--container">
                <h1>Invoices</h1>
                <p>We produce your invoices based on the check-out dates of your reservations.</p>
                <div className="invoices--list ">
                    <div className="invoice--search">
                        <label htmlFor="">Filter by audience:</label>
                        <select name="" id="">
                            <option value="">2023</option>
                            <option value="">2022</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                            <option value="">2019</option>
                            <option value="">2018</option>
                            <option value="">2017</option>
                            <option value="">2016</option>
                        </select>
                    </div>
                    <div className="invoice--head bold">
                        <p>InvoiceId</p>
                        <p>BookingId</p>
                        <p>GuestName</p>
                        <p>CheckInDate</p>
                        <p>CheckOutDate</p>
                        <p>TotalAmount</p>
                        <p>Actions</p>
                        <p>PaymentStatus</p>
                    </div>
                    <div className="invoice--elements--parent">
                        { inviceElements }
                    </div>
                </div>
            </div>
        </div>
    )
}