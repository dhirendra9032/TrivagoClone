import React from "react";
import "./AllHotels.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
export default function AllHotels() {
  const [hotel, setHotel] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get("http://localhost:3004/MainData").then((res) => {
      const arr = [];
      res.data.forEach((res) => {
        if (res.location === params.location) {
          arr.push(res);
        }
      });
      setHotel(arr);
    });
  }, []);

  // const r = (
  //   (hotel.review.location +
  //     hotel.review.room +
  //     hotel.review.services +
  //     hotel.review.facilities +
  //     hotel.review.vom) /
  //   5
  // ).toFixed(1);

  console.log(hotel);

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
        {hotel.map((data) => (
          <div className="hotel-info-div">
            <img src={data.img[0]} alt="img-hotel" />

            <div className="about-hotel">
              <h3>{data.name}</h3>
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
                  ⨀ {data.dist} km to {data.address}
                  <select name="hotels" className="hotels"></select>
                </label>
              </div>
              <hr></hr>
              <div className="rating">
                <label>
                  <Grn>
                    {(
                      (data.review.room +
                        data.review.location +
                        data.review.services +
                        data.review.facilities +
                        data.review.vom) /
                      5
                    ).toFixed(1)}
                  </Grn>
                  <b>
                    {(
                      (data.review.room +
                        data.review.location +
                        data.review.services +
                        data.review.facilities +
                        data.review.vom) /
                      5
                    ).toFixed(1) < 8.5
                      ? "Good"
                      : "Excellent"}
                  </b>
                  ({data.reviewNum})
                  <select name="hotels" className="hotels"></select>
                </label>
              </div>
            </div>
            <div className="about-hotel">
              <div className="view-detail-div">
                <h4>Booking.com</h4>
                <h3>5,040</h3>
                <div className="view-detail">
                  <h5>View Deal </h5>
                </div>
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
        ))}
      </div>
    </>
  );
}

const Grn = styled.div`
  background-color: rgb(0, 95, 0);
  width: 40px;
  color: white;
  border-radius: 5px;
`;
