import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string; // Rename this to `icon` below if needed
};

const FeatureCard = ({ image, title }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt="icon"
        width={100}
        height={100}
        className="mx-auto object-contain"
      />
      <h1 className="mt-8 text-lg font-bold text-center">{title}</h1>
      <p className="text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3">
        We are driven beyond just finishing the projects. We want to find smart
        solutions.
      </p>
    </div>
  );
};

export default FeatureCard;
