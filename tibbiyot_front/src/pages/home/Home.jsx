import React from "react";

// scss
import "./home.scss";
import OquvResurslar from "./OquvResurslar";
import KasbMaqsadVazifa from "./KasbMaqsadVazifa";
import KursAmalgaOshish from "./KursAmalgaOshish";
import VideoDarslik from "./VideoDarslik";

function Home() {
  return (
    <div className="home">
      {/* <OquvResurslar /> */}
      {/* <KasbMaqsadVazifa /> */}
      <KursAmalgaOshish />
      {/* <VideoDarslik /> */}
    </div>
  );
}

export default Home;
