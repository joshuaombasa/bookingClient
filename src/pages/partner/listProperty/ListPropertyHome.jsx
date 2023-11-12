import React, { useState } from "react";
import './listPropertyHome.css'
import GetStartedCard from "../../../components/getStartedCard/GetStartedCard";
import { BsCheckCircle } from 'react-icons/bs'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import guestImg from '../../../assets/partnerHomePageImg.jpg'
import windowsImg from '../../../assets/windows.jpg'
import clipboard from '../../../assets/clipboard.png'
import growth from '../../../assets/growth.png'
import growth2 from '../../../assets/growth2.png'
import importFile from '../../../assets/import-file.png'
import nodes from '../../../assets/nodes.png'
import notes from '../../../assets/notes.png'
import support from '../../../assets/support.png'
import partner from '../../../assets/partner.jpg'
import { Link } from "react-router-dom";

export default function ListPropertyHome() {

    const [showQuestion, setShowQuestion] = useState(false)
    const [showProperty, setShowProperty] = useState(false)

    function toggleShowQuestion() {
        setShowQuestion(prevState => !prevState)
    }

    function toggleShowProperty() {
        setShowProperty(prevState => !prevState)
    }

    return (
        <div className="listPropertyHome--page">
            <div className="listPropertyHome--container">
                <div className="section-1">
                    <div className="heading">
                        <h1>List
                            <span className="bluish">Anything</span>
                            <span>on Booking.com</span>
                        </h1>
                        <h2>Whether hosting is your side passion or full-time job, register your holiday rental on Booking.com to reach travellers worldwide</h2>
                    </div>
                    <GetStartedCard />
                </div>
                <div className="section-2">
                    <div className="">
                        <h2>Reach a unique global customer base</h2>
                        <div className="stats--parent">
                            <div className="stats">
                                <h1>2/3</h1>
                                <p>of holiday rental guests return to book with us again</p>
                            </div>
                            <div className="stats">
                                <h1>48%</h1>
                                <p>of nights booked on Booking.com in 2022 were for international stays</p>
                            </div>
                            <div className="stats">
                                <h1>33%</h1>
                                <p>of holiday rental customers are Genius loyalty level 2 or 3 who tend to spend more per booking</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-3">
                    <div className="">
                        <div className="checks">
                            <h2>Get quality bookings quickly</h2>
                            <div className="check">
                                <span><BsCheckCircle className="icon" /></span>
                                <p>Your review scores on other travel websites are converted and displayed on your property page until you receive your first Booking.com guest review</p>
                            </div>
                            <div className="check">
                                <span><BsCheckCircle className="icon" /></span>
                                <p>Stand out in search results with the ‘New to Booking.com’ label on your property</p>
                            </div>
                            <div className="check">
                                <span><BsCheckCircle className="icon" /></span>
                                <p>Our listing strength checklist helps you complete your property setup to attract more guests</p>
                            </div>
                            <div className="check">
                                <span><BsCheckCircle className="icon" /></span>
                                <p>Get discovered quickly with our innovative Quality Rating system</p>
                            </div>
                            <div className="check">
                                <span><BsCheckCircle className="icon" /></span>
                                <p>Sell up to 30% more nights with the Smart Flex Reservations programme, which adds flexibility to some of your existing cancellation policies to attract more guests. If a guest cancels, we’ll look for a replacement</p>
                            </div>
                        </div>
                        <img src={guestImg} alt="" />
                    </div>
                </div>
                <div className="section-4">
                    <div className="">
                        <img src={windowsImg} alt="" />
                        <div className="checks">
                            <h2>Maintain full control over your property and finances</h2>
                            <div className="check">
                                <span><BsCheckCircle className="icon" /></span>
                                <p>For extra reassurance, we’ll facilitate damage payment requests on your behalf in case of damage up to €/$/£500</p>
                            </div>
                            <div className="check">
                                <span><BsCheckCircle className="icon" /></span>
                                <p>Receive protection against liability claims from guests and neighbours up to €/£/$1,000,000 for every reservation</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-5">
                    <div className="">
                        <h2>Manage your property with ease</h2>
                        <div className="goodies--cards">
                            <div className="goodie">
                                <img src={notes} alt="" />
                                <h3>Quick registration</h3>
                                <p>Set up your property listing in 15 minutes</p>
                            </div>
                            <div className="goodie">
                                <img src={importFile} alt="" />
                                <h3>Easy property import</h3>
                                <p>Quickly import your property information from other travel sites</p>
                            </div>
                            <div className="goodie">
                                <img src={support} alt="" />
                                <h3>Robust support</h3>
                                <p>We offer customer support in 45 languages and provide partners with Pulse, our booking management app</p>
                            </div>
                            <div className="goodie">
                                <img src={growth} alt="" />
                                <h3>Secure growth</h3>
                                <p>Get guaranteed payouts and fraud protection with Online Payments by Booking.com</p>
                            </div>
                            <div className="goodie">
                                <img src={nodes} alt="" />
                                <h3>Streamlined work</h3>
                                <p>Manage your property efficiently by working with one of our 600+ trusted Connectivity providers</p>
                            </div>
                            <div className="goodie">
                                <img src={clipboard} alt="" />
                                <h3>Transparent commission</h3>
                                <p>Understand what and whom you’re paying with the transparent commission</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-6">
                    <div className="">
                        <h2 className="semi-title">Meet Patricia</h2>
                        <p>See why she loves renting out her property on Booking.com</p>
                        <div className="partner--review">
                            <img src={partner} alt="" />
                            <div className="review--text">
                                <h2 className="semi-title">“Booking.com is one of the platforms that help us maintain a high occupancy level. This is mainly due to the instant booking model and the ability to resell cancelled rooms more easily.”</h2>
                                <div className="review--owner">
                                    <h3>Patricia González</h3>
                                    <p>Alterhome, Madrid</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-7">
                    <div className="">
                        <h2 className="semi-title">Your questions answered</h2>
                        <div className="faq--container">
                            <div className="property-faq">
                                <div
                                    className="question--head"
                                    onClick={() => toggleShowQuestion()}
                                >
                                    <h3 className="question">What happens if my property is damaged by a guest?</h3>
                                    <span>{showQuestion ?
                                        <IoIosArrowUp className="icon" /> :
                                        <IoIosArrowDown className="icon" />}
                                    </span>
                                </div>
                                {showQuestion && <p>Property owners can request damage deposits from guests. Deposits help cover any potential damage caused by a guest, offering some reassurance that your property will be treated respectfully. If anything goes wrong, it can be reported to our team through our misconduct reporting feature.</p>}
                            </div>
                            <div className="property-faq">
                                <div
                                    className="question--head"
                                    onClick={() => toggleShowProperty()}
                                >
                                    <h3 className="question">When will my property go online?</h3>
                                    <span>{showProperty ?
                                        <IoIosArrowUp className="icon" /> :
                                        <IoIosArrowDown className="icon" />}
                                    </span>
                                </div>
                                {showProperty && <p>Once you’ve finished creating your listing, you can open your property for bookings on our site. We may ask you to verify your property before you can start accepting bookings, but you can use this time to get familiar with our extranet and get prepared for your first guests.</p>}
                            </div>
                        </div>
                        <p>Still have questions? Find answers to all your questions on our FAQ</p>

                    </div>
                </div>
                <div className="section-8">
                    <div className="">
                        <div className="top--area">
                            <h1 className="">Sign up and start welcoming guests today!</h1>
                            <GetStartedCard/>
                        </div>
                        <div className="links--container">
                            <div className="link--parent">
                                <h3>Discover</h3>
                                <Link>Trust and Safety</Link>
                            </div>
                            <div className="link--parent">
                                <h3>Useful links</h3>
                                <Link>Extranet</Link>
                                <Link>Pulse for Android</Link>
                                <Link>Pulse for iOS</Link>
                            </div>
                            <div className="link--parent">
                                <h3>Help and communities</h3>
                                <Link>Partner Help</Link>
                                <Link>Partner Community</Link>
                                <Link>How-to videos</Link>
                            </div>
                        </div>
                        <hr />
                        <div className="other--links">
                            <div className="major--links">
                                <Link>About Us</Link>
                                <span> | </span>
                                <Link>Privacy and Cookie Statement</Link>
                            </div>
                            <p className="footer--text">© Copyright Booking.com 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}