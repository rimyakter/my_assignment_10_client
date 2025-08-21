import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="btn btn-sm w-full border-1 border-[#1e1e2f] shadow-none bg-white font-bold text-sm ">
        <FcGoogle size={25} /> Login With Google
      </div>
    </div>
  );
};

export default SocialLogin;
