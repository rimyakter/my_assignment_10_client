import { createBrowserRouter } from "react-router";
import Error from "../Component/Error";
import Home from "../Component/Home";
import MainLayout from "../Layout/MainLayout";
import AddRoommate from "../Component/AddRoommate";

import BrowseListing from "../Component/BrowseListing";
import DetailRoommate from "../Component/DetailRoommate";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Users from "../Component/Users";
import PrivateRouter from "../Context/PrivateRoute";
import MyListings from "../Component/MyListings";
import UpdatePost from "../Component/UpdatePost";
import Loading from "../Component/Loading";

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
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: "/addRoommate",
        element: (
          <PrivateRouter>
            <AddRoommate></AddRoommate>
          </PrivateRouter>
        ),
      },

      {
        path: "/roommates/browse-listing",
        element: <BrowseListing></BrowseListing>,
        loader: () => fetch("http://localhost:5000/roommates/browse-listing"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/roommates/browse-listing/:id",
        element: (
          <PrivateRouter>
            <DetailRoommate></DetailRoommate>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/roommates/browse-listing/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: "/my-listings",
        element: (
          <PrivateRouter>
            <MyListings></MyListings>
          </PrivateRouter>
        ),
      },
      {
        path: "/updatePost/:id",
        element: (
          <PrivateRouter>
            <UpdatePost></UpdatePost>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/roommates/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users/"),
        hydrateFallbackElement: <Loading></Loading>,
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
