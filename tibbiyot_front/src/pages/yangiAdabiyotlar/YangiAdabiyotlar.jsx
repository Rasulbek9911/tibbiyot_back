import React, { useState } from "react";
// scss
import "./yangiAdabiyotlar.scss";
// images
import medic from "../../assets/images/medic.png";
// components

import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import SidebarFaoliyat from "../../components/sidebar/SidebarFaoliyat";
import { useGetFetch } from "../../hooks/useGetFetch";
import { baseUrl } from "../../services/http";
import { Pagination } from "@mui/material";

function YangiAdabiyotlar() {
  const [page, setPage] = useState(1);
  function handlePagination(e, p) {
    setPage(p);
  }
  const { data } = useGetFetch(`${baseUrl}/adabiyot?page=${page}`);
  if (!data) {
    return <p></p>;
  }

  return (
    <div className="yangiAdabiyotlar container">
      <div className="content">
        <div className="desc">
          <h1 className="title">OTMlar faoliyatga oid yangi adabiyotlar</h1>
          <div className="row">
            {data.results &&
              data.results.map((book) => {
                return (
                  <div key={book.id} className="cardss">
                    <h3 className="name">
                      <span>Fan nomi:</span>
                      <p>{book.title}</p>
                    </h3>
                    <h3 className="author">
                      <span>Mualliflar:</span>
                      <p>{book.muallif}</p>
                    </h3>
                    <h3 className="date">
                      <span>Nashr etilgan yili:</span>
                      <p>{new Date(book.nashr_yil).getFullYear()}</p>
                    </h3>
                  </div>
                );
              })}
          </div>
          <hr style={{ marginBottom: "40px" }} />
          <Pagination
            count={data.total_pages}
            color="primary"
            onChange={handlePagination}
          ></Pagination>
        </div>
        <div className="layout">
          <SidebarFaoliyat />
          <OqXalat />
          <SmallContact />
        </div>
      </div>
    </div>
  );
}

export default YangiAdabiyotlar;
