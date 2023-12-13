import React, { useContext, useState } from "react";
import photo from "../../assets/images/Photo.png";
import { useGetFetch } from "../../hooks/useGetFetch";
import { baseUrl } from "../../services/http";
import "./fanlarBoyichaOquvResurslariAll.scss";
// image
import Accardion from "./Accardion";
import { Link } from "react-router-dom";
import { FanContext } from "../../context/OquvResurslar";

function FanlarBoyichaOquvResurslariAll() {
  const {
    data: yunalishlar,
    error,
    isPending,
  } = useGetFetch(`${baseUrl}/resurs/yunalish`);

  const {
    data: fanlar,
    error: fanError,
    isPending: fanIsPending,
  } = useGetFetch(`${baseUrl}/resurs/fan`);

  const { Fan, setFan } = useContext(FanContext);

  if (!yunalishlar || !fanlar) {
    return <p></p>;
  }
  return (
    <div className="fanlarBoyichaOquResurslarAll container">
      <h1 className="title">FANLAR BO’YICHA O’QUV RESURSLAR</h1>
      <div className="content">
        <div className="sidebarFan">
          <form>
            <input type="text" placeholder="Nomi bilan qidirish..." />
          </form>
          {yunalishlar.map((yunalish) => {
            return <Accardion key={yunalish.id} {...yunalish} />;
          })}
        </div>
        <div className="cardsBlok">
          {fanlar.map((fan) => {
            return (
              <Link
                to="/Fanlar-boyicha-oquv-resurslari/fan"
                key={fan.id}
                className="cardss"
                onClick={() => setFan(fan)}
              >
                <div className="imgBlok">
                  <img src={fan.rasm} />
                </div>
                <h4>{fan.name}</h4>
                {/* <p>
                  Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi
                </p> */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FanlarBoyichaOquvResurslariAll;
