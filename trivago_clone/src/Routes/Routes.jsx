import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Searchbar } from "../Components/Searchbar/Searchbar";
import Footer from "../Components/Footer/MainFooter";
import AllHotels from "../Components/hotels/AllHotels";
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
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};
