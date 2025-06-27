

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Component/AuthProvider";
import { Helmet } from "react-helmet";

const MyPlants = () => {
  const {user, handelDelete} = useContext(AuthContext)

  const [plants, setPlants] = useState();


useEffect(() => {
  if (!user?.email) return; 

  const fetchData = async () => {
    try {
      const res = await fetch(`https://57-module-assintment-10.vercel.app/plant-by-email?email=${user.email}`);
      const data = await res.json();
      console.log("After adding data:", data);
      setPlants(data)
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };

  fetchData();
}, [user?.email]);




  const handelPlantDelete = (id) => {
    handelDelete(id)
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const newPlants = plants.filter((plant) => plant._id !== id);
          setPlants(newPlants);
          Swal.fire({
            title: "Deleted!",
            text: "Your plant has been deleted successfully.",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        console.log("Delete canceled or failed:", err);
      });
  };

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl">
      <Helmet>
        <title>My Plants</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">My Plants</h2>

      {plants?.length < 1 ? (
        <div className="text-center py-20">
          <h3 className="text-2xl text-gray-600 mb-4">🌱 You haven’t added any plants yet!</h3>
          <p className="text-gray-500">Start your plant collection by adding a new plant now.</p>
          <Link
            to="/dashboard/add-plant"
            className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Add Your First Plant
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {plants?.map((plant) => (
            <div
              key={plant._id}
              className="bg-white rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={plant.photo}
                alt={plant.plantName || "Plant"}
                className="w-full h-64 object-cover border-b"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">Last Watered: {plant.lastWateredDate}</p>
                <h3 className="text-xl font-semibold text-gray-800">{plant.plantName}</h3>
                <p className="text-gray-600 mt-2 mb-4 h-14 overflow-hidden">{plant.description}</p>
                <div className="flex justify-between">
                  <Link
                    to={`/update/${plant._id}`}
                    className="px-4 py-2 text-sm border border-green-600 text-green-700 rounded hover:bg-green-100 transition"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handelPlantDelete(plant._id)}
                    className="px-4 py-2 text-sm border border-red-500 text-red-600 rounded hover:bg-red-100 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlants;
