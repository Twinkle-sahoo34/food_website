import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  num: string;
  title: string;
  description: string;
};

const HowItWorkCard = ({ description, image, num, title }: Props) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
          alt="img"
          width={350}
          height={350}
          className="object-contain mx-auto"
        />

        {/* Rounded Pink Number */}
        <div className="w-20 h-20 rounded-full bg-pink-600 text-white text-xl font-bold flex items-center justify-center mx-auto -mt-6">
          {num}
        </div>

        {/* Title */}
        <h1 className="mt-6 text-lg sm:text-xl font-bold text-center">
          {title}
        </h1>

        {/* Description */}
        <p className="text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3 font-medium">
          {description}
        </p>

        {/* Blue Call to Action - Centered */}
        <p className="mt-4 text-base font-bold text-blue-800 dark:text-blue-400 hover:text-blue-600 transition-all duration-300 text-center">
          Start Earning &rarr;
        </p>
      </div>
    </div>
  );
};

export default HowItWorkCard;
