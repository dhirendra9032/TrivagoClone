import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="parent-div">
        <div className="wrap">
          <div className="child-div-1">
            <p>
              Want to receive exclusive hotel offers? Subscribe to our
              newsletter!
            </p>
            <input type="text" placeholder="Email address"></input>
            <button>Subscribe</button>
          </div>
          <div className="line-div">
            <hr class="line"></hr>
          </div>
          <div className="child-div-2">
            <p>trivago N.V., Kesselstraße 5 – 7, 40221 Düsseldorf, Germany</p>
            <div className="dropdown">
              <select className="dropbtn">
                <br />
                {/* <i class="fas fa-angle-down" style={{color:"white"}}></i> */}
                <option>Argentina</option>
                <option>Austrlia</option>
                <option>Brasil</option>
                <option>Canada</option>
                <option>Chile</option>
                <option>Colombia</option>
                <option>Denmark</option>
                <option>Destuch</option>
                <option
                  style={{
                    label: (
                      <div>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png "
                          alt="lo"
                        />
                      </div>
                    ),
                  }}
                >
                  India
                </option>
                <option>Indonesia</option>
                <option>Ireland</option>
                <option>Hungary</option>
                <option>Malayisa</option>
                {/* <option>Newzeland</option>
                <option>Germany</option>
                <option>UAE</option>
                <option>United Kingdom</option>
                <option>Dubai</option>
                <option>France</option>
                <option>Italy</option> */}
              </select>
            </div>
          </div>
          <div className="icons">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfVpCp3tvHWJStpWwFSZaAq4UhL_lDM8g_8Zn5cdQwZwy12r8KBN215k4R62s3dUkf1PM&usqp=CAU"
              alt="icons"
            />
            <img
              src="data:image/png;base64,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"
              alt="icons"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9SsdJIfbMi6X17tX-pFT_Fxiutx_hVZflw&usqp=CAU"
              alt="icons"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wmY7OsY5cyn1hspo3GUjLLCFpijhgWWlWA&usqp=CAU"
              alt="icons"
            />
            <img
              src="data:image/png;base64,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"
              alt="icons"
            />
          </div>
          <div className="child-div-3">
            <div className="child-div-3--divs">
              <p>Company</p>
              <p>Jobs</p>
              <p>Press</p>
              <p>Investor Relations</p>
            </div>
            <div className="child-div-3--divs">
              <p>Mobile apps - searching on the go</p>
              <p>trivago Business Studio</p>
            </div>
            <div className="child-div-3--divs">
              <p>Help</p>
              <p>Learn how trivago works</p>
              <p>Terms and Conditions</p>
              <p>Legal Information</p>
              <p>Privacy Notice</p>
              <p>Site Map</p>
            </div>
          </div>
          <div className="child-div-4">
            <h1>trivago</h1>
          </div>
          <div className="child-div-5">
            <p>Copyright 2021 trivago | All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
