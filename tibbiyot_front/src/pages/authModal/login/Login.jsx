import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../services/http";
// scss
import "./login.scss";
import { LoginContext } from "../../../context/AuthLogin";

function Login() {
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(false);

  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // const { oldToken } = useContext(LoginContext);
  // ===================================
  // if (!oldToken) {
  //   useEffect(() => {
  //     fetch(`${baseUrl}/api/token/refresh/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         refresh: localStorage.getItem("RefreshToken"),
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         localStorage.setItem("AccessToken", data.access);
  //         console.log(data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);
  // }
  // ==============================

  function onSubmit(e) {
    e.preventDefault();

    // reg bo'sh maydon
    const regItem = document.querySelectorAll(".regItem");

    let errorArr = Array.from(regItem).filter((item) => {
      return !item.value;
    });

    errorArr.forEach((item) => {
      item.classList.add("errorBorder");
    });

    if (errorArr.length == 0) {
      fetch(`${baseUrl}/api/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (
            data?.detail ==
            "Не найдено активной учетной записи с указанными данными"
          ) {
            setErr(true);
          }

          if (data?.access) {
            localStorage.setItem("AccessToken", data.access);
            localStorage.setItem("RefreshToken", data.refresh);
            navigate("/Fanlar-boyicha-oquv-resurslari");
            setErr(false);
            location.reload();
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoader(false);
        });
      setLoader(true);
    }
  }

  return (
    <div className="loginContent">
      <div className="loginModal">
        <i
          onClick={() => navigate("/")}
          className="fa fa-times closeBtn"
          aria-hidden="true"
        ></i>
        <h1>Tizimga kirish</h1>
        <form onSubmit={onSubmit}>
          <input
            className="username regItem"
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setErr(false);
              setUserName(e.target.value);
              if (e.target.value) {
                e.target.classList.remove("errorBorder");
              } else {
                e.target.classList.add("errorBorder");
              }
            }}
          />
          <input
            className="password regItem"
            type="password"
            placeholder="Parol"
            onChange={(e) => {
              setErr(false);
              setPassword(e.target.value);
              if (e.target.value) {
                e.target.classList.remove("errorBorder");
              } else {
                e.target.classList.add("errorBorder");
              }
            }}
          />
          {err && (
            <div className="error">
              <p>Login yoki parol xato</p>
            </div>
          )}
          <div className="parolniTiklash">
            <Link to="/parolni-tiklash">Parolni tiklash</Link>
          </div>
          <div className="loginBtn">
            {loader ? (
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button>Login</button>
            )}
          </div>
        </form>
        <Link to="/royxatdan-otish" className="loginToRoyxatdanOtish">
          Ro'yxatdan o'tish
        </Link>
      </div>
    </div>
  );
}

export default Login;
