import React, { useState } from 'react';
import "./Searchbar.css"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


const Searchbar = () => {

 const [searchText,setsearchText]=useState("");
 const [checkInDate, setCheckInDate] = useState(new Date());
 const [checkOutDate, setCheckOutDate] = useState(new Date());

    return (
        <div className="searchbar-holder">
            <div className="row">
                <div className="test">
                    <div>
                        <div className="wrapper_1">
                            <div className="all">All Stays</div>
                            <div className=" all hotel">Hotel</div>
                            <div className="all appr">Hotel/Appartment</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="wrapper_2">
                                <div className="inp-holder-1">

                                    <div className="icon"><img src="https://cdn-icons-png.flaticon.com/512/67/67347.png" alt="map-pointer" /></div>
                                    <div className="inputbox-1">
                                        <input type="text" placeholder="Enter a hotel name or destination"
                                        value={searchText}
                                        onChange={(e)=>setsearchText(e.target.value)}
                                         />
                                    </div>
                                    <div className="buttonbox"><button
                                     onClick={()=>setsearchText("")}
                                    >&times;</button></div>

                                </div>
                                <div className="inp-holder-2">
                                    <div className="icon"><img src="https://cdn-icons-png.flaticon.com/128/2948/2948088.png" alt="map-pointer" /></div>
                                    <div className="datepicker-holder">
                                    <div className="datepicker-1"><div>Check In</div><div><DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} /></div></div>
                                    <div className="datepicker-2"><div>Check Out</div><div><DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} /></div></div>
                                    </div>
                                </div>
                                <div className="inp-holder-3">
                                    <div className="icon"><img src="https://img-premium.flaticon.com/png/512/1358/premium/1358015.png?token=exp=1632859619~hmac=5c758bc5343a05f6e24a1d83d018802c" alt="map-pointer" /></div>
                                    <div className="add-on"><div>1 room</div><div>2 Guest</div></div>
                                    <div className="search-btn"><button>Search</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="wrapper_3">
                            <div className="heading"><h4>We compare multiple booking site once</h4></div>
                            <div className="images-holder">
                                <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/395.png" alt="img" />
                                <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/452.png" alt="img" />
                                <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/626.png" alt="img" />
                                <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/2564.png" alt="img" />
                                <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/14.png" alt="img" />
                                <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/634.png" alt="img" />
                                <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/2452.png" alt="img" />
                                <p>100+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Searchbar }