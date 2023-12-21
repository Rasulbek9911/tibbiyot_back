import React, { useRef, useState } from "react";
import "./royxatdanOtish.scss";
import { useNavigate, Navigate } from "react-router-dom";
import { baseUrl } from "../../../services/http";

function RoyxatdanOtish() {
  const oldingiPage = useNavigate();
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(false);
  const [navigate, setNavigate] = useState(false);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const regForm = useRef();

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
      fetch(`${baseUrl}/api/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          password2: password2,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (
            data?.errors?.username[0] ==
            "Пользователь с таким именем уже существует."
          ) {
            setErr(true);
          }

          if (data.status == "success") {
            setNavigate(true);
            setErr(false);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoader(false));
      setLoader(true);
    }
  }

  if (navigate) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="royxatdanOtishContent">
      <div className="royxatdanOtishModal">
        <i
          className="fa fa-times closeBtn"
          aria-hidden="true"
          onClick={() => setNavigate(true)}
        ></i>
        <h1>Ro‘yxatdan o‘tish</h1>
        <form ref={regForm} onSubmit={onSubmit}>
          <input
            className="username regItem"
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUserName(e.target.value);
              if (e.target.value) {
                e.target.classList.remove("errorBorder");
              } else {
                e.target.classList.add("errorBorder");
              }
            }}
          />
          <input
            className="email regItem"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
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
              setPassword(e.target.value);
              if (e.target.value) {
                e.target.classList.remove("errorBorder");
              } else {
                e.target.classList.add("errorBorder");
              }
            }}
          />
          <input
            className="passwordQayta regItem"
            type="password"
            placeholder="Parolni takrorlang"
            onChange={(e) => {
              setPassword2(e.target.value);
              if (e.target.value) {
                e.target.classList.remove("errorBorder");
              } else {
                e.target.classList.add("errorBorder");
              }
            }}
          />
          {err && (
            <div className="error">
              <p>Foydalanuvchi avval ro'yxatdan o'tgan</p>
            </div>
          )}
          <div className="royxatdanOtishBtn">
            {loader ? (
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button>Ro'yxatdan o'tish</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default RoyxatdanOtish;
