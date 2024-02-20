import React from "react";
import Header from "./Header/Header";
import Hero from "./hero/Hero";
import PopularHotel from "./Hotel";
import Package from "./Packages";
import FeaturedTours from "./Tourdetail";
import Travelingoffer from "./Travelling_offers";
import Input from "./Input_detail/Input";
import Notestate from "../../../Context/Notes/Notestate";

function Home() {
  return (
    <>
      <Notestate>
        <Header />
        <Hero />
        <Input />
        <FeaturedTours />
        <Package />
        <Travelingoffer />
        <PopularHotel />
      </Notestate>
    </>
  );
}

export default Home;
