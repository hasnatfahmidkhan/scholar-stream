import React from "react";
import Navbar from "../../pages/shared/Navbar/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="bg-base-200">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
