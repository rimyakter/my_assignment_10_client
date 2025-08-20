import React from "react";
import { useLoaderData } from "react-router";
import AllListing from "./AllListing";

const BrowseListing = () => {
  const allRoommatesData = useLoaderData();

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {allRoommatesData.map((item) => (
            <AllListing key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseListing;
