import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const UpdateRoommate = () => {
  const { user } = useContext(AuthContext);
  const roommate = useLoaderData(); // fetched roommate data from loader
  const navigate = useNavigate();
  const { id } = useParams();

  const handleUpdateRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    // Ensure email & username come from Firebase Auth
    updatedData.email = user?.email || "";
    updatedData.username = user?.displayName || "Anonymous";

    fetch(`http://localhost:5000/roommates/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your data updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/my-listings");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-200 p-10">
      <div className="w-8/12 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Update Roommate Info
          </h1>
          <p className="text-sm text-gray-600 text-center mx-16 my-3 mb-6">
            Update only the fields you want to change, then click Save.
          </p>
        </div>

        <form onSubmit={handleUpdateRoommate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">Title</label>
              <input
                name="title"
                type="text"
                defaultValue={roommate?.title}
                className="input w-full border-gray-300 rounded-md"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">Location</label>
              <input
                name="location"
                type="text"
                defaultValue={roommate?.location}
                className="input w-full border-gray-300 rounded-md"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">Rent Amount(BDT)</label>
              <input
                name="rentAmount"
                type="number"
                defaultValue={roommate?.rentAmount}
                className="input w-full border-gray-300 rounded-md"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">
                Room Type (Single, Shared, etc.)
              </label>
              <input
                name="roomType"
                type="text"
                defaultValue={roommate?.roomType}
                className="input w-full border-gray-300 rounded-md"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">
                Lifestyle Preferences
              </label>
              <input
                name="lifestylePreferences"
                type="text"
                defaultValue={roommate?.lifestylePreferences}
                className="input w-full border-gray-300 rounded-md"
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">Description</label>
              <input
                name="description"
                type="text"
                defaultValue={roommate?.description}
                className="input w-full border-gray-300 rounded-md"
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">Contact Info</label>
              <input
                name="contactInfo"
                type="text"
                defaultValue={roommate?.contactInfo}
                className="input w-full border-gray-300 rounded-md"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">Availability</label>
              <input
                name="availability"
                type="text"
                defaultValue={roommate?.availability}
                className="input w-full border-gray-300 rounded-md"
                required
              />
            </fieldset>

            {/* Read-only fields */}
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="label text-gray-700">User Email</label>
              <input
                name="email"
                type="email"
                value={user?.email || ""}
                readOnly
                className="input w-full border-gray-300 rounded-md bg-gray-100"
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-50 border border-gray-200 rounded-xl p-4">
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
            className="w-full mt-6 py-3 rounded-sm shadow-md bg-gray-800 text-white hover:bg-gray-900 transition"
            type="submit"
            value="Save Changes"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateRoommate;
