import Footer from "components/Footer/Footer";
import React from "react";
import {  Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import css from "./RestrictedSharedLayout.module.css"

const RestrictedSharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RestrictedSharedLayout;
