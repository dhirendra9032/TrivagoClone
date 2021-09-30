import React from "react";
import "./AllHotels.css";

export default function AllHotels() {
  
  return (
    <>
      <div className="parent-container-allhotels">
        <div className="sort-div">
          <label>
            Sort by -
            <select name="hotels">
              <option name="Our_recomn">Our recommendations</option>
              <option name="Rating_recomn">Rating & recommendations</option>
              <option name="Distance_recomn">Distance & recommendations</option>
              <option name="Rating">Rating Only</option>
              <option name="Price">Price Only</option>
              <option name="Distance">Distance Only</option>
            </select>
          </label>
        </div>
        <div className="hotel-info-div">
          <img src="" alt="img-hotel" />

          <div className="about-hotel">
            <h3>Ramada Amritasar</h3>
            <div className="rat-div">
              <p>🧑🧑👨👨</p>
              <p>Hotel</p>
            </div>
            <div className="popular-choice">
            <p>🧑🧑</p>
              <p>Popular Choice</p>
            </div>
            <hr></hr>
            <div className="location">
            <label>
                ⨀  0.8 km to City centre
              <select name="hotels" className="hotels"></select>
            </label>          
            </div>
            <hr></hr>
            <div className="rating">
            <label>
               ⨀  Very Good (2402 reviews)
              <select name="hotels" className="hotels"></select>
            </label>          
            </div>

          </div>
          <div className="about-hotel">
             <div className="view-detail-div">
                <h4>Booking.com</h4>
                <h3>5,040</h3>
                <div className="view-detail"><h5>View Deal </h5></div>
             </div>
             <div className="agoda-price">
               <div className="agoda-price-div1">
                 <p>Hotels.com</p>
                 <h5>2,576</h5>
               </div>
               <div className="agoda-price-div2">
               <p>Our lowest price</p>
                 <h5>2,318 booking</h5>
               </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
