import React from "react";
import './ratingCountGraph.css'

export default function RatingCountGraph() {
    const ratingCounts = [
        { rating: '1', count: '45' },
        { rating: '2', count: '30' },
        { rating: '3', count: '20' },
        { rating: '4', count: '15' },
        { rating: '5', count: '25' },
        { rating: '6', count: '40' },
        { rating: '7', count: '60' },
        { rating: '8', count: '52' },
        { rating: '9', count: '90' },
        { rating: '10', count: '70' }
    ];

    

    function getLargestCount() {
        let bigValue = 0

        for (let i = 0; i < ratingCounts.length; i++) {
            let count = parseInt(ratingCounts[i].count, 10)
            if (count > bigValue) {
                bigValue = count
            }
        }

        if (bigValue < 1000) {
            return Math.ceil(bigValue / 100) * 100
        } else {
            return Math.ceil(bigValue / 1000) * 1000
        }

    }

    const bigLevel = getLargestCount()

    function getLevels() {
        const levels = [0]
        const stepSize = bigLevel / 10
        let stepZero = 0

        for (let i = 0; i < 10; i++) {
            levels.unshift(stepZero + stepSize)
            stepZero = stepZero + stepSize
        }

        return levels
    }

    const levels = getLevels()

    const levelElements = levels.map(item => (
        <div className="level--line" key={item}>
            <p>{item}</p>
            <span></span>
        </div>
    ))


    function getRatingHeight(count) {
        const pixelValue = (count/bigLevel) * 300
        return {
            height: `${pixelValue}px`
        }
    } 

    const ratingColumnBars = ratingCounts.map(item => (
        <div key={item.rating} className="ratingColumnBar--parent">
            <div className="columnBar">
                <span style={getRatingHeight(item.count)}></span>
            </div>
            <p>{item.rating}</p>
        </div>
    ))

    return (
        <div className="ratingCountGraph--container">
            <div className="level--elements--parent">
                {levelElements}
                <div className="columns--container">
                    {ratingColumnBars}
                </div>
            </div>
        </div>
    )
}