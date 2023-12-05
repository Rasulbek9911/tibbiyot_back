import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../../assets/icons/menu.svg";
import menuChild from "../../assets/icons/menuChild.svg";

function SidebarMarkazTuzilmasi() {
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
            <p style={{ color: "white" }}>MARKAZ TUZILMASI</p>
          </NavLink>
        </p>
        <li>
          <NavLink to="/Rahbariyat-va-hodimlar">
            {" "}
            <img src={menuChild} /> <p>Rahbariyat va hodimlar</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Bo'limlar">
            {" "}
            <img src={menuChild} /> <p>Bo'limlar</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Tarkibiy-tuzilma">
            {" "}
            <img src={menuChild} /> <p>Tarkibiy tuzilma</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SidebarMarkazTuzilmasi;
