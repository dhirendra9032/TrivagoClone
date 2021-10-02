import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 70%;
  max-width: 70%;
  /* border: 1px solid red; */
  margin: auto;
  .wrap {
    width: 90%;
    max-width: 90%;
    /* border: 1px solid red; */
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .contain {
    display: flex;
  }
  .date {
    /* border: 1px solid red; */
    max-width: 50%;
    width: 50%;
    text-align: left;
  }
  .date img {
    max-width: 15px;
    margin-right: 5px;
  }
  .stay {
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-between;
    height: 80px;
    padding: 10px;
    background-color: #f9fafa;
  }
  .staywrap {
    /* display: flex;
    flex-direction: column; */
    /* border: 1px solid red; */
    max-width: 60%;
    padding: 5px;
    /* background-color: lightgray; */
  }
  .checkin {
    /* border: 1px solid red; */
    height: 20px;
    text-align: left;
  }
  .checkin span > img {
    width: 15px;
    margin-right: 5px;
  }
  .guest {
    /* border: 1px solid red; */
    height: 20px;
    text-align: left;
  }
  .guest span img {
    width: 15px;
    margin-right: 5px;
  }
  .user img {
    width: 15px;
  }
  .place {
    /* border: 1px solid red; */
    height: 20px;
    text-align: left;
    font-weight: 500;
  }

  .containere {
    /* border: 1px solid red; */
    width: 50%;
    max-width: 50%;
    height: 130px;
    margin-bottom: 5%;
    margin-left: 1%;
  }
  .sbtn {
    /* border: 1px solid red; */
    width: 30%;
    max-width: 30%;
    height: 50px;
    margin-top: 30px;
    padding-top: 5px;
  }
  .sbtn button {
    height: 40px;
    width: 100%;
    padding: 10px;
    font-size: 15px;
    border-radius: 10px;
    /* border: 1px solid black; */
    background-color: white;
  }
  .line2 {
    width: 1.5px;
    height: 120px;
    margin-top: -2%;
    border-bottom: none;
    border-top: none;
    background: linear-gradient(to top, #e9e8e8, #a7a5a5, #f0eeee);
  }
  .dot {
    width: 8px;
    height: 8px;
    margin-top: 20px;
    /* border: 1px solid red; */
    border-radius: 100px;
    background-color: #202020;
    margin-left: -3px;
  }
  .recent {
    /* border: 1px solid red; */
    height: 50px;
    text-align: left;
    padding: 10px;
  }
`;

export const RecentActivity = () => {
  const today = new Date(),
    date = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();

  return (
    <>
      <Div>
        <div className="wrap">
          <div className="recent">
            <h3>Your recent activity</h3>
          </div>
          <div className="contain">
            <div className="line2">
              <div className="dot"></div>
            </div>
            <div className="containere">
              <div className="date">
                <span>
                  <img src="./time.png" alt="" />
                </span>
                <span>{date}</span>
              </div>
              <div className="stay">
                <div className="staywrap">
                  <div className="place">
                    <span>Patna</span>
                  </div>
                  <div className="checkin">
                    <span>
                      <img src="./calendar.png" alt="" />
                    </span>
                    <span>08-10-2021&#8212;10-11-2021</span>
                  </div>
                  <div className="guest">
                    <span>
                      <img src="./users.png" alt="" />
                    </span>
                    <span>1 Room, 2 Guests</span>
                  </div>
                </div>
                <div className="sbtn">
                  <button>Search again</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
};
