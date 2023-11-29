import React from "react";
// scss
import "./yangiAdabiyotlar.scss";
// images
import medic from "../../assets/images/medic.png";
// components

import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import SidebarFaoliyat from "../../components/sidebar/SidebarFaoliyat";

function YangiAdabiyotlar() {
  return (
    <div className="yangiAdabiyotlar container">
      <div className="content">
        <div className="desc">
          <h1 className="title">OTMlar faoliyatga oid yangi adabiyotlar</h1>
          <div className="row">
            <div className="cardss">
              <h3 className="name">
                <span>Fan nomi:</span> Лаборатория ишига кириш
              </h3>
              <h3 className="author">
                <span>Mualliflar:</span>Kurbonova Z.Ch., Babadjanova Sh.A.
              </h3>
              <h3 className="date">
                <span>Nashr etilgan yili:</span> 2023 yil
              </h3>
            </div>
            <div className="cardss">
              <h3 className="name">
                <span>Fan nomi:</span> Лаборатория ишига кириш
              </h3>
              <h3 className="author">
                <span>Mualliflar:</span>Kurbonova Z.Ch., Babadjanova Sh.A.
              </h3>
              <h3 className="date">
                <span>Nashr etilgan yili:</span> 2023 yil
              </h3>
            </div>
            <div className="cardss">
              <h3 className="name">
                <span>Fan nomi:</span> Лаборатория ишига кириш
              </h3>
              <h3 className="author">
                <span>Mualliflar:</span>Kurbonova Z.Ch., Babadjanova Sh.A.
              </h3>
              <h3 className="date">
                <span>Nashr etilgan yili:</span> 2023 yil
              </h3>
            </div>
            <div className="cardss">
              <h3 className="name">
                <span>Fan nomi:</span> Лаборатория ишига кириш
              </h3>
              <h3 className="author">
                <span>Mualliflar:</span>Kurbonova Z.Ch., Babadjanova Sh.A.
              </h3>
              <h3 className="date">
                <span>Nashr etilgan yili:</span> 2023 yil
              </h3>
            </div>
            <div className="cardss">
              <h3 className="name">
                <span>Fan nomi:</span> Лаборатория ишига кириш
              </h3>
              <h3 className="author">
                <span>Mualliflar:</span>Kurbonova Z.Ch., Babadjanova Sh.A.
              </h3>
              <h3 className="date">
                <span>Nashr etilgan yili:</span> 2023 yil
              </h3>
            </div>
            <div className="cardss">
              <h3 className="name">
                <span>Fan nomi:</span> Лаборатория ишига кириш
              </h3>
              <h3 className="author">
                <span>Mualliflar:</span>Kurbonova Z.Ch., Babadjanova Sh.A.
              </h3>
              <h3 className="date">
                <span>Nashr etilgan yili:</span> 2023 yil
              </h3>
            </div>
          </div>
          <hr style={{ marginBottom: "40px" }} />
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
