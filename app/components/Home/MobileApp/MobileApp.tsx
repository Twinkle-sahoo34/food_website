import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGooglePay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

const MobileApp = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: App Image */}
        <Image
          src="/images/app.png"
          alt="app"
          width={800}
          height={800}
          className="object-cover"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        />

        {/* Right: Content */}
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold leading-8 sm:leading-12">
            Connecting our users with iOS & Android apps. Download from iTunes &
            Play Store
          </h1>

          <p className="mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400">
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online survey building tool. We
            are driven beyond just finishing the projects. We want to find
            solutions using our website & apps.
          </p>

          {/* Download Buttons */}
          <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Link
              href="#"
              className="flex items-center gap-3 border border-gray-400 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300"
            >
              <FaApple className="text-2xl text-white" />
              <div>
                <p className="text-xs text-white">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-3 border border-gray-400 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300"
            >
              <FaGooglePay className="text-2xl text-white" />
              <div>
                <p className="text-xs text-white">Download on the</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
