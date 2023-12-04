import React from "react";
import { Outlet } from "react-router-dom";
import SidebarHome from "../../components/sidebar/SidebarHome";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
// import "./yangiliklar.scss";

function YangilikLayout() {
  return (
    <div className="yangiliklar container">
      <Outlet />
      <div className="sidebarNews">
        <SidebarHome />
        <OqXalat />
        <SmallContact />
      </div>
    </div>
  );
}

export default YangilikLayout;
