import React from "react";
// images
import menu from "../../assets/icons/menu.svg";
import menuChild from "../../assets/icons/menuChild.svg";
import "./sidebar.scss";

import { NavLink } from "react-router-dom";

function SidebarTwo() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink
            to="/Faoliyatga-oid-meyoriy-hujjatlar"
            style={{ backgroundColor: "#F3F3F3" }}
          >
            {" "}
            <img src={menu} /> <p>ME’YORIY HUJJATLAR</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            {" "}
            <img src={menuChild} /> <p>Markazni tashkil etilishi ...</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            {" "}
            <img src={menuChild} /> <p>O’zbekiston Respublikasi...</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            {" "}
            <img src={menuChild} /> <p>Prezidentning farmon va ...</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/SSB-buyrugi">
            {" "}
            <img src={menuChild} /> <p>SSB buyrug‘i</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            {" "}
            <img src={menuChild} />
            <p> Muhokamadagi hujjatlar</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Nizom">
            {" "}
            <img src={menuChild} /> <p>Nizom</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SidebarTwo;
