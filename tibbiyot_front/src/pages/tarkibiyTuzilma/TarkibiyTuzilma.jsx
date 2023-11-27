import React from "react";
import "./tarkibiyTuzilma.scss";
import table from "../../assets/images/tablisa.png";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import SidebarMarkazTuzilmasi from "../../components/sidebar/SidebarMarkazTuzilmasi";

function TarkibiyTuzilma() {
  return (
    <div className="tarkibiyTuzilma container">
      <div className="content">
        <div className="desc">
          <h1 className="title">TARKIBIY TUZILMA</h1>
          <p>
            Tibbiy ta’limda o’quv resurslarini yaratish va rivojlantirish
            markazi Ўзбекистон Республикаси Президентининг 2020 йил 2 октябрдаги
            ПҚ-4847-сон қарорига 1-ИЛОВА
          </p>
          <div className="row">
            <img src={table} />
          </div>
        </div>
        <div className="layout">
          <SidebarMarkazTuzilmasi />
          <OqXalat />
          <SmallContact />
        </div>
      </div>
    </div>
  );
}

export default TarkibiyTuzilma;
