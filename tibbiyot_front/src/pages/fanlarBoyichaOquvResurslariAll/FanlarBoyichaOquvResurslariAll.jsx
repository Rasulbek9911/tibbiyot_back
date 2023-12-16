import React, { useContext, useState } from "react";
import photo from "../../assets/images/Photo.png";
import { useGetFetch } from "../../hooks/useGetFetch";
import { baseUrl } from "../../services/http";
import "./fanlarBoyichaOquvResurslariAll.scss";
// image
import Accardion from "./Accardion";
import { Link } from "react-router-dom";
import { FanContext } from "../../context/OquvResurslar";
import { Pagination } from "@mui/material";

function FanlarBoyichaOquvResurslariAll() {
  const [page, setPage] = useState(1);
  function handlePagination(e, p) {
    setPage(p);
  }

  const {
    data: yunalishlar,
    error,
    isPending,
  } = useGetFetch(`${baseUrl}/resurs/yunalish`);

  const {
    data: fanlar,
    error: fanError,
    isPending: fanIsPending,
  } = useGetFetch(`${baseUrl}/resurs/fan?page=${page}`);

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
          {fanlar.results.map((fan) => {
            return (
              <Link
                to={`/Fanlar-boyicha-oquv-resurslari/${fan.id}`}
                key={fan.id}
                className="cardss"
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
          {/* <div className="ch"></div> */}
          <hr className="hr" />
          <Pagination
            count={fanlar.total_pages}
            color="primary"
            onChange={handlePagination}
          ></Pagination>
        </div>
      </div>
    </div>
  );
}

export default FanlarBoyichaOquvResurslariAll;
