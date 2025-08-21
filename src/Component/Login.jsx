import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //firebase sign-In

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Successfully Logged In",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Login Failed! Try Again!",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 py-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-2xl px-5 py-5 font-bold text-[#1e1e2f]">
                Login Your Account
              </h1>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <p className="link link-hover text-xs text-[#3a8ef6] cursor-pointer">
                    Forgot password?
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn bg-[#1e1e2f] mt-4 text-white"
                >
                  Login
                </button>

                {/* <div>
                  <SocialLogin className="w-full"></SocialLogin>
                </div> */}
              </fieldset>
              <p className="text-xs font-semibold">
                Don't Have An Account?{" "}
                <Link
                  className="text-[#3a8ef6]  font-bold hover:underline"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
