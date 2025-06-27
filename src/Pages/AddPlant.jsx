// import React, { use } from "react";
// import { AuthContext } from "../Component/AuthProvider";
// import { ToastContainer, toast } from "react-toastify";
// import { Helmet } from "react-helmet";

// const AddPlant = () => {
//   const { user } = use(AuthContext);

//   const notify = () => toast.success("Plant added successfully!'");

//   const handelAddPlant = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const newPlant = Object.fromEntries(formData.entries());
//     console.log(newPlant);

//     fetch("https://57-module-assintment-10.vercel.app/plant", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(newPlant),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("after adding data ", data);
//         if (data.insertedId) {
//           notify();
//           form.reset();
//         }
//       });
//   };
//   return (
//     <div className="card w-full  shrink-0 shadow-2xl my-10">
//       <Helmet>
//         <title>Add Plant</title>
//       </Helmet>
//       <h3 className="text-center pt-3 text-4xl">AddPlant</h3>
//       <form onSubmit={handelAddPlant} className="mx-auto">
//         <div className="card-body grid md:grid-cols-2 gap-4 mx-auto">
//           <fieldset className="fieldset">
//             <label className="label md:text-2xl">User Name</label>
//             <input
//               type="text"
//               className="input text-xl bg-gray-400 "
//               name="userName"
//               value={user?.displayName}
//               placeholder="Name"
//             />
//           </fieldset>
//           <fieldset className="fieldset">
//             <label className="label md:text-2xl">User Email</label>
//             <input
//               type="email"
//               className="input text-xl bg-gray-400"
//               name="email"
//               value={user?.email}
//               placeholder="Email"
//             />
//           </fieldset>
//           <fieldset className="fieldset">
//             <label className="label md:text-2xl">Photo Url</label>
//             <input
//               type="text"
//               className="input text-xl bg-gray-400"
//               name="photo"
//               placeholder="Photo Url"
//             />
//           </fieldset>
//           <fieldset className="fieldset">
//             <label className="label md:text-2xl">Plant Name</label>
//             <input
//               type="text"
//               className="input text-xl bg-gray-400"
//               name="plantName"
//               placeholder="Plant Name"
//             />
//           </fieldset>
//           <fieldset className="fieldset">
//             <label className="label md:text-2xl">Last Watered Date</label>
//             <input
//               type="date"
//               className="input text-xl bg-gray-400"
//               name="lastWateredDate"
//               placeholder="Last Watered Date"
//             />
//           </fieldset>
//           <fieldset className="fieldset">
//             <label className="label md:text-2xl">Next Watering Date</label>
//             <input
//               type="date"
//               className="input text-xl bg-gray-400"
//               name="nextWateringDate"
//               placeholder="Next Watering Date"
//             />
//           </fieldset>
//           <fieldset className="fieldset">
//             <label className="label md:text-2xl">Watering Frequency</label>
//             <input
//               type="text"
//               className="input text-xl bg-gray-400"
//               name="wateringFrequency"
//               placeholder="(e.g., every 3 days)"
//             />
//           </fieldset>
//           <fieldset className="fieldset">
//             <label className="label md:text-2xl">Health Status</label>
//             <input
//               type="text"
//               className="input text-xl bg-gray-400"
//               name="healthStatus"
//               placeholder="(Needs Water, New Growth, Pest Infested)"
//             />
//           </fieldset>

//           <div className="flex gap-3">
//             <fieldset>
//               <label className="md:text-2xl">Plant Category:</label> <br />
//               <select
//                 name="plantCategory"
//                 className="border px-5 py-2 my-2 text-gray-400"
//               >
//                 <option selected>select</option>
//                 <option value={"Succulent"}>Succulent</option>
//                 <option value={"Shrub"}>Shrub</option>
//                 <option value={"Herb"}>Herb</option>
//                 <option value={"Flowering"}>Flowering</option>
//                 <option value={"Outdoor"}>Outdoor</option>
//                 <option value={"Outdoor"}>Indoor</option>
//                 <option value={"Tree"}>Tree</option>
//                 <option value={"Cactus"}>Cactus</option>
//                 <option value={"Bonsai"}>Bonsai</option>
//                 <option value={"Aquatic"}> Aquatic</option>
//                 <option value={"Climber"}>Climber</option>
//                 <option value={"Vegetable Plant"}>Vegetable Plant</option>
//               </select>
//             </fieldset>
//             <fieldset>
//               <label className="md:text-2xl">Plant Care Level:</label> <br />
//               <select
//                 name="plantCareLevel"
//                 className="border px-5 py-2 my-2 text-gray-400"
//               >
//                 <option value="">select</option>
//                 <option value="easy">easy</option>
//                 <option value="moderate">moderate</option>
//                 <option value="difficult">difficult</option>
//               </select>
//             </fieldset>
//           </div>
//           <fieldset>
//             <label className="md:text-2xl">Description</label>
//             <br />
//             <textarea
//               name="description"
//               id=""
//               className="border border-gray-500 pt-2 text-xl rounded-sm mt-2"
//               md:cols="45"
//               rows="4"
//               placeholder="Description heare..."
//             ></textarea>
//           </fieldset>
//           <div className="col-span-1 md:col-span-2">
//             <input
//               type="submit"
//               value="Add Plant"
//               className="btn bg-gray-600 w-full"
//             />
//           </div>
//         </div>
//         <ToastContainer />
//       </form>
//     </div>
//   );
// };

