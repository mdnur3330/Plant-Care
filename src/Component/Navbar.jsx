




import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "./AuthProvider";
import logo from "../assets/8856763.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, singOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    singOutUser()
      .then(() => navigate("/login"))
      .catch((error) => console.error(error));
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/all-plant", label: "All Plant" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
    { path: "/dashboard", label: "Dashboard" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-4 bg-green-50 text-gray-800 shadow-md sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-green-800">HariCare</h1>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-green-600 transition ${
                  isActive ? "text-green-700 underline underline-offset-4" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* User Area */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  className="w-10 h-10 rounded-full border"
                  alt="User"
                />
                <span className="text-sm font-semibold">{user.displayName}</span>
              </div>
              <Link to='/login'
                onClick={handleSignOut}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden navbar bg-green-50 px-4 py-3 shadow-sm text-gray-700">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-green-800">HariCare</span>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52"
            >
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="hover:text-green-600">{label}</Link>
                </li>
              ))}

              {user && (
                <li>
                  <Link to={`/my-plant/${user.email}`}>My Plant</Link>
                </li>
              )}

              <li className="pt-2 border-t">
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="text-left text-red-600"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


