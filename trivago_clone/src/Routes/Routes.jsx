import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import AllHotels from "../Components/hotels/AllHotels";
import Login from "../Components/Login/Login";
import LandingPage from "../Components/LandingPage/LandingPage";
import Signup from "../Components/Signup/Signup";
import Navbar from "../Components/Navbar/Navbar";
import PaymentCard from "../Components/PaymentPage/PaymentCard";
// import Footer from "../Components/Footer/Footer";
export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/hotelPage/:location">
          <AllHotels />
        </Route>
        <Route exact path="/login">
          <Login />
          {/* hello Login */}
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/payment/:id">
          <PaymentCard />
        </Route>
        <Route>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default Routes;
