import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [roommates, setRoommates] = useState([]);

  const fetchRoommates = () => {
    if (user?.email) {
      fetch(`http://localhost:5000/roommates?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setRoommates(data));
    }
  };

  useEffect(() => {
    fetchRoommates();
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/roommates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your post has been deleted.", "success");
              fetchRoommates();
            }
          });
      }
    });
  };

  const handleUpdate = () => {};

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        My All Posts
      </h1>

      {roommates.length === 0 ? (
        <p className="text-center text-gray-600">
          You haven’t added any posts yet.
        </p>
      ) : (
        <div className="bg-white shadow-md rounded-xl p-4 sm:p-6">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border border-gray-200">Title</th>
                  <th className="p-2 border border-gray-200">Location</th>
                  <th className="p-2 border border-gray-200">Rent</th>
                  <th className="p-2 border border-gray-200">Room Type</th>
                  <th className="p-2 border border-gray-200">Availability</th>
                  <th className="p-2 border border-gray-200">Lifestyle</th>
                  <th className="p-2 border border-gray-200">Contact</th>
                  <th className="p-2 border border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roommates.map((roommate) => (
                  <tr key={roommate._id} className="hover:bg-gray-50">
                    <td className="p-2 border border-gray-200">
                      {roommate.title}
                    </td>
                    <td className="p-2 border border-gray-200">
                      {roommate.location}
                    </td>
                    <td className="p-2 border border-gray-200">
                      {roommate.rentAmount}
                    </td>
                    <td className="p-2 border border-gray-200">
                      {roommate.roomType}
                    </td>
                    <td className="p-2 border border-gray-200">
                      {roommate.availability}
                    </td>
                    <td className="p-2 border border-gray-200">
                      {roommate.lifestylePreferences}
                    </td>
                    <td className="p-2 border border-gray-200">
                      {roommate.contactInfo}
                    </td>
                    <td className="p-2 border border-gray-200 space-x-2">
                      <Link
                        to={`/updatePost/${roommate._id}`}
                        className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                        onClick={() => handleUpdate(roommate._id)}
                      >
                        Update
                      </Link>
                      <button
                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                        onClick={() => handleDelete(roommate._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {roommates.map((roommate) => (
              <div
                key={roommate._id}
                className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50"
              >
                <h2 className="font-bold text-gray-800">{roommate.title}</h2>
                <p className="text-sm text-gray-600">
                  Location: {roommate.location}
                </p>
                <p className="text-sm text-gray-600">
                  Rent: {roommate.rentAmount}
                </p>
                <p className="text-sm text-gray-600">
                  Room Type: {roommate.roomType}
                </p>
                <p className="text-sm text-gray-600">
                  Availability: {roommate.availability}
                </p>
                <p className="text-sm text-gray-600">
                  Lifestyle: {roommate.lifestylePreferences}
                </p>
                <p className="text-sm text-gray-600">
                  Contact: {roommate.contactInfo}
                </p>
                <div className="mt-2 flex space-x-2">
                  <Link
                    to={`/updatePost/${roommate._id}`}
                    className="flex-1 px-2 py-1 bg-blue-500 text-white rounded text-center text-xs hover:bg-blue-600"
                    onClick={() => handleUpdate(roommate._id)}
                  >
                    Update
                  </Link>
                  <button
                    className="flex-1 px-2 py-1 bg-red-500 text-white rounded text-center text-xs hover:bg-red-600"
                    onClick={() => handleDelete(roommate._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListings;
