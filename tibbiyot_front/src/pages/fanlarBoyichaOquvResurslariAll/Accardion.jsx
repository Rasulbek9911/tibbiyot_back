import React, { useLayoutEffect, useState } from "react";
import book from "../../assets/icons/fa_book.svg";
import { Link } from "react-router-dom";

function Accardion({id, name, fans }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="question">
      <div className="header">
        <h4 className="title">{name}</h4>
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
          {fans.map((fan) => {
            return (
              <li className="item" key={fan.id}>
                <Link to="/Fanlar-boyicha-oquv-resurslari/fan">
                  <img src={book} />
                  <p>{fan.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default Accardion;
