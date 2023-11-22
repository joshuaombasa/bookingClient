import React from "react";
import { Link } from "react-router-dom";
import './footer.css'
export default function Footer() {
    const geographicals = ['Countries',
        'Regions',
        'Cities',
        'Districts',
        'Airports',
        'Hotels',
        'Places of interest']

    const propertTypes = [
        ' Homes',
        'Apartments',
        'Resorts',
        'Villas',
        'Hostels',
        'B&Bs',
        'Guest houses'
    ]

    const experiences = [
        ' Unique places to stay',
        'All destinations',
        'All flight destinations',
        'All car hire locations',
        'Discover',
        'Reviews',
        'Discover monthly stays',
        'Unpacked: Travel articles',
        'Seasonal and holiday deals',
        'Traveller Review Awards'
    ]

    const aobLinks = [
        'Coronavirus (COVID-19) FAQs',
        'About Booking.com',
        'Customer Service help',
        'Partner help',
        'Careers',
        'Sustainability',
        'Press centre',
        'Safety resource centre',
        'Investor relations',
        'Terms & Conditions',
        'Partner dispute',
        'How we work',
        'Privacy & Cookie Statement',
        'MSA Statement',
        'Corporate contact',
        'Content guidelines and reporting',
        'We Price Match'
    ]

    const services = [
        ' Car hire',
        'Flight finder',
        'Restaurant reservations',
        'Booking.com for Travel Agents'
    ]

    const geographicalsLinks = geographicals.map(item => <Link key={item}>
        {item}
    </Link>)

    const propertTypesLinks = propertTypes.map(item => <Link key={item}>
        {item}
    </Link>)

    const experiencesLinks = experiences.map(item => <Link key={item}>
        {item}
    </Link>)

    const aobLinksLinks = aobLinks.map(item => <Link key={item}>
        {item}
    </Link>)

    const servicesLinks = services.map(item => <Link key={item}>
        {item}
    </Link>)


    return (
        <section className="">
            <div className="subscription--area">
                <div className="subscrption--section--parent">
                    <div className="subscrption--section--child">
                        <h3>Save time, save money!</h3>
                        <p>Sign up and we'll send the best deals to you</p>
                        <form action="">
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Your email address"
                            />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="big--links--parent one">
                <div className="big--links--child">
                    <Link className="list--your--property--footer--link">List your property</Link>
                </div>
            </div>
            <hr />
            <div className="big--links--parent two">
                <div className="big--links--child">
                    <div className="link--list">
                        <Link>Mobile version</Link>
                        <Link>Your account</Link>
                        <Link>Make changes to your booking online</Link>
                        <Link>Customer Service help</Link>
                        <Link>Become an affiliate</Link>
                        <Link>Booking.com for Business</Link>
                    </div>
                </div>
            </div>
            <div className="small-links--parent">
                <div className="small--links--child">
                    <div className="link--topics">
                        {geographicalsLinks}
                    </div>
                    <div className="link--topics">
                        {propertTypesLinks}
                    </div>
                    <div className="link--topics">
                        {experiencesLinks}
                    </div>

                    <div className="link--topics">
                        {servicesLinks}
                    </div>
                    <div className="link--topics">
                        {aobLinksLinks}
                    </div>

                </div>
            </div>
        </section>
    )
}
