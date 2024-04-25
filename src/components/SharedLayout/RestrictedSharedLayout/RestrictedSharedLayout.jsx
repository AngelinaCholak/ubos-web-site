import React from "react";
import {  Outlet } from "react-router-dom";
import Header from "../../Header/Header";

const RestrictedSharedLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default RestrictedSharedLayout;
