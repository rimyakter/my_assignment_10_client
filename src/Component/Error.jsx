import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6">
      <div className="text-center">
        {/* Centered, professional icon with subtle animation */}
        <MdOutlineErrorOutline className="text-indigo-600 text-9xl mb-6 animate-pulse mx-auto" />

        <h1 className="text-7xl font-extrabold text-gray-800 mb-4">404</h1>

        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
