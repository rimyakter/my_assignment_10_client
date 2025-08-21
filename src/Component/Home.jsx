import React from "react";
import { useLoaderData } from "react-router";
import RoommateHomePage from "./RoommateHomePage";
import SwiperSlider from "./swiperSlider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Home = () => {
  const roommatesData = useLoaderData();

  return (
    <div>
      <div>
        <SwiperSlider />
      </div>
      <div className="w-11/12 mx-auto my-10">
        <h1 className="text-3xl text-center pt-10 font-bold">
          Find Your New Roommate
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {roommatesData.map((item) => (
            <div
              key={item._id}
              data-tooltip-id="roommate-tooltip"
              data-tooltip-content={`Location: ${item.location} | Rent: ${item.rentAmount} BDT`}
              className="cursor-pointer"
            >
              <RoommateHomePage data={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Global tooltip */}
      <Tooltip id="roommate-tooltip" place="top" effect="solid" />
    </div>
  );
};

export default Home;
