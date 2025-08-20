import { Link } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
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
