import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../../assets/icons/menu.svg";
import menuChild from "../../assets/icons/menuChild.svg";

function SidebarFaoliyat() {
  return (
    <div className="sidebar">
      <ul>
        <p className="head">
          <NavLink>
            {" "}
            <i
              style={{ color: "white", fontSize: "21px", marginRight: "3px" }}
              className="fa fa-bars"
              aria-hidden="true"
            ></i>
            <p style={{ color: "white" }}>FAOLIYAT</p>
          </NavLink>
        </p>
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
