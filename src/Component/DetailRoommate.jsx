import React, { useState, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
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
    likes = 0,
  } = detailData;

  const [likeCount, setLikeCount] = useState(likes);
  const [showContact, setShowContact] = useState(false);

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
      const res = await fetch(
        `https://my-assignment-10-server-xi.vercel.app/roommates/${_id}/like`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userEmail: user.email }),
        }
      );

      if (res.ok) {
        setLikeCount((prev) => prev + 1);
        setShowContact(true);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to update like",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="flex justify-center items-center bg-base-200 p-3 sm:p-6 md:p-8 min-h-screen">
      <div className="card w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-base-100 shadow-xl rounded-xl">
        <div className="card-body">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline btn-primary btn-sm flex items-center gap-2 mb-4 w-full sm:w-auto"
          >
            <FaArrowLeft /> Back
          </button>

          {/* Title */}
          <h2 className="card-title text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 text-center sm:text-left">
            {title || "Roommate Details"}
          </h2>

          {/* Details */}
          <div className="space-y-4 sm:space-y-3 text-sm sm:text-base">
            <p className="flex items-center gap-2">
              <FaUser className="text-primary" />
              <span className="font-semibold">Name:</span> {username}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-secondary" />
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p className="flex items-center gap-2">
              <FaDollarSign className="text-accent" />
              <span className="font-semibold">Rent:</span> {rentAmount}৳ / month
            </p>
            <p className="flex items-center gap-2">
              <FaHome className="text-info" />
              <span className="font-semibold">Room Type:</span> {roomType}
            </p>
            <p>
              <span className="font-semibold">Availability:</span>{" "}
              {availability}
            </p>
            <p>
              <span className="font-semibold">Description:</span> {description}
            </p>
            {showContact && (
              <p className="flex items-center gap-2">
                <FaPhone className="text-success" />
                <span className="font-semibold">Contact:</span> {contactInfo}
              </p>
            )}
            <p className="flex items-center gap-2">
              <FaVoicemail className="text-success" />
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p>
              <span className="font-semibold">Lifestyle Preferences:</span>{" "}
              {lifestylePreferences}
            </p>
          </div>

          {/* Actions */}
          <div className="card-actions justify-start mt-6">
            <button
              onClick={handleLike}
              className="btn btn-primary flex items-center gap-2 w-full sm:w-auto"
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
