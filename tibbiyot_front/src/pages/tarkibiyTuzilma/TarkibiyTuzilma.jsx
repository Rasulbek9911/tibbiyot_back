import React from "react";
import "./tarkibiyTuzilma.scss";
import table from "../../assets/images/tablisa.jpg";
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
            Тиббий таълимда ўқув ресурсларини яратиш ва ривожлантириш
            марказининг тузилмаси
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
