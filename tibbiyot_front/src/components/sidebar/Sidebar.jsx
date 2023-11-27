import React from "react";

// scss
import "./sidebar.scss";

// images
import menu from "../../assets/icons/menu.svg";
import menuChild from "../../assets/icons/menuChild.svg";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" style={{ backgroundColor: "#F3F3F3" }}>
            {" "}
            <img src={menu} /> <p>MARKAZ HAQIDA</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Umumiy-malumot">
            {" "}
            <img src={menuChild} /> <p>Umumiy ma’lumot</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Faoliyatga-oid-meyoriy-hujjatlar">
            {" "}
            <img src={menuChild} /> <p>Faoliyatga oid me’yoriy hujjatlar</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/SSB-buyrugi">
            {" "}
            <img src={menuChild} /> <p>SSB buyrug‘i</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Nizom">
            {" "}
            <img src={menuChild} /> <p>Nizom</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Markaz-ustavi">
            {" "}
            <img src={menuChild} />
            <p> Markaz ustavi</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            {" "}
            <img src={menuChild} /> <p>Hududiy boshqarmalar</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
