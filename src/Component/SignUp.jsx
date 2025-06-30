
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp, loginWithGoogle, userUpdateProfile } =
    useContext(AuthContext);

  const [hideShow, setHideShow] = useState(false);
  const [hideShowConfirm, setHideShowConfirm] = useState(false);

  const handelSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;

    if (name.length < 6) {
      return Swal.fire({
        icon: "error",
        text: "Name must be at least 6 characters!",
        color: "#065f46",
      });
    }
    if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "Password must have at least one uppercase letter!",
        color: "#065f46",
      });
    }
    if (!/[a-z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "Password must have at least one lowercase letter!",
        color: "#065f46",
      });
    }
    if (!/[0-9]/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "Password must have at least one number!",
        color: "#065f46",
      });
    }
    if (!/^(?=.*[^A-Za-z0-9]).+$/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "Password must have at least one special character!",
        color: "#065f46",
      });
    }
    if (password !== confirm) {
      return Swal.fire({
        icon: "error",
        text: "Password and Confirm Password must match!",
        color: "#065f46",
      });
    }

    const userData = {
      displayName: name,
      photoURL: photo,
    };

    signUp(email, password)
      .then(() => {
        userUpdateProfile(userData)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        Swal.fire({
          title: "Success!",
          text: "Your account was created successfully.",
          icon: "success",
          confirmButtonColor: "#16a34a",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
          confirmButtonColor: "#16a34a",
        });
      });
  };

  const handelGoogleSignUp = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Logged in with Google successfully.",
          icon: "success",
          confirmButtonColor: "#16a34a",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
          confirmButtonColor: "#16a34a",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex items-center justify-center px-6 py-12">
      <Helmet>
        <title>Sign Up | HariCare</title>
      </Helmet>
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Create Account
        </h2>

        <form onSubmit={handelSignUp}>
          
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-gray-800 font-semibold text-lg"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Name"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              autoComplete="name"
            />
          </div>

          <div>
            <label
              htmlFor="photo"
              className="block mb-2 text-gray-800 font-semibold text-lg"
            >
              Photo
            </label>
            <input
              id="photo"
              name="photo"
              type="url"
              required
              placeholder="Photo URL"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              autoComplete="photo"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-gray-800 font-semibold text-lg"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              autoComplete="email"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-2 text-gray-800 font-semibold text-lg"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={hideShow ? "text" : "password"}
              required
              placeholder="*******"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-900  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setHideShow(!hideShow)}
              className="absolute top-12 right-8 hover:text-green-600 transition"
              aria-label={hideShow ? "Hide password" : "Show password"}
            >
              {hideShow ? <FaEyeSlash size={22} /> : <IoMdEye size={22} />}
            </button>
          </div>

  
          <div className="relative">
            <label
              htmlFor="confirm"
              className="block mb-2 text-gray-800 font-semibold text-lg"
            >
              Confirm Password
            </label>
            <input
              id="confirm"
              name="confirm"
              type={hideShowConfirm ? "text" : "password"}
              required
              placeholder="*******"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setHideShowConfirm(!hideShowConfirm)}
              className="absolute top-12 right-8 text-gray-500 hover:text-green-600 transition"
              aria-label={hideShowConfirm ? "Hide confirm password" : "Show confirm password"}
            >
              {hideShowConfirm ? <FaEyeSlash size={22} /> : <IoMdEye size={22} />}
            </button>
          </div>


          
           <input type="submit" className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-2 rounded-lg transition duration-300 cursor-pointer" value="Sign Up" />
        </form>

 
        <div className="flex items-center justify-center my-6">
          <span className="border-b border-gray-300 w-1/3"></span>
          <span className="mx-3  font-semibold">Or</span>
          <span className="border-b border-gray-300 w-1/3"></span>
        </div>


        <button
          onClick={handelGoogleSignUp}
          className="w-full flex items-center justify-center gap-3 border border-green-600 text-green-600 font-semibold py-3 rounded-md hover:bg-green-50 transition"
          aria-label="Sign up with Google"
        >
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M113.47 309.408L89.594 364.968 50 365.19C21.125 324.153 5 277.776 5 230.12 5 179.052 27.71 131.542 69.536 94.72L112.812 133.868C91.406 154.238 80 185.412 80 216.828 80 251.528 94.997 283.432 113.47 309.408Z" fill="#FBBB00" />
            <path d="M406.244 169.57C406.244 158.89 405.394 148.7 403.574 139.104H258.404V190.658H344.474C338.474 208.048 326.14 229.016 306.758 247.042L357.988 284.108C384.808 253.234 406.244 213.71 406.244 169.57Z" fill="#0F9D58" />
            <path d="M114.356 354.164C138.152 381.37 174.784 398.924 218.6 398.924 277.74 398.924 319.682 372.264 343.016 344.96L293.122 309.928C277.34 324.276 256.234 336.208 218.728 336.208 187.316 336.208 159.11 320.148 141.578 299.996L114.356 354.164Z" fill="#4285F4" />
            <path d="M405.816 256.114C405.816 241.916 402.796 229.798 397.956 219.088L335.372 233.042C341.18 243.358 344.296 255.176 344.296 266.362 344.296 292.694 327.21 314.488 306.858 333.016L358.94 372.776C386.902 344.71 405.816 302.734 405.816 256.114Z" fill="#EA4335" />
          </svg>
          Sign Up with Google
        </button>

        <p className="mt-6 text-center text-gray-700 font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 underline hover:text-green-700">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
