import React from "react";
import './promoCode.css'

export default function PromoCode () {
    return (
        <div className="PromoCode--container">
            <h3>Do you have a promo code?</h3>
            <form>
                <label htmlFor="">Enter your promo code</label>
                <input type="text" name="" id="" />
                <button>Apply</button>
            </form>
        </div>
    )
}