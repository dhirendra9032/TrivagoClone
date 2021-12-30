import React from "react";
import "./AllHotels.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { RatingView } from "react-simple-star-rating";
import MainFooter from "../Footer/MainFooter";
import { Link } from "react-router-dom";
import Map from "../Map/Map";
export default function AllHotels() {
  const params = useParams();
  const [city, setCity] = useState(params.location);
  const [hotel, setHotel] = useState([]);
  // const [updateData, setUpdateData] = useState([]);
  // let history = useHistory();

  useEffect(() => {
    axios.get("https://trivago-json.herokuapp.com/MainData").then((res) => {
      const arr = [];
      res.data.forEach((res) => {
        if (res.location === city) {
          arr.push(res);
        }
      });
      setHotel(arr);
    });
  }, [city]);

  // console.log(hotel);
  const handleFilter = (e) => {
    console.log(e.target.value);
    let filterdData = [];
    if (e.target.value === "rating") {
      filterdData = hotel?.slice(0).sort(function (a, b) {
        return b.review.services - a.review.services;
      });
    } else if (e.target.value === "distance") {
      filterdData = hotel?.slice(0).sort(function (a, b) {
        return a.dist - b.dist;
      });
    } else if (e.target.value === "price") {
      filterdData = hotel?.sort(function (a, b) {
        return a.price[0] - b.price[0];
      });
    } else if (e.target.value === "recommendation") {
      filterdData = hotel?.sort(function (a, b) {
        return b.star - a.star;
      });
    }
    setHotel(filterdData);
  };
  return (
    <>
      <Searchbar />
      <div className="allhotelwrap">
        <div className="parent-container-allhotels">
          <div className="sort-div">
            <label>Sort by</label>
            <select onChange={handleFilter} name="hotels">
              <option value="recommendation" name="Our_recomn">
                Our recommendations
              </option>
              <option value="rating" name="Rating_recomn">
                Rating & recommendations
              </option>
              <option value="distance" name="Distance_recomn">
                Distance & recommendations
              </option>
              <option value="rating" name="Rating">
                Rating Only
              </option>
              <option value="price" name="Price">
                Price Only
              </option>
              <option value="distance" name="Distance">
                Distance Only
              </option>
            </select>
          </div>
          {hotel.map((data) => (
            <div key={data.id} className="hotel-info-div">
              <img src={data.img[0]} alt="img-hotel" />

              <div className="about-hotel1">
                <div className="h3">
                  <h3>{data.name}</h3>
                </div>
                <div className="rat-div">
                  <RatingView ratingValue={data.star} />
                  <span className="pspan">
                    <p>Hotel</p>
                  </span>
                </div>
                <hr></hr>
                <div className="location">
                  <label>
                    ⨀ {data.dist} km to {data.address}
                    <div className="arrow">
                      <img src="/down-arrow.png" alt="arrow" />
                    </div>
                  </label>
                </div>
                <hr></hr>
                <div className="rating">
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
                  <div className="revwrap">
                    <div className="rev">
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
                    </div>
                    <div className="rnum">({data.reviewNum})</div>
                  </div>

                  <div className="arrow2">
                    <img src="/down-arrow.png" alt="arrow" />
                  </div>
                </div>
              </div>
              <div className="about-hotel">
                <div className="view-detail-div">
                  <div className="redi">
                    <p>{data.redirect}</p>
                  </div>
                  <div className="fact">
                    <div>{data.cancelation && <p> | Free Cancelation </p>}</div>
                    <div>{data.breakfast && <p> | Free BreakFast</p>}</div>
                  </div>
                  <div className="deal">
                    <div className="h3p">
                      <h3>₹{data.price[0]}</h3>
                    </div>
                    <div className="btn">
                      <Link to={`/payment/${data.id}`}>
                        <button
                          onClick={(e) => {
                            console.log(e.target);
                          }}
                        >
                          View deal
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="agoda-price">
                  <div className="agoda-price-div1">
                    <div className="hot">
                      <p>Hotels.com</p>
                    </div>
                    <div className="hotp">
                      <p>₹{data.deals[4]}</p>
                    </div>
                  </div>
                  <div className="agoda-price-div2">
                    <div className="hotlow">
                      <p>Our lowest price</p>
                    </div>
                    <div className="hotlowp">
                      <p>
                        ₹
                        {
                          (data.deals.sort(function (a, b) {
                            return a - b;
                          }),
                          data.deals[0])
                        }
                        booking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Map hotel={hotel} />
      </div>
      <MainFooter />
    </>
  );
}

const Grn = styled.div`
  background-color: rgb(0, 95, 0);
  width: 40px;
  color: white;
  height: 20px;
  margin-left: 10px;
  border-radius: 5px;
`;
