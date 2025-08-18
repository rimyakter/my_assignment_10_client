import React from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  const roommatesData = useLoaderData();
  const { title, location, rentAmount, roomType, availability } = roommatesData;

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
