import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`http://localhost:5000/users/${id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount) {
  //             const remainingUser = users.filter((user) => user._id !== id);
  //             setUsers(remainingUser);
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: " User has been deleted.",
  //               icon: "success",
  //             });
  //           }
  //         });
  //     }
  //   });
  // };
  return (
    <div>
      <h1 className="text-3xl text-center my-5">Total Users:{users.length}</h1>
      <div className="overflow-x-auto w-8/12 mx-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>

              <th>Email</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>

                <td>{user.email}</td>

                <th>
                  {/* <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-error btn-xs text-white "
                  >
                    Delete
                  </button> */}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
