import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";
import { AuthContext } from "../Component/AuthProvider";

const Root = () => {
  return (
    <div className="m-0 p-0 box-border">
   
      <nav className="sticky top-0 bg-white shadow-md z-50 text-gray-800">
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="bg-green-50 py-10">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
