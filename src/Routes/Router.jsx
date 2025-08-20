import { createBrowserRouter } from "react-router";
import Error from "../Component/Error";
import Home from "../Component/Home";
import MainLayout from "../Layout/MainLayout";
import AddRoommate from "../Component/AddRoommate";
import UpdateRoommate from "../Component/UpdateRoommate";
import BrowseListing from "../Component/BrowseListing";
import DetailRoommate from "../Component/DetailRoommate";
import Login from "../Component/Login";
import Register from "../Component/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/roommates"),
      },

      {
        path: "/addRoommate",
        element: <AddRoommate></AddRoommate>,
      },

      {
        path: "/roommates/browse-listing",
        element: <BrowseListing></BrowseListing>,
        loader: () => fetch("http://localhost:5000/roommates/browse-listing"),
      },
      {
        path: "/roommates/browse-listing/:id",
        element: <DetailRoommate></DetailRoommate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/roommates/browse-listing/${params.id}`),
      },
      {
        path: "/updateRoommate",
        element: <UpdateRoommate></UpdateRoommate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/*",
    element: <Error></Error>,
  },
]);
