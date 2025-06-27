







import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { format } from "date-fns";
import { Helmet } from "react-helmet";

const AllPlantDasbord = () => {
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
    <div className="bg-green-50 min-h-screen py-10 px-4 md:px-10">
      <Helmet>
        <title>All Plants | HariCare</title>
      </Helmet>

      <div className="max-w-6xl mx-auto bg-white border border-green-100 shadow-md rounded-xl p-6 md:p-10">
        <div className="flex justify-between items-center mb-6 flex-col md:flex-row gap-4">
          <h2 className="text-3xl font-bold text-green-800">🌿 All Plants</h2>
          <div>
            <label className="text-green-700 font-medium mr-2">Sort By:</label>
            <select
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-green-200 text-gray-700 px-4 py-2 rounded-md bg-white"
            >
              <option value="">None</option>
              <option value="careLevel">Care Level</option>
              <option value="watering">Next Watering Date</option>
            </select>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          📅 Current Date:{" "}
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
            {format(new Date(), "EEEE, MMMM dd, yyyy")}
          </span>
        </p>

        <div className="overflow-x-auto">
          <table className="table w-full text-left text-sm md:text-lg">
            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3">Photo</th>
                <th className="p-3">Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Watering Frequency</th>
                <th className="p-3">Show Details</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant) => (
                <tr
                  key={plant._id}
                  className="hover:bg-green-50 transition duration-200 border-b border-green-100"
                >
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full overflow-hidden border border-green-200">
                        <img src={plant.photo} alt="plant" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-gray-800">{plant.plantName}</td>
                  <td className="p-3 text-gray-700">{plant.plantCategory}</td>
                  <td className="p-3 text-gray-700">{plant.wateringFrequency}</td>
                  <td className="p-3">
                    <Link
                      to={`/details/${plant._id}`}
                      className="inline-block px-4 py-2 border border-green-300 text-green-700 rounded-md hover:bg-green-100 transition"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPlantDasbord;
