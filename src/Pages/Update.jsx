

import React, { use } from "react";
import { AuthContext } from "../Component/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Update = () => {
  const plant = useLoaderData();
  const { user } = use(AuthContext);

  const handeUpdatePlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());

    fetch(`https://57-module-assintment-10.vercel.app/plant/${plant._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          form.reset();
          Swal.fire({
            title: "Updated!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="card w-full shadow-2xl my-10 p-10 bg-green-50">
      <Helmet>
        <title>Update Plant</title>
      </Helmet>

      <h3 className="text-center text-5xl font-bold text-green-700 mb-10">🌱 Update Plant</h3>

      <form onSubmit={handeUpdatePlant} className="mx-auto">
        <div className="card-body grid md:grid-cols-2 gap-6">
          <fieldset>
            <label className="text-xl font-medium text-green-800">User Name</label>
            <input
              type="text"
              className="input input-bordered bg-green-100 text-lg"
              name="userName"
              value={user.displayName}
              readOnly
            />
          </fieldset>
          <fieldset>
            <label className="text-xl font-medium text-green-800">User Email</label>
            <input
              type="email"
              className="input input-bordered bg-green-100 text-lg"
              name="email"
              value={user.email}
              readOnly
            />
          </fieldset>

          <fieldset>
            <label className="text-xl font-medium text-green-800">Photo URL</label>
            <input
              type="text"
              className="input input-bordered bg-green-100 text-lg"
              name="photo"
              defaultValue={plant.photo}
              placeholder="Photo URL"
            />
          </fieldset>
          <fieldset>
            <label className="text-xl font-medium text-green-800">Plant Name</label>
            <input
              type="text"
              className="input input-bordered bg-green-100 text-lg"
              name="plantName"
              defaultValue={plant.plantName}
              placeholder="Plant Name"
            />
          </fieldset>

          <fieldset>
            <label className="text-xl font-medium text-green-800">Last Watered Date</label>
            <input
              type="date"
              className="input input-bordered bg-green-100 text-lg"
              name="lastWateredDate"
              defaultValue={plant.lastWateredDate}
            />
          </fieldset>
          <fieldset>
            <label className="text-xl font-medium text-green-800">Next Watering Date</label>
            <input
              type="date"
              className="input input-bordered bg-green-100 text-lg"
              name="nextWateringDate"
              defaultValue={plant.nextWateringDate}
            />
          </fieldset>

          <fieldset>
            <label className="text-xl font-medium text-green-800">Watering Frequency</label>
            <input
              type="text"
              className="input input-bordered bg-green-100 text-lg"
              name="wateringFrequency"
              defaultValue={plant.wateringFrequency}
              placeholder="e.g. Every 3 days"
            />
          </fieldset>
          <fieldset>
            <label className="text-xl font-medium text-green-800">Health Status</label>
            <input
              type="text"
              className="input input-bordered bg-green-100 text-lg"
              name="healthStatus"
              defaultValue={plant.healthStatus}
              placeholder="e.g. Healthy, Needs Attention"
            />
          </fieldset>

          <fieldset className="md:col-span-2">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1">
                <label className="text-xl font-medium text-green-800">Plant Category</label>
                <select
                  defaultValue={plant.plantCategory}
                  name="plantCategory"
                  className="select select-bordered bg-green-100 text-lg w-full"
                >
                  <option value="">Select</option>
                  <option value="Succulent">Succulent</option>
                  <option value="Shrub">Shrub</option>
                  <option value="Herb">Herb</option>
                  <option value="Flowering">Flowering</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Indoor">Indoor</option>
                  <option value="Tree">Tree</option>
                  <option value="Cactus">Cactus</option>
                  <option value="Bonsai">Bonsai</option>
                  <option value="Aquatic">Aquatic</option>
                  <option value="Climber">Climber</option>
                  <option value="Vegetable Plant">Vegetable Plant</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="text-xl font-medium text-green-800">Care Level</label>
                <select
                  defaultValue={plant.plantCareLevel}
                  name="plantCareLevel"
                  className="select select-bordered bg-green-100 text-lg w-full"
                >
                  <option value="">Select</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="difficult">Difficult</option>
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset className="md:col-span-2">
            <label className="text-xl font-medium text-green-800">Description</label>
            <textarea
              defaultValue={plant.description}
              name="description"
              className="textarea textarea-bordered bg-green-100 text-lg w-full mt-2"
              rows="4"
              placeholder="Write a short description of the plant..."
            ></textarea>
          </fieldset>

          <div className="md:col-span-2">
            <input
              type="submit"
              value="✅ Update Plant"
              className="btn bg-green-700 hover:bg-green-800 text-white text-xl w-full mt-4"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
