import React from "react";
import './rules.css'
import { ImEnter, ImExit } from 'react-icons/im'
import { BsInfoCircle, BsCreditCard2Back } from 'react-icons/bs'
import { BiBed } from 'react-icons/bi'
import { MdOutlineFamilyRestroom, MdOutlinePets } from 'react-icons/md'
import { TbBabyCarriage } from 'react-icons/tb'
import { PiPersonLight } from 'react-icons/pi'
import { HiUserGroup } from 'react-icons/hi'
import { FaCcMastercard } from 'react-icons/fa'

export default function Rules() {
    return (
        <div className="rules--page">
            <div className="rules--page--container">
                <h2>House rules</h2>
                <p>Holiday Inn Express & Suites Colorado Springs Central, an IHG Hotel takes special requests - add in the next step!</p>
                <div className="rules--outine">
                    <div className="checkin area">
                        <div className="topic">
                            <span><ImEnter className='icon' /></span>
                            <p>Check-in</p>
                        </div>
                        <div className="text">
                            <p>From 15:00</p>
                            <p className="faint">Guests are required to show a photo identification and credit card upon check-in</p>
                        </div>
                    </div>
                    <div className="check--out area">
                        <div className="topic">
                            <span><ImExit className='icon' /></span>
                            <p>Check-out</p>
                        </div>
                        <div className="text">
                            <p>Until 12:00</p>
                        </div>
                    </div>
                    <div className="cancellation area">
                        <div className="topic">
                            <span><BsInfoCircle className='icon' /></span>
                            <p>Cancellation/prepayment</p>
                        </div>
                        <div className="text">
                            <p>Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.</p>
                        </div>
                    </div>
                    <div className="children--and--beds area">
                        <div className="topic">
                            <span><MdOutlineFamilyRestroom className='icon' /></span>
                            <p>Children and beds</p>
                        </div>
                        <div className="text">
                            <p><strong>Child policies</strong></p>
                            <p>Children of any age are welcome.</p>
                            <p>Children aged 18 years and above are considered adults at this property.</p>
                            <p>To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.</p>
                            <p><strong>Cot and extra bed policies</strong></p>
                            <div className="two--and--below">
                                <p>0 - 2 years</p>
                                <div className="bed">
                                    <span><BiBed className='icon'/>Extra bed upon request</span>
                                    <p>US$0 per child, per night</p>
                                </div>
                                <div className="cot">
                                    <span><TbBabyCarriage className='icon'/>Cot upon request</span>
                                    <p>US$0 per child, per night</p>
                                </div>
                            </div>
                            <div className="three--and--above">
                                <p>3+ years</p>
                                <div className="bed">
                                    <span><BiBed className='icon'/>Extra bed upon request</span>
                                    <p>US$0 per child, per night</p>
                                </div>
                            </div>
                            <p>The number of extra beds and cots allowed is dependent on the option you choose. Please check your selected option for more information.</p>
                            <p>All cots and extra beds are subject to availability.</p>
                        </div>
                    </div>
                    <div className="age--restriction area">
                        <div className="topic">
                            <span><PiPersonLight className='icon' /></span>
                            <p>Age restriction</p>
                        </div>

                        <div className="text">
                            <p>The minimum age for check-in is 21</p>
                        </div>
                    </div>
                    <div className="pets area">
                        <div className="topic">
                            <span><MdOutlinePets className='icon' /></span>
                            <p>Pets</p>
                        </div>
                        <div className="text">
                            <p>Pets are not allowed.</p>
                        </div>
                    </div>
                    <div className="groups area">
                        <div className="topic">
                            <span>< HiUserGroup className='icon' /></span>
                            <p>Groups</p>
                        </div>
                        <div className="text">
                            <p>When booking more than 6 rooms, different policies and additional supplements may apply.</p>
                        </div>
                    </div>
                    <div className="cards area">
                        <div className="topic">
                            <span><BsCreditCard2Back className='icon' /></span>
                            <p>Cards accepted at this hotel</p>
                        </div>
                        <div className="text">
                            <span>
                                <FaCcMastercard className='icon' />
                                <FaCcMastercard className='icon' />
                                <FaCcMastercard className='icon' />
                                <FaCcMastercard className='icon' />
                            </span>
                            <p>Holiday Inn Express & Suites Colorado Springs Central, an IHG Hotel accepts these cards and reserves the right to temporarily hold an amount prior to arrival.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}