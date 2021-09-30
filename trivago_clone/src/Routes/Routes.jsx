import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Searchbar } from "../Components/Searchbar/Searchbar";
import Footer from "../Components/Footer/MainFooter";
import AllHotels from "../Components/hotels/AllHotels";
import Login from "../Components/Login/Login";
import LandingPage from "../Components/LandingPage/LandingPage"
import Signup from "../Components/Signup/Signup";


export const Routes = () => {
  return (
    <div>
      <Searchbar />
      <Switch>
        <Route exact path="/">
          <HomePage /> 
        </Route>
        <Route exact path="/hotelPage/:location">
          <AllHotels />
        </Route>
        <Route exact path="/login">
                <Login/>
                {/* hello Login */}
            </Route>
            <Route exact path="/signup">
                <Signup/>
            </Route>
            <Route exact path="/">
                <LandingPage/>
        </Route>
        <Route>
                <h1>404 Not Found</h1>
            </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};
