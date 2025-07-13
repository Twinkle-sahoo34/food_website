"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1// optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 124, min:764 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
};


const ClientReview = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className="text-xl sm:text-2xl text-center font-extrabold">
           What people say about us
           </h1>
        <div className="mt-16 w-[80%] mx-auto">
 <Carousel
  showDots={false}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}

>
<ReviewCard
reviewTitle="Great WORK!"
userName="jesicca"
userImage="/images/c1.png"
role="UI UX designer"
/>

<ReviewCard
reviewTitle="Great WORK!"
userName="jesicca"
userImage="/images/c2.png"
role="UI UX designer"
/>

<ReviewCard
reviewTitle="Great WORK!"
userName="jesicca"
userImage="/images/c3.png"
role="UI UX designer"
/>

</Carousel>;

        </div>
</div>
    );
    };

export default ClientReview;