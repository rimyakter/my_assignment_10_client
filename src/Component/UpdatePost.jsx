import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const UpdateRoommate = () => {
  const { user } = useContext(AuthContext);
  const roommate = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleUpdateRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    updatedData.email = user?.email || "";
    updatedData.username = user?.displayName || "Anonymous";

    fetch(`http://localhost:5000/roommates/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
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
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-200 p-4 sm:p-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg shadow-sm text-gray-700"
      >
        &larr; Back
      </button>

      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Update Roommate Info
        </h1>
        <p className="text-sm sm:text-base text-gray-600 text-center my-3 mb-6 px-2 sm:px-16">
          Update only the fields you want to change, then click Save.
        </p>

        <form onSubmit={handleUpdateRoommate} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                label: "Title",
                name: "title",
                value: roommate?.title,
                required: true,
              },
              {
                label: "Location",
                name: "location",
                value: roommate?.location,
                required: true,
              },
              {
                label: "Rent Amount (BDT)",
                name: "rentAmount",
                value: roommate?.rentAmount,
                type: "number",
                required: true,
              },
              {
                label: "Room Type",
                name: "roomType",
                value: roommate?.roomType,
                required: true,
              },
              {
                label: "Lifestyle Preferences",
                name: "lifestylePreferences",
                value: roommate?.lifestylePreferences,
              },
              {
                label: "Description",
                name: "description",
                value: roommate?.description,
              },
              {
                label: "Contact Info",
                name: "contactInfo",
                value: roommate?.contactInfo,
                required: true,
              },
              {
                label: "Availability",
                name: "availability",
                value: roommate?.availability,
                required: true,
              },
            ].map((field, idx) => (
              <fieldset
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4"
              >
                <label className="text-gray-700 text-sm sm:text-base">
                  {field.label}
                </label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  defaultValue={field.value}
                  required={field.required}
                  className="mt-1 w-full border border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </fieldset>
            ))}

            {/* Read-only fields */}
            <fieldset className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
              <label className="text-gray-700 text-sm sm:text-base">
                User Email
              </label>
              <input
                type="email"
                name="email"
                value={user?.email || ""}
                readOnly
                className="mt-1 w-full border border-gray-300 rounded-md bg-gray-100 px-2 py-1 sm:px-3 sm:py-2"
              />
            </fieldset>

            <fieldset className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
              <label className="text-gray-700 text-sm sm:text-base">
                User Name
              </label>
              <input
                type="text"
                name="username"
                value={user?.displayName || ""}
                readOnly
                className="mt-1 w-full border border-gray-300 rounded-md bg-gray-100 px-2 py-1 sm:px-3 sm:py-2"
              />
            </fieldset>
          </div>

          <input
            type="submit"
            value="Save Changes"
            className="w-full mt-4 sm:mt-6 py-3 rounded-lg shadow-md bg-gray-800 text-white hover:bg-gray-900 transition text-sm sm:text-base"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateRoommate;
