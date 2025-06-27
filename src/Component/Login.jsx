

import React, { useContext, useRef, useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Helmet } from "react-helmet";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { login, loginWithGoogle, resetPassword } = useContext(AuthContext);
  const emailRef = useRef();
  const [hideShow, setHideShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        Swal.fire({
          title: "Welcome back!",
          text: "You’re now logged in.",
          icon: "success",
        });
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handelGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Welcome back!",
          text: "You’re now logged in.",
          icon: "success",
        });
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handelResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      return Swal.fire("Please enter your email first!");
    }

    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Check your email!",
          text: "We've emailed you a link to reset your password",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handelPasswordHideShow = () => {
    setHideShow(!hideShow);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 px-4 py-10">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login and explore what’s waiting for you!
        </p>

        <form onSubmit={handelLogin} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-green-700">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <label className="block mb-1 font-medium text-green-700">Password</label>
            <input
              type={hideShow ? "text" : "password"}
              name="password"
              required
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
            />
            <div
              onClick={handelPasswordHideShow}
              className="absolute top-9 right-4 cursor-pointer text-gray-500"
            >
              {hideShow ? <FaEyeSlash size={20} /> : <IoMdEye size={20} />}
            </div>
          </div>

          <div className="text-right">
            <button
              type="button"
              onClick={handelResetPassword}
              className="text-sm text-green-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          
          <input type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-2 rounded-lg transition duration-300" value="Login" />

        </form>

        <div className="flex items-center my-5">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handelGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-green-50 transition duration-300"
        >
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <path
              fill="#EA4335"
              d="M496 208H272v96h126c-11.5 56-66.5 96-126 96-74.5 0-136-61.5-136-136s61.5-136 136-136c34.5 0 66 13 90 34l68-68C404 58 341 32 272 32 131 32 16 147 16 288s115 256 256 256c132 0 240-108 240-240 0-16-1.5-32-4-48z"
            />
          </svg>
          <span className="text-sm font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        <p className="text-sm text-center text-gray-600 mt-5">
          New here?{" "}
          <Link to="/sign-up" className="text-green-700 hover:underline font-medium cursor-pointer">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
