import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Header></Header>
      {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
