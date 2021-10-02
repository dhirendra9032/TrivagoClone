import React from 'react'
import "./paymentCard.css"


const PaymentCard = () => {
    return (
        <div>

            <nav className="navbar navbar-light bg-light">
                <div>

                    <img src="http://www.tnhglobal.com/wp-content/uploads/2018/08/goibibo.png" alt="agoda"  />

                </div>
            </nav>

            <div className="container">
                <div style={{ width: "50%" }}>
                    <div className="form-container">
                        <div className="head"><button>1</button><h3>Enter your details</h3>
                         <div className="pos">
                         <div className="overflow"></div>
                         </div>
                        </div>
                        <div className="form-data">
                            <div><h5>We will use this details to share your booking information</h5></div>
                            <form className="form-input-holder">
                                <div>
                                    <input type="text" placeholder="Full Name" />
                                    <input type="text" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Mobile No" />
                                    <input className="inputbox-4" type="submit" value="Proceed" />
                                </div>
                                <button className="inputbox-5" >Pay with card</button>
                            </form>
                        </div>
                    </div>
                    <div className=" form-container ratingBox">
                        <div className="rating-5">
                            <div className="space-right">5 &#9733;</div>
                            <div className="progress">
                                <div className="bar-1"></div>
                            </div>
                        </div>
                        <div className="rating-5">
                            <div className="space-right">4 &#9733;</div>
                            <div className="progress">
                                <div className="bar-2"></div>
                            </div>
                        </div>
                        <div className="rating-5">
                            <div className="space-right">3 &#9733;</div>
                            <div className="progress">
                                <div className="bar-3"></div>
                            </div>
                        </div>
                        <div className="rating-5">
                            <div className="space-right">2 &#9733;</div>
                            <div className="progress">
                                <div className="bar-4"></div>
                            </div>
                        </div>
                        <div className="rating-5">
                            <div className="space-right">1 &#9733;</div>
                            <div className="progress">
                                <div className="bar-5"></div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Hotel Detail Section*/}

                <div className="detail-container">
                    <div className="detail-box">
                        <div className="box-1">
                            <div>
                                <div style={{ width: "100%" }}><h5>Hotel Name Lorem ipsum .</h5></div>
                                <button>4.0</button>
                            </div>
                            <div><img src="https://images.oyoroomscdn.com/uploads/hotel_image/37/thumb/c7702d8af149b9f8.jpg" alt="img" style={{ width: "200px", height: "150px" }} /></div>
                        </div>
                        <div className="box-1">
                            <div style={{textAlign:"left"}}>date</div><span>|</span>
                            <div style={{textAlign:"right"}}>1 room, 2 Gest</div>
                        </div>
                        <div className="breakline"></div>

                        <div className="box-1">
                            <div style={{textAlign:"left"}}><h5>Room Price for 1 x gest</h5></div>
                            <div style={{textAlign:"right"}}>$1646</div>
                        </div>
                        <div className="box-1">
                            <div style={{textAlign:"left"}}><h5>Price Drop</h5></div>
                            <div style={{textAlign:"right"}}>$646</div>
                        </div>
                        <div className="box-1">
                            <div style={{textAlign:"left"}}><h5>25% coopan discount</h5></div>
                            <div style={{textAlign:"right"}}>$1646</div>
                        </div>
                        <div className="breakline"></div>
                        <div className="box-1">
                            <div style={{textAlign:"left"}}><h5>Payble amount inclusive of all taxes</h5></div>
                            <div style={{textAlign:"right"}}>$1646</div>
                        </div>
                        <div className="box-1 final-box">
                            16 People booked this hotel today
                        </div>

                       
                    </div>
                </div>
            </div>



        </div>
    )
}

export default PaymentCard
