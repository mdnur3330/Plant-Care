

import React from 'react';

const HowWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
 
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          🌿 How HariCare Works
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Discover how HariCare makes plant care easy, organized, and enjoyable — even for beginners!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">

          <div className="p-6 border border-green-100 rounded-lg bg-white shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">1. Create Account</h3>
            <p className="text-gray-600">Sign up to manage your plant collection in one place.</p>
          </div>


          <div className="p-6 border border-green-100 rounded-lg bg-white shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">2. Add Plants</h3>
            <p className="text-gray-600">Enter plant info like care level, photo, and watering needs.</p>
          </div>

  
          <div className="p-6 border border-green-100 rounded-lg bg-white shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">3. Get Reminders</h3>
            <p className="text-gray-600">Stay on track with timely watering notifications.</p>
          </div>


          <div className="p-6 border border-green-100 rounded-lg bg-white shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">4. Explore & Grow</h3>
            <p className="text-gray-600">Browse, learn, and enjoy growing your indoor jungle.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
