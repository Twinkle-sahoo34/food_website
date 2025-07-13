import React from "react";
import HowItWorkCard from "./HowItWorkCard";

const HowItWorks = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xxl sm:text-2xl text-center font-extrabold">
        Let’s see how it works
      </h1>
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div
        data-aos="fade-right" 
               data-aos-anchor-placement="top-center" 
               data-aos-delay="0"
                >
          <HowItWorkCard
           num="01" 
           image="/images/w1.png" 
           title=" Become A Delivery Man"
           description="As a delivery driver you'll make responsible
           money-working anytime,anywhere." />
        </div>


        <div
        data-aos="fade-right" 
               data-aos-anchor-placement="top-center" 
               data-aos-delay="100">
          <HowItWorkCard 
          num="02" 
          image="/images/w2.png" 
          title="Grow Your Business With Us"
           description="Grow your business and reach new customers by partnering with us" 
           />
        </div>


        <div
        data-aos="fade-right" 
               data-aos-anchor-placement="top-center" 
               data-aos-delay="200">
          <HowItWorkCard 
          num="03" 
          image="/images/w3.png" 
          title="Become a Partner" 
           description="become a partner"/>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;