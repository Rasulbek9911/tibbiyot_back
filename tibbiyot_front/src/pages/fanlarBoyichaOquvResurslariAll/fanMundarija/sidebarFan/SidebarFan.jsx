import React from "react";
import { NavLink } from "react-router-dom";
// image
import menuChild from "../../../../assets/icons/menuChild.svg";
// scss
import "./sidebarFan.scss";

function SidebarFan() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink>
            {" "}
            <img src={menuChild} /> <p>Mavzular to‘plami</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            {" "}
            <img src={menuChild} /> <p>Media materiallar</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            {" "}
            <img src={menuChild} /> <p>Vizual-didaktik resurslar</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            {" "}
            <img src={menuChild} /> <p>Taqdimot materiallari</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            {" "}
            <img src={menuChild} /> <p>Fanning ta’lim texnologiyalari</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            {" "}
            <img src={menuChild} />
            <p> Nazariy - amaliy topshiriqlar</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SidebarFan;
