import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import Portpolio from "./PortPolio";
import Banner from "./Banner";

const MainPage = () => {
  return (
    <div>
      <Banner />
      <Portpolio />
      <Hero />
      <Contact />
    </div>
  );
};

export default MainPage;
