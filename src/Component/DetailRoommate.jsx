import React from "react";
import { useLoaderData } from "react-router";
import { useNavigate } from "react-router";
import {
  FaUser,
  FaMapMarkerAlt,
  FaDollarSign,
  FaPhone,
  FaHome,
  FaVoicemail,
  FaArrowLeft,
} from "react-icons/fa";

const DetailRoommate = () => {
  const detailData = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    email,
    username,
    title,
    location,
    rentAmount,
    roomType,
    availability,
    description,
    contactInfo,
    lifestylePreferences,
  } = detailData;

  return (
    <div className="flex justify-center items-center bg-base-200 p-4">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline btn-primary btn-sm flex items-center gap-2 mb-4"
          >
            <FaArrowLeft /> Back
          </button>

          <h2 className="card-title text-2xl font-bold text-primary mb-2">
            {title || "Roommate Details"}
          </h2>

          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <FaUser className="text-primary" />{" "}
              <span className="font-semibold">Name:</span> {username}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-secondary" />{" "}
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p className="flex items-center gap-2">
              <FaDollarSign className="text-accent" />{" "}
              <span className="font-semibold">Rent:</span> ${rentAmount}
            </p>
            <p className="flex items-center gap-2">
              <FaHome className="text-info" />{" "}
              <span className="font-semibold">Room Type:</span> {roomType}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">Availability:</span>{" "}
              {availability}
            </p>
            <p>
              <span className="font-semibold">Description:</span> {description}
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-success" />{" "}
              <span className="font-semibold">Contact:</span> {contactInfo}
            </p>
            <p className="flex items-center gap-2">
              <FaVoicemail className="text-success" />{" "}
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p>
              <span className="font-semibold">Lifestyle Preferences:</span>{" "}
              {lifestylePreferences}
            </p>
          </div>

          <div className="card-actions justify-start mt-4">
            <button className="btn btn-primary">Like</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRoommate;
