import React, { useState } from "react";
import { Link } from "react-router-dom";

function FanAccardion({ mavzu }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="fan">
      <div className="header">
        <h4 className="title">{mavzu.name}</h4>
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
            <Link target="blank" to={mavzu.nazariy_malumot}>
              <p>Maruza matni</p>
            </Link>
          </li>
          <li className="item">
            <Link to={mavzu.media} target="blank">
              <p>Media materiallar</p>
            </Link>
          </li>
          <li className="item">
            <Link to="">
              <p>Vizual-didaktik resurslar</p>
            </Link>
          </li>
          <li className="item">
            <Link to={mavzu.taqdimot} target="blank">
              <p>Taqdimot materiallari</p>
            </Link>
          </li>
          <li className="item">
            <Link to="">
              <p>Fanning ta’lim texnologiyalari</p>
            </Link>
          </li>
          <li className="item">
            <Link to={mavzu.topshiriq} target="blank">
              <p>Nazariy - amaliy topshiriqlar</p>
            </Link>
          </li>
        </ul>
      )}
    </section>
  );
}

export default FanAccardion;
