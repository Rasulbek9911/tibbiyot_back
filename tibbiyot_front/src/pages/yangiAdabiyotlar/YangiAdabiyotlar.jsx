import React from "react";
// scss
import "./yangiAdabiyotlar.scss";
// images
import medic from "../../assets/images/medic.png";
// components

import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import usePagenation from "../../components/pagenation/usePagenation";
import SidebarFaoliyat from "../../components/sidebar/SidebarFaoliyat";

function YangiAdabiyotlar() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { pagenation, currentItems } = usePagenation(url, 10);
  return (
    <div className="yangiAdabiyotlar container">
      <div className="content">
        <div className="desc">
          <h1 className="title">OTMlar faoliyatga oid yangi adabiyotlar</h1>
          <div className="row">
            {currentItems.map((book) => {
              return (
                <div className="cardss">
                  <div className="desc">
                    <h3>{book.title}</h3>
                    <button className="download">
                      <i className="fa fa-download" aria-hidden="true"></i>{" "}
                      <span>Yuklab olish</span>
                    </button>
                    <p>
                      <span>18:00</span> <span>05 noyabr</span>
                    </p>
                  </div>
                  <div className="img">
                    <img src={medic} />
                  </div>
                </div>
              );
            })}
          </div>
          <hr style={{ marginBottom: "40px" }} />
          {pagenation}
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