// export default AddPlant;












import React, { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const AddPlant = () => {
  const { user } = useContext(AuthContext);

  const notify = () => toast.success("🌱 Plant added successfully!");

  const handelAddPlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());

    fetch("https://57-module-assintment-10.vercel.app/plant", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          notify();
          form.reset();
        }
      });
  };

  return (
    <div className="bg-green-50 min-h-screen py-10 px-4 md:px-10">
      <Helmet>
        <title>Add Plant | HariCare</title>
      </Helmet>

      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-10 border border-green-100">
        <h3 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">
          🌿 Add a New Plant
        </h3>

        <form onSubmit={handelAddPlant}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* User Info */}
            <div>
              <label className="text-green-700 font-medium text-lg">User Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-md bg-green-100 mt-1"
                name="userName"
                value={user?.displayName}
                readOnly
              />
            </div>
            <div>
              <label className="text-green-700 font-medium text-lg">User Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-md bg-green-100 mt-1"
                name="email"
                value={user?.email}
                readOnly
              />
            </div>

            {/* Plant Info */}
            <div>
              <label className="text-green-700 font-medium text-lg">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="w-full p-3 rounded-md border border-green-200 mt-1"
              />
            </div>
            <div>
              <label className="text-green-700 font-medium text-lg">Plant Name</label>
              <input
                type="text"
                name="plantName"
                placeholder="Plant Name"
                className="w-full p-3 rounded-md border border-green-200 mt-1"
              />
            </div>

            <div>
              <label className="text-green-700 font-medium text-lg">Last Watered Date</label>
              <input
                type="date"
                name="lastWateredDate"
                className="w-full p-3 rounded-md border border-green-200 mt-1"
              />
            </div>
            <div>
              <label className="text-green-700 font-medium text-lg">Next Watering Date</label>
              <input
                type="date"
                name="nextWateringDate"
                className="w-full p-3 rounded-md border border-green-200 mt-1"
              />
            </div>

            <div>
              <label className="text-green-700 font-medium text-lg">Watering Frequency</label>
              <input
                type="text"
                name="wateringFrequency"
                placeholder="e.g., every 3 days"
                className="w-full p-3 rounded-md border border-green-200 mt-1"
              />
            </div>
            <div>
              <label className="text-green-700 font-medium text-lg">Health Status</label>
              <input
                type="text"
                name="healthStatus"
                placeholder="e.g., Needs Water"
                className="w-full p-3 rounded-md border border-green-200 mt-1"
              />
            </div>

     
            <div>
              <label className="text-green-700 font-medium text-lg">Plant Category</label>
              <select
                name="plantCategory"
                className="w-full p-3 rounded-md border border-green-200 mt-1 text-gray-600"
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
            <div>
              <label className="text-green-700 font-medium text-lg">Plant Care Level</label>
              <select
                name="plantCareLevel"
                className="w-full p-3 rounded-md border border-green-200 mt-1 text-gray-600"
              >
                <option value="">Select</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>

           
            <div className="md:col-span-2">
              <label className="text-green-700 font-medium text-lg">Description</label>
              <textarea
                name="description"
                rows="4"
                className="w-full p-3 rounded-md border border-green-200 mt-1"
                placeholder="Write plant details here..."
              ></textarea>
            </div>
          </div>

          <div className="mt-8">
            <input
              type="submit"
              value="Add Plant"
              className="w-full cursor-pointer bg-green-700 text-white font-bold py-3 rounded-md hover:bg-green-800 transition"
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddPlant;

