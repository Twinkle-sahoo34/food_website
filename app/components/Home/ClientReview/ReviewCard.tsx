import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  reviewTitle: string;
  userName: string;
  userImage: string;
  role: string;
};

const ReviewCard = ({ reviewTitle, role, userImage, userName }: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg mr-4 shadow-md">
      <h1 className="text-xl font-bold">{reviewTitle}</h1>

      <div className="mt-2 flex items-center">
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
      </div>

      <p className="mt-4 text-base font-medium text-gray-800 dark:text-gray-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque animi
        recusandae magni nobis dignissimos cupiditate, eligendi id. Voluptatum
        unde quam error pariatur explicabo! Amet beatae modi vero similique
        perspiciatis quae!
      </p>

      <p className="block w-full h-[1px] bg-gray-300 dark:bg-gray-700 mt-6 mb-6"></p>

      <div className="flex items-center space-x-4">
        <Image
          src={userImage}
          alt="image"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <h1 className="text-lg font-bold">{userName}</h1>
          <p className="text-sm sm:text-base">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
