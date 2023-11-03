import React from "react";
import './home.css'

export default function Home() {

    const propertyTypes = [
        {
            type: 'Hotels',
            id: "1",
            imgUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww"
        },
        {
            type: 'Apartments',
            id: "2",
            imgUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww"
        },
        {
            type: 'Resorts',
            id: "3",
            imgUrl: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            type: 'Villas',
            id: "4",
            imgUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGF8ZW58MHx8MHx8fDA%3D"
        }
    ]

    const PropertyTypeElements = propertyTypes.map(item => (
        <div className="category--container container--common" key={item.id}>
            <img src={item.imgUrl} alt="" />
            <h3>{item.type}</h3>
        </div>
    ))

    const kenyaDestinations = [
        {
            name: 'Daini Beach',
            propeerties: 123,
            id: '1',
            imageUrl: 'https://images.unsplash.com/photo-1529420705456-5c7e04dd043d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJlYWNofGVufDB8fDB8fHww'
        },
        {
            name: 'Mombasa',
            propeerties: 123,
            id: '2',
            imageUrl: 'https://images.unsplash.com/photo-1579005318686-5a86bbb3bf03?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9tYmFzYXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Nairobi',
            propeerties: 123,
            id: '3',
            imageUrl: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Nyali',
            propeerties: 123,
            id: '4',
            imageUrl: 'https://images.unsplash.com/photo-1570021799031-63e228162838?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnlhbGl8ZW58MHx8MHx8fDA%3D'
        },
        {
            name: 'Watamu',
            propeerties: 123,
            id: '5',
            imageUrl: 'https://images.unsplash.com/photo-1645971208076-96e003d3323d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnlhbGl8ZW58MHx8MHx8fDA%3D'
        },
        {
            name: 'Naivasha',
            properties: 123,
            id: '6',
            imageUrl: 'https://images.unsplash.com/photo-1587139268302-23ffe1f12933?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5haXZhc2hhfGVufDB8fDB8fHww'
        },

    ]

    const destinationElements = kenyaDestinations.map(item => (
        <div key={item.id} className="destination--container container--common">
            <img src={item.imageUrl} alt="" />
            <h3>{item.name}</h3>
            <p>123 properties</p>
        </div>
    ))

    const popularDestinations = [
        {
            name: 'Daini Beach',
            id: '1',
            imageUrl: 'https://images.unsplash.com/photo-1529420705456-5c7e04dd043d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJlYWNofGVufDB8fDB8fHww'
        },
        {
            name: 'Mombasa',
            id: '2',
            imageUrl: 'https://images.unsplash.com/photo-1579005318686-5a86bbb3bf03?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9tYmFzYXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Nairobi',
            id: '3',
            imageUrl: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Naivasha',
            id: '4',
            imageUrl: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Dubai',
            id: '5',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1661943659036-aa040d92ee64?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8fDA%3D'
        }
    ]

    const popularDestinationElements = popularDestinations.map(item => (
        <div className="container--common popular--destination--container">
            <img src={item.imageUrl} alt="" />
            <span>{item.name}</span>
        </div>
    ))

    const uniqueProperties = [
        {
            id: '1',
            imageUrl: 'https://images.unsplash.com/photo-1635492346164-8b77f31b4baa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb2F0aW5nJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Aqua Home',
            country: 'Japan',
            city: 'Osaka',
            rating: '6',
            reviews: '344'
        },
        {
            id: '2',
            imageUrl: 'https://images.unsplash.com/photo-1580995530287-a9581fef84f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYWRpdGlvbmFsJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Tree house',
            country: 'Thailand',
            city: 'Tuilma',
            rating: '6',
            reviews: '344'
        },
        {
            id: '3',
            imageUrl: 'https://images.unsplash.com/photo-1548003765-e4c3b57740a6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRydW1wJTIwdG93ZXJ8ZW58MHx8MHx8fDA%3D',
            name: 'Trump Tower',
            country: 'USA',
            city: 'New York',
            rating: '8',
            reviews: '344'
        },
        {
            id: '4',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1675615667583-f397d39441eb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Swifters Paradise',
            country: 'USA',
            city: 'Tennasse',
            rating: '9',
            reviews: '344'
        }
    ]

    const uniquePsElements = uniqueProperties.map(
        item => (

            <div className="unique--container">
                <img src={item.imageUrl} alt="" />
                <h3>{item.name}</h3>
                <p>{item.country}, {item.city}</p>
                <div className="ratings">
                    <p>{item.rating}</p>
                    <span 
                    className="dark--text"
                    >superb</span>
                    <span>{item.reviews} reviews</span>
                </div>
            </div>
        )
    )

    const homeGuestsLove = [
        {
            id: '1',
            imageUrl: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWVzfGVufDB8fDB8fHww',
            name: 'Ndamulelo',
            country: 'South Africa',
            city: 'Kwazulu Natal',
            rating: '6',
            reviews: '344'
        },
        {
            id: '2',
            imageUrl: 'https://images.unsplash.com/photo-1620086385485-d0bd6daa815c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlbnRob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Mnuchin highs',
            country: 'Thailand',
            city: 'Tuilma',
            rating: '6',
            reviews: '344'
        },
        {
            id: '3',
            imageUrl: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVudGhvdXNlfGVufDB8fDB8fHww',
            name: 'Trump Tower',
            country: 'USA',
            city: 'New York',
            rating: '8',
            reviews: '344'
        },
        {
            id: '4',
            imageUrl: 'https://images.unsplash.com/photo-1598902596597-728cb15eeb3f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzdGxlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D',
            name: 'Swifters Paradise',
            country: 'USA',
            city: 'Tennasse',
            rating: '9',
            reviews: '344'
        }
    ]

    const homeGuestsLoveElements = homeGuestsLove.map(
        item => (

            <div className="unique--container">
                <img src={item.imageUrl} alt="" />
                <h3>{item.name}</h3>
                <p>{item.country}, {item.city}</p>
                <div className="ratings">
                    <p>{item.rating}</p>
                    <span 
                    className="dark--text"
                    >superb</span>
                    <span>{item.reviews} reviews</span>
                </div>
                <div className="cost">
                    <span>Starting from</span>
                    <p>Ksh 45,000</p>
                </div>
            </div>
        )
    )

    return (
        <div className="home--page">
            <div className="home--page--container">
                <div className="outer-section--style">
                    <h2>Browse by property type</h2>
                    <div className="browse--by--section section--style">
                        {PropertyTypeElements}
                    </div>
                </div>
                <div className="outer-section--style">
                    <h2>Explore Kenya</h2>
                    <p>These popular destinations have a lot to offer</p>
                    <div className="contry--destinations--links section--style">
                        {destinationElements}
                    </div>
                </div>
                <div className="outer-section--style">
                    <h2>Trending destinations</h2>
                    <p>Most popular choices for travellers from Kenya</p>
                    <div className="popular--destinations--links section--style">
                        {popularDestinationElements}
                    </div>
                </div>
                <div className="outer-section--style">
                    <h2>Stay at our top unique properties</h2>
                    <p>From castles and villas to boats and igloos, we've got it all</p>
                    <div className="unique--properties">
                        {uniquePsElements}
                    </div>
                </div>
                <div className="outer-section--style">
                    <h2>Homes guests love</h2>
                    <div className="unique--properties">
                        {homeGuestsLoveElements}
                    </div>
                </div>
            </div>
        </div>
    )
}