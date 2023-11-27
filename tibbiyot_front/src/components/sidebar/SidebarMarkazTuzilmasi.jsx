import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../../assets/icons/menu.svg";
import menuChild from "../../assets/icons/menuChild.svg";

function SidebarMarkazTuzilmasi() {
  return (
    <div className="sidebar">
      <ul>
        <li style={{ backgroundColor: "#ccc" }}>
          <NavLink to="/Tarkibiy-tuzilma">
            {" "}
            <img src={menu} /> <p>MARKAZ TUZILMASI</p>
          </NavLink>
        </li>
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
