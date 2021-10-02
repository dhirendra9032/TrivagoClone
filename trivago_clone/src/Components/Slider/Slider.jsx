import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import SliderStyle from "./SliderStyle";
import styled from "styled-components";

const Wrap = styled.div`
  .containero {
    width: 80%;
    margin: auto;
  }
  .line3 {
    width: 88%;
    height: 1px;
    background-color: lightgrey;
    margin: auto;
  }
  .chngBtn {
    width: 55%;
    margin-left: 15%;
    display: flex;
    justify-items: flex-start;
    align-items: flex-start;
    font-size: 15px;
  }
  .chngBtn button {
    border: none;
    background: none;
    padding: 10px;
  }
  .chngBtn button:hover {
    background-color: #e7e4e4;
    color: #007cce;
    border-bottom: 1px solid #007cce;
  }
  .rec-pagination {
    border-radius: 1px solid black;
    background-color: white;
  }
  .rec-dot {
    border-radius: 1px solid black;
    display: none;
    background-color: white;
  }
  .rec-arrow {
    width: 35px;
    height: 35px;
    min-width: 35px;
    line-height: 35px;
    font-size: 1.5em;
    text-align: center;
    border-radius: 50px;
  }

  .rec-arrow:hover {
    background-color: white;
  }
`;

const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 550,
    itemsToShow: 2,
    itemToScroll: 2,
  },
  {
    width: 768,
    itemsToShow: 4,
  },
  {
    width: 1200,
    itemsToShow: 4,
  },
];

export const Slider = () => {
  const data = [
    {
      id: 1,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/98/64981_v33.jpeg",
      city: "Hotels in Mumbai",
      quantity: "11,123",
      avg: "3424",
    },
    {
      id: 2,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/96/64967_v41.jpeg",
      city: "Hotels in Delhi",
      quantity: "15,679",
      avg: "3,360",
    },
    {
      id: 3,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/97/64975_v42.jpeg",
      city: "Hotels in Bengaluru",
      quantity: "9,003",
      avg: "4,178",
    },
    {
      id: 4,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/15/07/15075_v24.jpeg",
      city: "Hotels in Dubai",
      quantity: "21,182",
      avg: "14,964",
    },
    {
      id: 5,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/98/64989_v42.jpeg",
      city: "Hotels in Jaipur",
      quantity: "6,425",
      avg: "2,714",
    },
    {
      id: 6,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/22/23/22235_v18.jpeg",
      city: "Hotels in Paris",
      quantity: "47,110",
      avg: "16,374",
    },
  ];

  const data2 = [
    {
      id: 1,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/93/64932_v75.jpeg",
      city: "Hotels in Goa",
      quantity: "28,433",
      avg: "4,366",
    },
    {
      id: 2,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/93/64939_v73.jpeg",
      city: "Hotels in Kerla",
      quantity: "15,679",
      avg: "3,360",
    },
    {
      id: 3,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/94/64948_v75.jpeg",
      city: "Hotels in Pondicherry",
      quantity: "3,210",
      avg: "2,293",
    },
    {
      id: 4,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/15/06/15068_v21.jpeg",
      city: "Hotels in Dubai",
      quantity: "21,182",
      avg: "14,964",
    },
    {
      id: 5,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/93/64931_v73.jpeg",
      city: "Hotels in Delhi",
      quantity: "15,683",
      avg: "3,360",
    },
    {
      id: 6,
      url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/95/64950_v73.jpeg",
      city: "Hotels in Rajasthan",
      quantity: "21,193",
      avg: "3,470",
    },
  ];

  const [istrue, setIsTrue] = useState(data);

  const handleChange1 = () => {
    setIsTrue(data);
  };
  const handleChange2 = () => {
    setIsTrue(data2);
  };
  return (
    <>
      <Wrap>
        <div className="chngBtn">
          <button onClick={handleChange1}>Top Cities</button>
          <button onClick={handleChange2}>Top Destinations</button>
        </div>
        <div className="containero">
          <div className="line3"></div>
          <Carousel
            className="caro"
            itemPadding={[5]}
            breakPoints={breakPoints}
            itemsToShow={4}
            // easing="cubic-bezier(1,.15,.55,1.54)"
            // tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
            // transitionMs={1000}
          >
            {istrue.map((item) => {
              return (
                <SliderStyle key={item.id}>
                  <img src={item.url} alt="img"></img>
                  <div className="detail">
                    <span>{item.city}</span>
                    <br />
                    <span className="name">
                      {item.quantity}
                      <span></span>Hotels
                    </span>
                    <span className="rs">
                      Avg. <img src="./Indian-Rupee-symbol.svg" alt="svg" />{" "}
                      {item.avg}
                    </span>
                  </div>
                </SliderStyle>
              );
            })}
          </Carousel>
        </div>
      </Wrap>
    </>
  );
};
