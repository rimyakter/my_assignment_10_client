import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, googleSignIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          timer: 1000,
        });
        const redirectTo = location.state?.from || "/";
        navigate(redirectTo, { replace: true });
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Login Failed! Try Again!",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const saveUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Google Login Successful",
              showConfirmButton: false,
              timer: 1000,
            });
            const redirectTo = location.state?.from || "/";
            navigate(redirectTo, { replace: true });
          });
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Google Login Failed! Try Again!",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
          Login to Your Account
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm sm:text-base mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm sm:text-base mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-end mb-2">
            <p className="text-xs text-blue-500 hover:underline cursor-pointer">
              Forgot password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 sm:py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Login
          </button>

          <div onClick={handleGoogleLogin}>
            <SocialLogin />
          </div>
        </form>

        <p className="text-center text-xs sm:text-sm mt-4">
          Don't have an account?{" "}
          <Link
            className="text-blue-500 font-bold hover:underline"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
