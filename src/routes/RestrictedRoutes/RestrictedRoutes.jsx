import AboutUs from "pages/AboutUs/AboutUs";
import CorporativeWebsite from "pages/OurSpecialtyPages/CorporativeWebsite/CorporativeWebsite";
import Home from "pages/Home/Home";
import InternetShops from "pages/OurSpecialtyPages/InternetShops/InternetShops";
import Portfolio from "pages/Portfolio/Portfolio";
import Contacts from "pages/Сontacts/Contacts";
import React from "react";
import { Route, Routes } from "react-router-dom";
import RestrictedSharedLayout from "../../components/SharedLayout/RestrictedSharedLayout/RestrictedSharedLayout";
import LandingPage from "pages/OurSpecialtyPages/LandingPage/LandingPage";
import TemplateWebsite from "pages/OurSpecialtyPages/TemplateWebsite/TemplateWebsite";
import TemplateECommerce from "pages/OurSpecialtyPages/TemplateECommerce/TemplateECommerce";
import MobileApplications from "pages/OurSpecialtyPages/MobileApplications/MobileApplications";


const RestrictedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RestrictedSharedLayout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="internet-shops" element={<InternetShops />} />
        <Route path="corporative-website" element={<CorporativeWebsite />} />
        <Route path="landing-page" element={<LandingPage />} />
        <Route path="u-corp" element={<TemplateWebsite />} />
        <Route path="u-commerce" element={<TemplateECommerce />} />
        <Route path="mobile-applications" element={<MobileApplications />} />
      </Route>
    </Routes>
  );
};

export default RestrictedRoutes;
