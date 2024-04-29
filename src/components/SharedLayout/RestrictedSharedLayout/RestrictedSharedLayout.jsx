import Footer from "components/Footer/Footer";
import React from "react";
import {  Outlet } from "react-router-dom";
import Header from "../../Header/Header";

const RestrictedSharedLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RestrictedSharedLayout;
