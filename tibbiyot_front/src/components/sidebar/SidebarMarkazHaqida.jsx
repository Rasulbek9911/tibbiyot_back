import React from "react";
// scss
import "./sidebar.scss";

import { NavLink } from "react-router-dom";
import menuChild from "../../assets/icons/menuChild.svg";

function SidebarMarkazHaqida() {
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
            <p style={{ color: "white" }}>MARKAZ HAQIDA</p>
          </NavLink>
        </p>
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
          <NavLink to="/Yaratiladigan-Adabiyotlar">
            {" "}
            <img src={menuChild} /> <p>Yaratiladigan adabiyotlar</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Oquv-resurslariga-qoyilgan-talablar">
            {" "}
            <img src={menuChild} />
            <p>O'quv resurslriga qo'yiladigan talablar</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SidebarMarkazHaqida;
