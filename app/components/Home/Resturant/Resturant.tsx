import React from "react"
import ResturantCard from "./ResturantCard";

const Resturant = () => {
  return (
    <div className="pt-16 pb-16">
        <div className="text-xl sm:text-2xl text-center font-extrabold">
            Available Resturant Nearby Area
        </div>
        <div className="w=[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 mt-14">
<div data-aos="fade-up" data-aos-anchor-placement="top-center">
      <ResturantCard
      image="/images/r1.jpg"
      title="Mouth-Saviour-Fantastic"
      />
</div>


<div  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
      <ResturantCard
      image="/images/r2.jpg"
      title="Chipotle Mexican Grill (2675 Geary Boulevard)"
      />
</div>


<div  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
      <ResturantCard
      image="/images/r3.jpg"
      title="McDonnald's Burger (Fillmore)"
      />
</div>

<div  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
      <ResturantCard
      image="/images/r4.jpg"
      title="The Baked Bear San Francisco"
      />
</div>
<div  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
      <ResturantCard
      image="/images/r5.jpg"
      title="Shack Shack (3060 Fillmore Street)"
      />
</div>
<div  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
      <ResturantCard
      image="/images/r6.jpg"
      title="Chubby Noodle Chinese Takeout"
      />
</div>
</div>
<div className="mt-16 text-center">
<button className="px-9 py-2.5 sm:px-12 sm:py-3.5 cursor-pointer rounded-full font-bold text-base
sm-text-lg bg-cyan-700 text-white dark:text-black hover:bg-cyan-950  transition-all duration-300
dark:bg-cyan-300 dark:hover:bg-cyan-200">
    Discover More &rarr;
    </button>
    </div>
    </div>
  );
};

export default Resturant;