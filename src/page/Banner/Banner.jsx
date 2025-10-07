import React from "react";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import hero from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="py-8 md:py-12">
      {/* Banner Section */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-[72px] leading-snug md:leading-[1.1] font-bold">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-sm sm:text-base md:text-[18px] text-gray-400 mt-4 md:mt-4">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center gap-4 mt-4 sm:mt-6 flex-wrap">
          <button className="btn flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <IoLogoGooglePlaystore size={20} />
            Play Store
          </button>
          <button className="btn flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <IoLogoAppleAppstore size={20} />
            App Center
          </button>
        </div>
        <div className="mt-6 sm:mt-8 flex justify-center">
          <img
            src={hero}
            alt="Hero"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="py-8 sm:py-12"
        style={{
          background:
            "linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Total Downloads */}
            <div className="text-white">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
                29.6M
              </p>
              <p className="text-gray-200 mt-1 sm:mt-2">Total Downloads</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                21% More Than Last Month
              </p>
            </div>
            {/* Total Reviews */}
            <div className="text-white">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">906K</p>
              <p className="text-gray-200 mt-1 sm:mt-2">Total Reviews</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                46% More Than Last Month
              </p>
            </div>
            {/* Active Apps */}
            <div className="text-white">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">132+</p>
              <p className="text-gray-200 mt-1 sm:mt-2">Active Apps</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                31 More Will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
