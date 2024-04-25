import AboutUs from "pages/AboutUs/AboutUs";
import Home from "pages/Home/Home";
import Portfolio from "pages/Portfolio/Portfolio";
import Contacts from "pages/Сontacts/Contacts";
import React from "react";
import { Route, Routes } from "react-router-dom";
import RestrictedSharedLayout from "../../components/SharedLayout/RestrictedSharedLayout/RestrictedSharedLayout";


const RestrictedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RestrictedSharedLayout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default RestrictedRoutes;
