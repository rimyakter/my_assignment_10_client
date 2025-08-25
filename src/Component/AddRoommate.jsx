import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const AddRoommate = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleAddRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const roommateData = Object.fromEntries(formData.entries());
    roommateData.email = user?.email || "";
    roommateData.username = user?.displayName || "Anonymous";

    fetch("https://my-assignment-10-server-xi.vercel.app/roommates", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(roommateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Roommate Added Successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
          navigate("/my-listings");
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed! Try Again!",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-200 p-4 sm:p-6 md:p-10">
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 md:p-10">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
            Add New Roommate
          </h1>
          <p className="text-sm sm:text-base text-gray-600 text-center mx-auto mt-3 mb-6 max-w-2xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <form onSubmit={handleAddRoommate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Title */}
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
              <label className="label text-gray-700">Title</label>
              <input
                name="title"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Title"
                required
              />
            </fieldset>

            {/* Location */}
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
              <label className="label text-gray-700">Location</label>
              <input
                name="location"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Your Location"
                required
              />
            </fieldset>

            {/* Rent */}
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
              <label className="label text-gray-700">Rent Amount (BDT)</label>
              <input
                name="rentAmount"
                type="number"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Rent Amount"
                required
              />
            </fieldset>

            {/* Room Type */}
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
              <label className="label text-gray-700">
                Room Type (Single, Shared, etc.)
              </label>
              <input
                name="roomType"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Room Type"
                required
              />
            </fieldset>

            {/* Lifestyle */}
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4 md:col-span-2">
              <label className="label text-gray-700">
                Lifestyle Preferences (Pets, Smoking, Night Owl, etc.)
              </label>
              <input
                name="lifestylePreferences"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Lifestyle Preferences"
              />
            </fieldset>

            {/* Description */}
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4 md:col-span-2">
              <label className="label text-gray-700">Description</label>
              <textarea
                name="description"
                className="textarea w-full border-gray-300 rounded-md"
                rows="3"
                placeholder="Enter Description"
              ></textarea>
            </fieldset>

            {/* Contact */}
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
              <label className="label text-gray-700">Contact Info</label>
              <input
                name="contactInfo"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Your Contact Info"
                required
              />
            </fieldset>

            {/* Availability */}
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
              <label className="label text-gray-700">
                Availability (Yes/No)
              </label>
              <input
                name="availability"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Available or Not"
                required
              />
            </fieldset>

            {/* User Email */}
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
              <label className="label text-gray-700">User Email</label>
              <input
                name="email"
                type="email"
                value={user?.email || ""}
                readOnly
                className="input w-full border-gray-300 rounded-md bg-gray-100"
              />
            </fieldset>

            {/* Username */}
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
              <label className="label text-gray-700">User Name</label>
              <input
                name="username"
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="input w-full border-gray-300 rounded-md bg-gray-100"
              />
            </fieldset>
          </div>

          <input
            className="w-full mt-6 py-3 rounded-md shadow-md bg-gray-800 text-white font-semibold hover:bg-gray-900 transition"
            type="submit"
            value="Add Roommate"
          />
        </form>
      </div>
    </div>
  );
};

export default AddRoommate;
