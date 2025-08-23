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

  // Delete handler
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
              fetchRoommates(); // Refresh list
            }
          });
      }
    });
  };

  const handleUpdate = () => {};

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        My All Posts
      </h1>

      {roommates.length === 0 ? (
        <p className="text-center text-gray-600">
          You haven’t added any posts yet.
        </p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-xl p-6">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left text-sm">
                <th className="p-3 border border-gray-200">Title</th>
                <th className="p-3 border border-gray-200">Location</th>
                <th className="p-3 border border-gray-200">Rent</th>
                <th className="p-3 border border-gray-200">Room Type</th>
                <th className="p-3 border border-gray-200">Availability</th>
                <th className="p-3 border border-gray-200">
                  Lifestyle Preferences
                </th>
                <th className="p-3 border border-gray-200">Contact</th>
                <th className="p-3 border border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roommates.map((roommate) => (
                <tr key={roommate._id} className="hover:bg-gray-50 text-xs">
                  <td className="p-3 border border-gray-200">
                    {roommate.title}
                  </td>
                  <td className="p-3 border border-gray-200">
                    {roommate.location}
                  </td>
                  <td className="p-3 border border-gray-200">
                    {roommate.rentAmount}
                  </td>
                  <td className="p-3 border border-gray-200">
                    {roommate.roomType}
                  </td>
                  <td className="p-3 border border-gray-200">
                    {roommate.availability}
                  </td>
                  <td className="p-3 border border-gray-200">
                    {roommate.lifestylePreferences}
                  </td>
                  <td className="p-3 border border-gray-200">
                    {roommate.contactInfo}
                  </td>
                  <td className="p-3 border border-gray-200 space-x-2">
                    <Link
                      to={`/updatePost/${roommate._id}`}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => handleUpdate(roommate._id)}
                    >
                      Update
                    </Link>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
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
      )}
    </div>
  );
};

export default MyListings;
