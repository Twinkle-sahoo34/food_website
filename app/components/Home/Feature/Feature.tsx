import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  { image: "/images/f1.svg", title: "Analytics Business", delay: 0 },
  { image: "/images/f2.svg", title: "Largest People", delay: 100 },
  { image: "/images/f3.svg", title: "Wide Coverage Map", delay: 200 },
  { image: "/images/f4.svg", title: "Artificial Intelligence", delay: 300 },
  { image: "/images/f5.svg", title: "Mobile Apps", delay: 400 },
  { image: "/images/f6.svg", title: "Analytics Business", delay: 500 },
];

const Feature = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Meet Our Quality Features
      </h1>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={feature.delay}
          >
            <FeatureCard image={feature.image} title={feature.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
