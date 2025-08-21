import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const AddRoommate = () => {
  const { user } = use(AuthContext);
  const handleAddRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const roommateData = Object.fromEntries(formData.entries());
    // Force add user info from firebase (so it can't be tampered with)
    roommateData.email = user?.email || "";
    roommateData.username = user?.displayName || "Anonymous";

    //Send Roommate Data to the Database

    fetch("http://localhost:5000/roommates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
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
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Registration Failed! Try Again!",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-200 p-10">
      <div className="w-8/12 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Add New Roommate
          </h1>
          <p className="text-sm text-gray-600 text-center mx-16 my-3 mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <form onSubmit={handleAddRoommate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">Title</label>
              <input
                name="title"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Title"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">Location</label>
              <input
                name="location"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Your Location"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">Rent Amount(BDT)</label>
              <input
                name="rentAmount"
                type="number"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Rent Amount"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">
                Room Type(Single, Shared, etc.)
              </label>
              <input
                name="roomType"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Room Type"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">
                Lifestyle Preferences(Pets, Smoking, Night Owl, etc.)
              </label>
              <input
                name="lifestylePreferences"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter your Lifestyle Preferences"
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">Description</label>
              <input
                name="description"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Description"
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">Contact Info</label>
              <input
                name="contactInfo"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Your Contact Info"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">
                Availability(Yes/No)
              </label>
              <input
                name="availability"
                type="text"
                className="input w-full border-gray-300 rounded-md"
                placeholder="Availability (available or not)"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">User Email</label>
              <input
                name="email"
                type="email"
                value={user?.email || ""}
                readOnly
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter Email"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">User Name</label>
              <input
                name="username"
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="input w-full border-gray-300 rounded-md"
                placeholder="Enter UserName"
                required
              />
            </fieldset>
          </div>

          <input
            className="w-full mt-6 py-3 rounded-sm shadow-md bg-gray-800 text-white hover:bg-gray-900 transition"
            type="submit"
            value="Add Roommate"
          />
        </form>
      </div>
    </div>
  );
};

export default AddRoommate;
