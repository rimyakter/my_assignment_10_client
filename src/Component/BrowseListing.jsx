import React from "react";
import { useLoaderData } from "react-router";
import AllListing from "./AllListing";

const BrowseListing = () => {
  const allRoommatesData = useLoaderData();

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h1 className="text-xl md:text-3xl text-center mt-8 md:mt-12 md:mb-8 font-bold">
          Some amazing people are looking for a roommate like you
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {allRoommatesData.map((item) => (
            <AllListing key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseListing;
