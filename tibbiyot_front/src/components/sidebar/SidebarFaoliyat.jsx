import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../../assets/icons/menu.svg";
import menuChild from "../../assets/icons/menuChild.svg";

function SidebarFaoliyat() {
  return (
    <div className="sidebar">
      <ul>
        <li style={{ backgroundColor: "#ccc" }}>
          <NavLink to="/Yangi-adabiyotlar">
            {" "}
            <img src={menu} /> <p>FAOLIYAT</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Yangi-adabiyotlar">
            {" "}
            <img src={menuChild} />{" "}
            <p>OTMlar faoliyatiga oid yangi adabiyotlar</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SidebarFaoliyat;
