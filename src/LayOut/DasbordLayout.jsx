


import React, { useContext } from "react";
import { Link, Outlet } from "react-router";
import { AuthContext } from "../Component/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-green-50">
 
      <aside className="w-full md:w-64 bg-green-900 text-green-100 flex flex-col px-6 py-6 md:py-10">
        <div className="mb-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 mb-3 flex items-center justify-center text-green-900 font-bold text-xl">
            {user?.displayName?.slice(0, 1) || "U"}
          </div>
          <h2 className="text-lg md:text-xl font-semibold">{user?.displayName}</h2>
          <p className="text-sm text-green-200">{user?.email}</p>
        </div>

        <nav className="flex-1 space-y-3 text-sm md:text-base">
          <Link to="/dashboard" className="block hover:text-green-300">
            📊 Dashboard Home
          </Link>
          <Link to='my-plant' className="block hover:text-green-300">
            🌿 My Plants
          </Link>
          <Link to="add-plant" className="block hover:text-green-300">
            ➕ Add New Plant
          </Link>
          <Link to="all-item" className="block hover:text-green-300">
            🪴 All Plants
          </Link>
          <Link to="/" className="block hover:text-green-300">
            🌿 Back to Home
          </Link>
        </nav>
      </aside>

    
      <main className="flex-1 p-4 md:p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

