import React from "react";
import "./Treebo.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

export default function Traveller() {
  return (
    <>
      <div className="bnav-div">
        <div className="blogo-div">
          <img
            src="https://myhq.s3.amazonaws.com/benefits/5b12476089ea91744dd511f1.png"
            alt="blogo"
          />
        </div>

        <div className="bicon-div">
          <h3>
            <FaComment />
          </h3>
          <p className="bsupport">Support</p>
          <h3>
            <FaPhoneAlt />
          </h3>
          <p>Login</p>
        </div>
      </div>

      <div className="bdetail-parent-div">
        <div className="bdetail-div1">
          <div className="b-view-detail-div">
            <input type="checkbox" />
            <div className="b-headings-div1">
              <h3>VIEW PLAN</h3>
              <p>You have selected a Refundable plan.</p>
            </div>
            <button>EDIT</button>
          </div>
          <hr/>
        </div>
        
        <div className="bdetail-div2"></div>
      </div>
    </>
  );
}
