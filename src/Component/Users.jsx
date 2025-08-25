import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  return (
    <div className="min-h-screen bg-base-200 py-6 px-3 sm:px-6">
      {/* Page Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
        Total Users: {users.length}
      </h1>

      {/* Table Wrapper */}
      <div className="overflow-x-auto w-full md:w-11/12 lg:w-8/12 mx-auto shadow-lg rounded-xl bg-white">
        <table className="table w-full text-sm sm:text-base">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-8 w-8 sm:h-12 sm:w-12">
                        <img
                          src={user.photo}
                          alt={user.name || "User Avatar"}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-xs md:text-sm">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>
                {/* Email cell with wrapping */}
                <td className="max-w-[170px] sm:max-w-[250px] md:max-w-none break-words text-xs sm:text-sm md:text-base">
                  {user.email}
                </td>
                <td>
                  {/* Future delete button here */}
                  {/* <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-error btn-xs sm:btn-sm text-white"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
