import React, { useState } from "react";
import { Link } from "react-router-dom";

function FanAccardion() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="fan">
      <div className="header">
        <h4 className="title">
          Muskullar. Ravish haqida tushuncha. Ravishlarning ma’noga ko‘ra
          turlari, yasalishi
        </h4>
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
            <Link to="/Fanlar-boyicha-oquv-resurslari/fan/maruza-matn">
              <p>Mavzular to‘plami</p>
            </Link>
          </li>
          <li className="item">
            <Link to="">
              <p>Media materiallar</p>
            </Link>
          </li>
          <li className="item">
            <Link to="">
              <p>Vizual-didaktik resurslar</p>
            </Link>
          </li>
          <li className="item">
            <Link to="">
              <p>Taqdimot materiallari</p>
            </Link>
          </li>
          <li className="item">
            <Link to="">
              <p>Fanning ta’lim texnologiyalari</p>
            </Link>
          </li>
          <li className="item">
            <Link to="">
              <p>Nazariy - amaliy topshiriqlar</p>
            </Link>
          </li>
        </ul>
      )}
    </section>
  );
}

export default FanAccardion;
