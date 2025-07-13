import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image */}
        <div>
          <Image src="/images/a.png" width={800} height={800} alt="image" />
        </div>

        {/* Right Side - Text Content */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12">
            We deliver our products as fast as superman can do
          </h1>

          <p className="mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            recusandae doloremque odio hic tempora, facilis distinctio libero
            tenetur minus accusamus reiciendis quod vero modi, expedita alias
            voluptates ducimus! Magnam, molestiae.
          </p>

          {/* Feature 1 */}
          <div className="mt-8 flex items-start space-x-6">
            <p className="text-3xl md:text-5xl opacity-40 font-bold">01</p>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold">
                Easy to use application
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
                We are driven beyond just finishing the projects. We want to find
                solutions using our website & apps
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="mt-8 flex items-start space-x-6">
            <p className="text-3xl md:text-5xl opacity-40 font-bold">02</p>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold">
                We are driven beyond the application
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
                We are driven beyond just finishing the projects. We want to find
                solutions using our website & apps
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="mt-8 flex items-start space-x-6">
            <p className="text-3xl md:text-5xl opacity-40 font-bold">03</p>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold">
                100% reliable with privacy
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
                We are driven beyond just finishing the projects. We want to find
                solutions using our website & apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
