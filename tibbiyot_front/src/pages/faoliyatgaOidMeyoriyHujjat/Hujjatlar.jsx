import React, { useState } from "react";
//  component
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import { useGetFetch } from "../../hooks/useGetFetch";
import Loader from "../../components/loader/Loader";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import SidebarMarkazHaqida from "../../components/sidebar/SidebarMarkazHaqida";
import { baseUrl } from "../../services/http";

function Hujjatlar() {
  const month = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  const [page, setPage] = useState(1);
  function handlePagination(e, p) {
    setPage(p);
  }
  const url = `${baseUrl}/meyoriy_hujjat?page=${page}`;
  const { data, isPending, error } = useGetFetch(url);

  if (!data) {
    return <p>kelyapti</p>;
  }
  return (
    <div className="hujjat">
      <div className="desc">
        <div className="row">
          <h1 className="title">FAOLIYATGA OID ME’YORIY HUJJATLAR</h1>
          {isPending && <Loader />}
          {error && <h2>{error}</h2>}
          {data.results.map((hujjat) => {
            return (
              <div className="cardss" key={hujjat.id}>
                <h3>{hujjat.title}</h3>
                <Link to={hujjat.file} className="download" target="blank">
                  <i className="fa fa-download" aria-hidden="true"></i>{" "}
                  <span>Yuklab olish</span>
                </Link>
                <p>
                  <span>
                    {new Date(hujjat.created_at).getHours() < 10
                      ? "0" + new Date(hujjat.created_at).getHours()
                      : new Date(hujjat.created_at).getHours()}
                    :
                    {new Date(hujjat.created_at).getMinutes() < 10
                      ? "0" + new Date(hujjat.created_at).getMinutes()
                      : new Date(hujjat.created_at).getMinutes()}
                    :
                    {new Date(hujjat.created_at).getSeconds() < 10
                      ? "0" + new Date(hujjat.created_at).getSeconds()
                      : new Date(hujjat.created_at).getSeconds()}
                  </span>{" "}
                  <span>
                    {new Date(hujjat.created_at).getDate() < 10
                      ? "0" + new Date(hujjat.created_at).getDate()
                      : new Date(hujjat.created_at).getDate()}{" "}
                    {month[new Date(hujjat.created_at).getMonth()]}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        <Pagination
          count={data.total_pages}
          color="primary"
          onChange={handlePagination}
        ></Pagination>
      </div>
      <div className="layout">
        <SidebarMarkazHaqida />
        <OqXalat />
        <SmallContact />
      </div>
    </div>
  );
}

export default Hujjatlar;
