"use client";
import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import Resturant from "./Resturant";
import Category from "../Category/Category";
import HowItWorks from "../HowItWork/HowItWork";
import About from "../About/About";
import Feature from "../Feature/Feature";
import ClientReview from "../ClientReview/ClientReview";
import MobileApp from "../MobileApp/MobileApp";
import Footer from "../Footer/Footer";

import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Resturant />
      <Category />
      <HowItWorks />
      <About />
      <Feature />
      <ClientReview />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Home;
