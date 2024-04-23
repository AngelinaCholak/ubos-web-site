
import React from "react";
import {  Outlet } from "react-router-dom";
import Header from "../../Header/Header";

const RestrictedSharedLayout = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/">Головна</NavLink>
    //     </li>
    
    //   </ul>
    //   <Outlet />
    // </nav>
  );
};

export default RestrictedSharedLayout;
