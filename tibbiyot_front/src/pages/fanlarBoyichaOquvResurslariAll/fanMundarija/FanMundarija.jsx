import React from "react";
// scss
import "./fanMundarija.scss";
// images
import photo from "../../../assets/images/Photo.png";
import FanAccardion from "./FanAccardion";

function FanMundarija() {
  const arr = [
    { id: 1, title: "title1" },
    { id: 2, title: "title2" },
    { id: 3, title: "title3" },
    { id: 4, title: "title4" },
    { id: 5, title: "title5" },
    { id: 6, title: "title6" },
    { id: 7, title: "title7" },
  ];
  return (
    <div className="fanlarMundarija container">
      <h1>FANLAR BO’YICHA O’QUV RESURSLAR</h1>
      <div className="header">
        <div className="image">
          <img src={photo} />
        </div>
        <div className="desc">
          <h1 className="title">Farmakologiya va repseptura asoslari</h1>
          <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
        </div>
      </div>
      <div className="main">
        {arr.map((item) => {
          return <FanAccardion key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default FanMundarija;
