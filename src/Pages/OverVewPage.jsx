import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider";

const DashboardOverview = () => {
    const {user} = useContext(AuthContext)
  // Dummy Data (You can replace with API or context

  const totalItems = 40;
  const myItems = 15;
  const savedItems = 10;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      {/* User Info */}
      <div className="flex items-center gap-4 mb-10">
          <img
              className="w-10 h-10 rounded-full"
              alt="User"
              src={`${
                user
                  ? user.photoURL
                  : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }`}
              title={user?.displayName}
            />
        <div>
          <p className="text-lg font-semibold text-gray-800">{user?.displayName}</p>
          <p className="text-sm text-gray-600">{user?.email}</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow border">
          <h3 className="text-sm text-gray-500">Total Items</h3>
          <p className="text-2xl font-bold text-blue-800">{totalItems}</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border">
          <h3 className="text-sm text-gray-500">My Items</h3>
          <p className="text-2xl font-bold text-blue-800">{myItems}</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border">
          <h3 className="text-sm text-gray-500">Saved Items</h3>
          <p className="text-2xl font-bold text-blue-800">{savedItems}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
