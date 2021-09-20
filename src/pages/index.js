import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar"
import Hero from "../components/HeroSection";
import { SliderData } from "../components/HeroSection/SliderData";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo } from "../components/Info/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
  
    return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero slides={SliderData} />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
