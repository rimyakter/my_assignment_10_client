import React, { useState } from "react";
import { useLoaderData } from "react-router";
import RoommateHomePage from "./RoommateHomePage";
import SwiperSlider from "./swiperSlider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import FAQ from "./Faq";
import RoommateFeatures from "./RoommateFeatures";
import "../App.css"; // make sure it's imported

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Home = () => {
  const roommatesData = useLoaderData();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-md shadow bg-gray-300 text-gray-900"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Swiper slider */}
      <div className="section">
        <SwiperSlider />
      </div>

      {/* 6 roommates post info */}
      <div className="section w-11/12 mx-auto my-10">
        <h1 className="text-3xl text-center py-12 font-bold">
          Find Your New Roommate
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 py-5 ">
          {roommatesData.map((item) => (
            <div
              key={item._id}
              data-tooltip-id="roommate-tooltip"
              data-tooltip-content={`Location: ${item.location} | Rent: ${item.rentAmount} BDT`}
              className="cursor-pointer "
            >
              <RoommateHomePage data={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Global tooltip */}
      <Tooltip id="roommate-tooltip" place="top" effect="solid" />

      {/* Roommate Features section */}
      <div className={`section ${darkMode ? "section-dark" : "section-light"}`}>
        <RoommateFeatures />
      </div>

      {/* FAQ section */}
      <div className={`section ${darkMode ? "section-dark" : "section-light"}`}>
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
