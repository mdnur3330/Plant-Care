













import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-green-50 text-gray-700 pt-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10 border-b border-gray-300 pb-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">HariCare</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            HariCare isn’t just a plant marketplace — it’s a vibrant community
            for plant lovers. Explore indoor and outdoor plants, get expert tips,
            and grow your green space — one leaf at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/terms" className="hover:text-green-600 transition">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-green-600 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-green-600 transition">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-left md:text-center">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Follow Us</h3>
          <div className="flex md:justify-center gap-4 text-green-700">
            <Link to="https://www.facebook.com/profile.php?id=100067795436674" target="_blank">
              <FaFacebook size={24} />
            </Link>
            <Link to="https://github.com/mdnur3330" target="_blank">
              <FaGithub size={24} />
            </Link>
            <Link to="https://www.linkedin.com/in/nur-alom1" target="_blank">
              <FaLinkedin size={24} />
            </Link>
            <Link to="https://www.youtube.com/@hmnurulalom9359" target="_blank">
              <FaYoutube size={24} />
            </Link>
            <Link to="https://wa.me/qr/HQUAFMEBDLC3G1" target="_blank">
              <FaWhatsapp size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-4 text-center text-sm text-gray-500">
        © 2025 HariCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

