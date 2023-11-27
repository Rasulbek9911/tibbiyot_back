import React, { useLayoutEffect, useState } from "react";
import book from "../../assets/icons/fa_book.svg";
import { Link, NavLink } from "react-router-dom";

function Accardion({ title, desc }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="question">
      <div className="header">
        <h4 className="title">{title}</h4>
        <button
          className={`btn ${showInfo && "active"}`}
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <i className="fa fa-minus" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-plus" aria-hidden="true"></i>
          )}
        </button>
      </div>
      {showInfo && (
        <ul className="list">
          <li className="item">
            <Link to="/Fanlar-boyicha-oquv-resurslari/fan">
              <img src={book} />
              <p>Tibbiyotda xorijiy til</p>
            </Link>
          </li>
          <li className="item">
            <Link to="/Fanlar-boyicha-oquv-resurslari/fan">
              <img src={book} />
              <p>Anatomiya, fifiologiya va patologiya</p>
            </Link>
          </li>
          <li className="item">
            <Link to="/Fanlar-boyicha-oquv-resurslari/fan">
              <img src={book} />
              <p>Farmakologiya va repseptura asoslari</p>
            </Link>
          </li>
          <li className="item">
            <Link to="/Fanlar-boyicha-oquv-resurslari/fan">
              <img src={book} />
              <p>Mikrobiologiya</p>
            </Link>
          </li>
        </ul>
      )}
    </section>
  );
}

export default Accardion;
