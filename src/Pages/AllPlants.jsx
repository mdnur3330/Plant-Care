

import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { format } from "date-fns";
import { Helmet } from "react-helmet";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [sortBy, setSortBy] = useState("");

  const fetchPlants = async () => {
    try {
      const res = await axios.get(
        `https://57-module-assintment-10.vercel.app/plant${sortBy ? `?sort=${sortBy}` : ""}`
      );
      setPlants(res.data);
    } catch (error) {
      console.error("Error fetching plants:", error);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, [sortBy]);

  return (
    <div className="px-4 md:w-10/12 mx-auto py-10">
      <Helmet>
        <title>All Plants | Dashboard</title>
      </Helmet>

    
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 mb-3">Explore All Plants</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse through a curated collection of beautiful and healthy plants. Use the filter option to sort by care level or upcoming watering needs.
        </p>
      </div>

  
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <label className="font-semibold mr-2 text-gray-700">Sort By:</label>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">None</option>
            <option value="careLevel">Care Level</option>
            <option value="watering">Next Watering Date</option>
          </select>
        </div>
        <p className="border border-gray-200 px-5 py-2 rounded-lg bg-white shadow-sm text-gray-600">
          📅 {format(new Date(), "EEEE, MMMM dd, yyyy")}
        </p>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {plants.map((plant) => (
          <div
            key={plant._id}
            className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={plant.photo}
              alt={plant.plantName}
              className="w-full h-56 object-cover border-b"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {plant.plantName.length > 8
                  ? plant.plantName.slice(0, 8) + "..."
                  : plant.plantName}
              </h2>
              <div className="text-sm text-gray-500 mb-3">
                🌿 Healthy & ready to grow
              </div>
              <Link
                to={`/details/${plant._id}`}
                className="inline-block px-4 py-2 border border-green-600 text-green-600 font-medium rounded-md hover:bg-green-600 hover:text-white transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlants;

