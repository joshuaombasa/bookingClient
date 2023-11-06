import React from "react";
import './overview.css'
import { BiWifi, BiBed } from 'react-icons/bi'
import { FaCocktail } from 'react-icons/fa'
import { BsFan } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { IoIosBed } from 'react-icons/io'
import { TbSmokingNo } from 'react-icons/tb'
import { NavLink } from "react-router-dom";
import { RiRestaurantLine } from 'react-icons/ri'
import { MdOutlineBathroom, MdPets, MdFamilyRestroom, MdOutlineBathtub } from 'react-icons/md'
import { FaSwimmingPool } from 'react-icons/fa'
import { LuParkingCircle } from 'react-icons/lu'
import HotelPhotos from "../../../components/hotelPhotos/HotelPhotos";
import HotelPageSearch from "../../../components/hotelPageSearch/HotelPageSearch";

export default function Overview() {
    return (
        <div className="overview--page
        ">
            <div className="overview--page--container">
                <div className="section--one">
                    <div className="top">
                        <div className="search--section">
                            <HotelPageSearch />
                        </div>
                        <div className="over-view--head">
                            <HotelPhotos />
                        </div>
                    </div>
                    <div className="middle">
                        <div className="ammenities--sample">
                            <div className="ammenities--icon-container">
                                <FaSwimmingPool className="icon" />
                                <span>Indoor swimming pool</span>
                            </div>
                            <div className="ammenities--icon-container">
                                <RiRestaurantLine className="icon" />
                                <span>Restaurant</span>
                            </div>
                            <div className="ammenities--icon-container">
                                <MdOutlineBathroom className="icon" />
                                <span>Private bathroom</span>
                            </div>
                            <div className="ammenities--icon-container">
                                <LuParkingCircle className="icon" />
                                <span>Free parking</span>
                            </div>
                            <div className="ammenities--icon-container">
                                <BiWifi className="icon" />
                                <span>Free WiFi</span>
                            </div>
                            <div className="ammenities--icon-container">
                                <BsFan className="icon" />
                                <span>Air conditioning</span>
                            </div>
                            <div className="ammenities--icon-container">
                                <MdPets className="icon" />
                                <span>Pets allowed</span>
                            </div>
                            <div className="ammenities--icon-container">
                                <MdFamilyRestroom className="icon" />
                                <span>Family rooms</span>
                            </div>
                            <div className="ammenities--icon-container">
                                <TbSmokingNo className="icon" />
                                <span>Non-smoking rooms</span>
                            </div>
                            <div className="ammenities--icon-container">
                                <MdOutlineBathtub className="icon" />
                                <span>Bath</span>
                            </div>
                            <div className="ammenities--icon-container">
                                <FaCocktail className="icon" />
                                <span>Bar</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom--section">
                        <div className="details">
                            <div className="descriptions">
                                <p>Located 9.7 km from the United States Air Force Academy, this hotel boasts an on-site bar and grill. Free WiFi and a daily hot breakfast with omelets and waffles is included.</p>
                                <p>A cable satellite TV is offered in each air-conditioned room at The Academy Hotel Colorado Springs. For convenience, each room includes a refrigerator and a microwave. Pet-friendly rooms are also available.</p>
                                <p>Offering a varied menu featuring fresh American Cuisine in a casual atmosphere, Falcon’s Bar & Grill is located at Colorado Springs Academy Hotel. Guests can enjoy a game of billiards, throw darts or watch sports on TV at Falcon’s, which offers daily Happy Hour specials.</p>
                                <p>A 24-hour reception greets guests of The Academy Hotel. Guests can work out in the on-site fitness centre or indoor pool. A business centre with fax and photocopying services is available.</p>
                                <p>Chapel Hills Mall is 1.9 km away from this hotel. The Garden of the Gods is 12 km away.</p>
                                <p>Couples particularly like the location — they rated it 8.9 for a two-person trip.</p>
                            </div>
                            <div className="popular--facilities">
                                <h3>Most popular facilities</h3>
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
                        </div>
                        <div className="highlights">
                            <h3>Property highlights</h3>
                            <h4>Perfect for a 1-night stay!</h4>
                            <div className="location flat">
                                <ImLocation className="icon" />
                                <p>Top location: Highly rated by recent guests (8.9)</p>
                            </div>
                            <div className="beddding flat">
                                <BiBed className="icon" />
                                <p>Want a great night's sleep? This hotel was highly rated for its very comfy beds.</p>
                            </div>
                            <h4>Breakfast info</h4>
                            <p>American</p>
                            <div className="parking flat">
                                <LuParkingCircle className="icon" />
                                <span>FREE parking!</span>
                            </div>
                            <button className="reserve--btn">Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}