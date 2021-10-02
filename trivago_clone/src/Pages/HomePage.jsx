import React from "react";
import { Slider } from "../Components/Slider/Slider";
import { RecentActivity } from "../Components/Recent/RecentActivity";
import LandingPage from "../Components/LandingPage/LandingPage";
import { Searchbar } from "../Components/Searchbar/Searchbar";
import Footer from "../Components/Footer/Footer";
import MainFooter from "../Components/Footer/MainFooter";
// import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <Searchbar />
      <RecentActivity />
      <Slider />
      <Footer />
      <MainFooter />
    </div>
  );
};
