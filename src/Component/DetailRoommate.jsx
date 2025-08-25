import React, { useState, useContext } from "react";
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
  FaThumbsUp,
} from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const DetailRoommate = () => {
  const detailData = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

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
    likes = 0, // fallback if no like field exists yet
  } = detailData;

  const [likeCount, setLikeCount] = useState(likes);
  const [showContact, setShowContact] = useState(false); // control contact visibility

  // Handle Like Button
  const handleLike = async () => {
    if (user.email === email) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You cannot like your own post",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    try {
      // Send request to backend to update likes
      const res = await fetch(`http://localhost:5000/roommates/${_id}/like`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail: user.email }),
      });

      if (res.ok) {
        setLikeCount((prev) => prev + 1);
        setShowContact(true); // show contact after liking
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Failed to update like",
          showConfirmButton: false,
          timer: 1500,
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Failed to update like",
          showConfirmButton: false,
          timer: 1500,
        });
        console.error("Failed to update like");
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Failed to update like",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

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
            {showContact && (
              <p className="flex items-center gap-2">
                <FaPhone className="text-success" />{" "}
                <span className="font-semibold">Contact:</span> {contactInfo}
              </p>
            )}
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
            <button
              onClick={handleLike}
              className="btn btn-primary flex items-center gap-2"
            >
              <FaThumbsUp /> Like {likeCount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRoommate;
