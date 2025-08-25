import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, user, setUser, updateUser, googleSignIn } =
    use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );
    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 6 characters, include an uppercase and a lowercase letter.",
      });
      return;
    }

    //create user in the firebase
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({
          displayName: name,
          photoURL: photo || "https://i.ibb.co/placeholder.png",
        })
          .then(() => {
            setUser(user);
          })
          .catch((error) => {
            setUser(user);
          });

        const userProfile = {
          email,
          ...restFormData,
          creationTime: user?.metadata?.creationTime,
          lastSignInTime: user?.metadata?.lastSignInTime,
        };
        //Save Profile Info in the database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Account is created",
                showConfirmButton: false,
                timer: 1000,
              });
              navigate("/");
            }
          });
      })
      .catch((error) => console.log(error));
  };

  //Google Login

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);

        // Prepare user data for MongoDB
        const saveUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        // Send user to backend API
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User saved:", data);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Google Login Successful",
              showConfirmButton: false,
              timer: 1000,
            });
            console.log(saveUser);
            // Correct navigation
            const redirectTo = location.state?.from || "/";
            navigate(redirectTo, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
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
    <div>
      <div className="hero bg-base-200 py-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-2xl px-5 py-2 font-bold text-[#1e1e2f]">
                Register Your Account
              </h1>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  required
                />
                <label className="label">Photo Url</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Your Photo Url"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type="password"
                    className="input pr-10 w-full"
                    placeholder="Password"
                    required
                  />
                </div>
                {/* <p className="text-xs text-gray-400">
                  **Password must have 6 numbers, 1 uppercase and 1 lowercase
                  letter.
                </p> */}

                <button
                  type="submit"
                  className="btn bg-[#1e1e2f] text-white mt-4"
                >
                  Register
                </button>
                <div onClick={handleGoogleLogin} className="w-full">
                  <SocialLogin></SocialLogin>
                </div>
              </fieldset>
              <p className="text-xs font-semibold">
                Already Have An Account?{" "}
                <Link
                  className="text-[#3a8ef6] font-bold hover:underline"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
