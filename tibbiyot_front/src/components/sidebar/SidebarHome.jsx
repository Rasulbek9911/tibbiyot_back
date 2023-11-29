import React from "react";
import "./sidebar.scss";
import menu from "../../assets/icons/menu.svg";
import menuChild from "../../assets/icons/menuChild.svg";
import { NavLink } from "react-router-dom";

function SidebarHome() {
  return (
    <div className="sidebar">
      <ul>
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

export default SidebarHome;
