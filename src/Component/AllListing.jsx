import React from "react";
import { FaUser, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import { Link } from "react-router";

const AllListing = ({ data }) => {
  const { _id, title, location, rentAmount, roomType, availability } = data;
  const accentColor = "#1447E6";

  return (
    <div className="w-full h-full">
      <div className="card w-full h-full bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col">
        <div className="card-body flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
              <FaUser style={{ color: accentColor }} /> {title}
            </h2>
          </div>

          {/* Location */}
          <p className="flex items-center gap-2 text-gray-600 mt-2">
            <FaMapMarkerAlt style={{ color: accentColor }} /> {location}
          </p>

          {/* Rent & Room Info */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <FaHome style={{ color: accentColor }} />
              <span
                className="badge badge-outline"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                {roomType} Room
              </span>
            </div>
            <span className="text-lg font-semibold text-gray-800">
              {rentAmount}৳ / month
            </span>
          </div>

          {/* Availability */}
          <div className="mt-3">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                availability === "yes"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {availability === "yes" ? "Available" : "Not Available"}
            </span>
          </div>

          {/* Divider */}
          <div className="divider border-gray-200 my-4"></div>

          {/* Action Button */}
          <div className="card-actions justify-end mt-auto">
            <Link
              to={`/roommates/browse-listing/${_id}`}
              className="btn rounded-xl px-5 text-white w-full"
              style={{ backgroundColor: accentColor }}
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllListing;
