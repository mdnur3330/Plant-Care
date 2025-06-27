
import React from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 min-h-screen py-10 px-4 md:px-20 font-sans">
      <Helmet>
        <title>About Us | HariCare</title>
        <meta
          name="description"
          content="Learn more about HariCare — our mission, features, team, and how to contact us for any plant care needs."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
          About HariCare 🌿
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Welcome to <span className="font-semibold text-green-800">HariCare</span> — your
          companion in keeping your plants healthy and your space vibrant. We're more than just a tracker — we're your plant's digital caretaker.
        </p>

        <div className="bg-white shadow-md rounded-xl p-6 md:p-10 text-left space-y-10 border border-green-100">
       
          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-2">🌱 Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At HariCare, our mission is to support plant lovers by offering an easy-to-use platform
              that helps you care for your plants. From reminders to expert tips — we’re here to help
              you grow your green family, one plant at a time.
            </p>
          </section>

       
          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-2">💡 What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li>🪴 Simple plant management dashboard</li>
              <li>📅 Watering & care reminders with notifications</li>
              <li>🧩 Filter and sort by care level, category, or name</li>
              <li>🌗 Light & dark theme switcher for personalized UX</li>
              <li>🔐 Secure user login with individual plant data</li>
            </ul>
          </section>

        
          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-2">👨‍💻 Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              We are a team of developers and nature enthusiasts from Bangladesh. This project is
              built as a part of a MERN stack development course, aimed at delivering a practical
              experience in building full-stack applications with user authentication, CRUD features,
              and mobile-first design.
            </p>
          </section>
        </div>

      

    
        <section className="mt-10 mb-6">
          <div className="bg-white shadow-md rounded-xl p-6 md:p-10 border border-green-100 text-left max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">🛠️ Support</h2>
            <p className="text-gray-700 mb-2">
              Facing issues or need help? Our support team is ready to assist you. Email us at:{" "}
              <a
                href="mailto:support@haricare.com"
                className="text-green-700 underline hover:text-green-900"
              >
                nuralom.web@gmail.com
              </a>
            </p>
            <p className="text-gray-600">
              Support hours: Sunday–Thursday, 10am–6pm (GMT+6)
            </p>
          </div>
        </section>

        <footer className="text-gray-500 mt-10 text-sm">
          &copy; {new Date().getFullYear()} HariCare. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
