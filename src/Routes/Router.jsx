import { createBrowserRouter } from "react-router";
import Error from "../Component/Error";
import Home from "../Component/Home";
import MainLayout from "../Layout/MainLayout";
import AddRoommate from "../Component/AddRoommate";
import UpdateRoommate from "../Component/UpdateRoommate";

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
        path: "/updateRoommate",
        element: <UpdateRoommate></UpdateRoommate>,
      },
    ],
  },

  {
    path: "/*",
    element: <Error></Error>,
  },
]);
