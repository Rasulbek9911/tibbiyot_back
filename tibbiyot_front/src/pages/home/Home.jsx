import React from "react";

// scss
import "./home.scss";
import OquvResurslar from "./OquvResurslar";
import KasbMaqsadVazifa from "./KasbMaqsadVazifa";
import KursAmalgaOshish from "./KursAmalgaOshish";
import VideoDarslik from "./VideoDarslik";
import HomeNews from "./HomeNews";
import SidebarHome from "../../components/sidebar/SidebarHome";
import OqXalat from "../umumiyMalumot/components/OqXalat";

function Home() {
  return (
    <div className="home">
      <div className="boshSahifa container">
        <HomeNews />
        <div className="homeSidebar">
          <SidebarHome />
          <OqXalat />
        </div>
      </div>
      <KursAmalgaOshish />
    </div>
  );
}

export default Home;
