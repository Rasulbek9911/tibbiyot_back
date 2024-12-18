import React, { useContext, useEffect, useState } from "react";
import { useGetFetch } from "../../hooks/useGetFetch";
import { baseUrl } from "../../services/http";
import "./fanlarBoyichaOquvResurslariAll.scss";
// image
import Accardion from "./Accardion";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import { LoginContext } from "../../context/AuthLogin";

function FanlarBoyichaOquvResurslariAll() {
  const navigate = useNavigate();

  // useContext
  const { oldToken, SetOldToken } = useContext(LoginContext);

  // search Fan
  const [searchFan, setSearchFan] = useState(null);
  function SearchFan(e) {
    setSearchFan(e.target.value);
  }

  // pagination funck
  const [page, setPage] = useState(1);
  function handlePagination(e, p) {
    setPage(p);
  }

  // get yunalish
  const [yunalishlar, setYunalishlar] = useState(null);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
    };
    fetch(
      `${baseUrl}/resurs/yunalish`,
      { headers },
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((data) => {
        setYunalishlar(data);
        SetOldToken(true);
      })
      .catch((err) => {
        if (err.message == "401") {
          navigate("/login");
          SetOldToken(false);
          // =====================
          // useEffect(() => {
          //   fetch(`${baseUrl}/api/token/refresh/`, {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify({
          //       refresh: localStorage.getItem("RefreshToken"),
          //     }),
          //   })
          //     .then((res) => res.json())
          //     .then((data) => {
          //       localStorage.setItem("AccessToken", data.access);
          //       console.log(data);
          //     })
          //     .catch((err) => console.log(err));
          // }, []);
        }
      });
  }, []);

  // get fanlar
  const [fanlar, setData] = useState(null);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
    };
    fetch(
      `${baseUrl}/resurs/fan${
        searchFan ? `?search=${searchFan}&page=${page}` : `?page=${page}`
      }`,
      { headers },
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((data) => {
        setData(data);
        // SetOldToken(false);
      })
      .catch((err) => {
        if (err.message == "401") {
          navigate("/login");
        }
        // SetOldToken(true);
      });
  }, []);

  if (!yunalishlar || !fanlar) {
    return <p></p>;
  }

  return (
    <div className="fanlarBoyichaOquResurslarAll container">
      <h1 className="title">FANLAR BO’YICHA O’QUV RESURSLAR</h1>
      <div className="content">
        <div className="sidebarFan">
          <form>
            <input
              type="text"
              placeholder="Fan nomi bilan qidirish..."
              onChange={SearchFan}
            />
          </form>
          {yunalishlar.map((yunalish) => {
            return <Accardion key={yunalish.id} {...yunalish} />;
          })}
        </div>
        <div className="cardsBlok">
          {fanlar.results.map((fan) => {
            return (
              <Link
                to={`/Fanlar-boyicha-oquv-resurslari/${fan.id}`}
                key={fan.id}
                className="cardss"
              >
                <div className="imgBlok">
                  <img src={fan.rasm} />
                </div>
                <h4>{fan.name}</h4>
                {/* <p>
                  Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi
                </p> */}
              </Link>
            );
          })}
          {/* <div className="ch"></div> */}
          <hr className="hr" />

          <Pagination
            count={fanlar.total_pages}
            color="primary"
            onChange={handlePagination}
          ></Pagination>
        </div>
      </div>
    </div>
  );
}

export default FanlarBoyichaOquvResurslariAll;
