import React from "react";
import './groupReviews.css'
import RatingCountGraph from "../../../../components/ratingCountGraph/RatingCountGraph";
import GroupReviewsList from "../../../../components/groupReviewsList/GroupReviewsList";
import { reviewCategories } from "../../../../utils/data";
import { useSearchParams } from "react-router-dom";


export default function GroupReviews() {

    const [searchParams, setSearchParams] = useSearchParams()

    function generateNewSearchParams(key, value) {
        const sp = new URLSearchParams(searchParams)
        if (value !== null) {
            sp.set(key, value)
        } else {
            sp.delete(key)
        }
        setSearchParams(sp)
    }

    const filterByValue = searchParams.get('type')

    


    function generateReviewCategoryGraph(rating) {
        const ratingFraction = (rating / 10)
        const barWidth = 500 * ratingFraction

        return (
            <div className="reviewCategoryGraph">
                <span style={{ width: `${barWidth}px` }}></span>
            </div>
        )
    }



    const categoryScoreElements = reviewCategories.map(item => (
        <div key={item.category}>
            <div className="">
                <div className="review--values">
                    <p>{item.category}</p>
                    <p>{item.rating}</p>
                </div>
                <div className="review--graphs">
                    {generateReviewCategoryGraph(item.rating)}
                </div>
            </div>
        </div>
    ))



    return (
        <div className="groupReviews--page">
            <div className="groupReviews--page--container">
                <div className="review--categories--part">
                    <h3>Categories</h3>
                    <div className="categoryScoreElements">
                        {categoryScoreElements}
                    </div>
                </div>
                <div className="guest--count-per--rating">
                    <h3>Review count per guest rating</h3>
                    <RatingCountGraph />
                </div>
                <div className="reviews--list--container">
                    <div className="score--filter">
                        <h3>Select a score</h3>
                        <div className="">
                            <input type="radio" name="" id="" />
                            <label htmlFor="">All review scores</label>
                        </div>
                        <div className="">
                            <input type="radio" name="" id="" />
                            <label htmlFor="">Wondefull: 9+(7)</label>
                        </div>
                        <div className="">
                            <input type="radio" name="" id="" />
                            <label htmlFor="">Good: 8.0+(4)</label>
                        </div>
                        <div className="">
                            <input type="radio" name="" id="" />
                            <label htmlFor="">Average: 5-7(3)</label>
                        </div>
                    </div>
                    <div className="reviews--list--parent">
                        <div className="filter--nav">
                            <button
                                onClick={() => generateNewSearchParams('type', null)}
                            >All reviews</button>
                            <button
                                onClick={() => generateNewSearchParams('type', 'comments')}
                            >With comments</button>
                            <button
                                onClick={() => generateNewSearchParams('type', 'replies')}
                            >Without replies</button>
                        </div>
                        <div className="reviews--list">
                            <GroupReviewsList filterByValue={filterByValue}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}