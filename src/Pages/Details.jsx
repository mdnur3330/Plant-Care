
import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";

const Details = () => {
  const plant = useLoaderData();
  console.log(plant);

  return (
    <div className="min-h-screen px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <Helmet>
        <title>{plant.plantName} | HariCare Details</title>
        <meta
          name="description"
          content={`Details of ${plant.plantName}, including care instructions, watering frequency, health status, and more.`}
        />
      </Helmet>

      <div className="grid gap-10 lg:grid-cols-2 bg-white rounded-xl shadow-md border border-green-100 p-8">
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 font-sans text-3xl font-semibold tracking-tight text-green-800 sm:text-4xl sm:leading-none">
            Plant Name: {plant.plantName}
          </h2>

          <div className="mb-8 text-gray-700 leading-relaxed">
            <p className="font-semibold text-green-700 mb-2">Description:</p>
            <p className="break-words">{plant.description}</p>
          </div>

          <p className="mb-4 text-sm font-bold tracking-widest uppercase text-green-700">
            Features
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ul className="space-y-4 text-green-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckIcon />
                Watering Frequency: {plant.wateringFrequency}
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Health Status: {plant.healthStatus}
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Plant Category: {plant.plantCategory}
              </li>
            </ul>

            <ul className="space-y-4 text-green-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckIcon />
                Plant Care Level: {plant.plantCareLevel}
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Last Watered Date: {plant.lastWateredDate}
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Next Watering Date: {plant.nextWateringDate}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <img
            className="object-cover w-full h-56 rounded-lg shadow-lg sm:h-96 border border-green-200"
            src={plant.photo}
            alt={`${plant.plantName}`}
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Check Mark Icon with green color
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Details;

