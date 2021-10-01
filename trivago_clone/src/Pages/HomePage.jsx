import React from "react";
import { Slider } from "../Components/Slider/Slider";
// import Footer from "../Components/Footer/Footer";
// import { Searchbar } from "../Components/Searchbar/Searchbar";
import { RecentActivity } from "../Components/Recent/RecentActivity";
// import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar"
import Routes from "../Routes/Routes"

export const HomePage = () => {
  return (
    <div>
      <Navbar/>  
      <Routes/>
      <RecentActivity />
      <Slider />
    </div>
  );
};
