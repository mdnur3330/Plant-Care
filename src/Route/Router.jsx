import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import AddPlant from "../Pages/AddPlant";
import AllPlants from "../Pages/AllPlants";
import Details from "../Pages/Details";
import MyPlants from "../Pages/MyPlants";
import Update from "../Pages/Update";
import Looding from "../Component/Looding";
import PrivateRoute from "../Component/PrivateRoute";
import TermsAndConditions from "../Component/TermsAndConditions";
import PrivacyPolucy from "../Component/PrivacyPolucy";
import ErrorPage from "../Component/ErrorPage";
import About from "../Pages/About";
import Dashboard from "../LayOut/DasbordLayout";
import DashboardOverview from "../Pages/OverVewPage";
import AllPlantDasbord from "../Pages/AllPlantDasbord";
import ContactUs from "../Pages/ContactUs";
import Support from "../Pages/Support";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () =>
          fetch("https://57-module-assintment-10.vercel.app/latest-plants"),
        hydrateFallbackElement: <Looding></Looding>,
      },
      {
        path: "all-plant",
        element: <AllPlants></AllPlants>,
        loader: () => fetch("https://57-module-assintment-10.vercel.app/plant"),
        hydrateFallbackElement: <Looding></Looding>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://57-module-assintment-10.vercel.app/plant/${params.id}`
          ),
      },
    
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://57-module-assintment-10.vercel.app/plant/${params.id}`
          ),
      },
      { path: "/terms", element: <TermsAndConditions></TermsAndConditions> },

      { path: "/login", element: <Login></Login> },

      { path: "/sign-up", element: <SignUp></SignUp> },

      { path: "/privacy", element: <PrivacyPolucy></PrivacyPolucy> },
      { path: "/support ", element: <Support></Support> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <DashboardOverview></DashboardOverview>
      },
      {
        path: "add-plant",
        element: <AddPlant></AddPlant>,
      },
      {
        path: "my-plant",
        element: <MyPlants></MyPlants>,
      },
       {
        path: "all-item",
        element: <AllPlantDasbord></AllPlantDasbord>,
        loader: () => fetch("https://57-module-assintment-10.vercel.app/plant"),
        hydrateFallbackElement: <Looding></Looding>,
      },

    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
