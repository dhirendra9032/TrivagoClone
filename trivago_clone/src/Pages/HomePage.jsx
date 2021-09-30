import React from "react";
import { Slider } from "../Components/Slider/Slider";
// import Footer from "../Components/Footer/Footer";
import { Searchbar } from "../Components/Searchbar/Searchbar";
import { RecentActivity } from "../Components/Recent/RecentActivity";
export const HomePage = () => {
  return (
    <div>
      <Searchbar />
      <RecentActivity />
      <Slider />
      {/* <Footer /> */}
    </div>
  );
};
