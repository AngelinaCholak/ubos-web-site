import React from "react";
import { Route, Routes } from "react-router-dom";
import RestrictedSharedLayout from "../../components/SharedLayout/RestrictedSharedLayout/RestrictedSharedLayout";


const RestrictedRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<RestrictedSharedLayout />}>
              
      </Route>
    </Routes>
  );
};

export default RestrictedRoutes;
