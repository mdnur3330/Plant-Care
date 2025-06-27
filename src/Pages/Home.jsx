

import React from "react";
import { Link, useLoaderData } from "react-router";
// import Swal from "sweetalert2";
// import { AuthContext } from "../Component/AuthProvider";
import Hero from "./Hero";
import HomeSection from "./HomeSection";
import TopRatingBestSelling from "./TopRatingBestSelling";
import { Helmet } from "react-helmet";
import HowWorks from "./HowWorks";
import TipsForCustomer from "./TipsForCustomer";

const Home = () => {
  const initialPlnats = useLoaderData();
  console.log(initialPlnats);

  return (
    <div>
      <Helmet>
        <title>Home | GreenLeaf Plant Store</title>
      </Helmet>

 
      <Hero />

  <HomeSection />


      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-6 lg:px-8 lg:py-20">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            🌱 Our Latest Plants Collection
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover the newest additions to our plant family! Whether you're a beginner or a seasoned plant parent, we’ve got something fresh and beautiful just for you.
          </p>
        </div>


        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {initialPlnats.map((plant) => (
            <div
              key={plant._id}
              className="bg-white border border-gray-300 relative overflow-hidden transition duration-300 transform rounded shadow-lg hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={plant.photo}
                className="object-cover w-full h-64 border-b border-gray-300"
                alt={plant.plantName}
              />
              <div className="p-5">
                <div className="mb-2 text-sm font-semibold tracking-wide uppercase text-gray-600">
                  Name: <span className="text-gray-800">{plant.plantName}</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <Link
                    to={`/details/${plant._id}`}
                    className="px-4 py-2 text-sm font-medium text-green-700 border border-green-600 rounded-md hover:bg-green-600 hover:text-white transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   
      <section className="bg-gray-50 py-12">
        <div className="max-w-screen-xl mx-auto px-4">
      
          <HowWorks />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
         
          <TopRatingBestSelling />
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
            💡 Tips For Plant Lovers
          </h2>
          <TipsForCustomer />
        </div>
      </section>
    </div>
  );
};

export default Home;

