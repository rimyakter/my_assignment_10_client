import React from "react";
import { FaUser, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import { Link } from "react-router";

const AllListing = ({ data }) => {
  const { _id, title, location, rentAmount, roomType, availability } = data;
  const accentColor = "#1447E6";

  return (
    <div className="w-full p-2 sm:p-3 md:p-4">
      <div className="bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col h-full">
        <div className="flex flex-col flex-1 p-4 sm:p-6">
          {/* Header */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold flex items-center gap-2 text-gray-800 break-words">
            <FaUser style={{ color: accentColor }} /> {title}
          </h2>

          {/* Location */}
          <p className="flex items-center gap-2 text-gray-600 mt-2 text-xs sm:text-sm md:text-base break-words">
            <FaMapMarkerAlt style={{ color: accentColor }} /> {location}
          </p>

          {/* Rent & Room Info */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2 text-gray-700 flex-wrap">
              <FaHome style={{ color: accentColor }} />
              <span
                className="text-[10px] sm:text-xs md:text-sm px-2 py-1 rounded-full border"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                {roomType} Room
              </span>
            </div>
            <span className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold text-gray-800">
              {rentAmount}৳ / month
            </span>
          </div>

          {/* Availability */}
          <div className="mt-3">
            <span
              className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-sm font-medium ${
                availability === "yes"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {availability === "yes" ? "Available" : "Not Available"}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Action Button */}
          <div className="mt-auto">
            <Link
              to={`/roommates/browse-listing/${_id}`}
              className="block sm:inline-block w-full sm:w-auto text-center rounded-xl px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-white font-medium"
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
