import React from "react";
import { useLoaderData } from "react-router";
import RoommateHomePage from "./RoommateHomePage";

const Home = () => {
  const roommatesData = useLoaderData();
  // const { title, location, rentAmount, roomType, availability } = roommatesData;

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {roommatesData.map((item) => (
            <RoommateHomePage key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
