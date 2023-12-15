import React from "react";
// scss
import "./fanMundarija.scss";
// images
import FanAccardion from "./FanAccardion";
import { useGetFetch } from "../../../hooks/useGetFetch";
import { baseUrl } from "../../../services/http";
import { useParams } from "react-router-dom";

function FanMundarija() {
  const { id } = useParams();

  const {
    data: Fan,
    error,
    isPending,
  } = useGetFetch(`${baseUrl}/resurs/fan/${id}`);
  if (!Fan) {
    return <p></p>;
  }
  return (
    <div className="fanlarMundarija container">
      <h1>FANLAR BO’YICHA O’QUV RESURSLAR</h1>
      <div className="header">
        <div className="image">
          <img src={Fan.rasm} />
        </div>
        <div className="desc">
          <h1 className="title">{Fan.name}</h1>
          <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
        </div>
      </div>
      <div className="main">
        {Fan.mavzus.map((mavzu) => {
          return <FanAccardion mavzu={mavzu} key={mavzu.id} />;
        })}
      </div>
    </div>
  );
}

export default FanMundarija;
