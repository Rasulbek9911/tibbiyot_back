import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../services/http";
// scss
import "./login.scss";
import { useContext } from "react";
import { LoginContext } from "../../../context/AuthLogin";

function Login() {
  const navigate = useNavigate();
  const { SetAccessToken, SetRefreshToken } = useContext(LoginContext);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit(e) {
    e.preventDefault();

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
        SetAccessToken(data.access);
        SetRefreshToken(data.refresh);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="loginContent">
      <div className="loginModal">
        <i
          onClick={() => navigate(-1)}
          className="fa fa-times closeBtn"
          aria-hidden="true"
        ></i>
        <h1>Tizimga kirish</h1>
        <form onSubmit={onSubmit}>
          <input
            className="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="password"
            type="password"
            placeholder="Parol"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="parolniTiklash">
            <Link to="/parolni-tiklash">Parolni tiklash</Link>
          </div>
          <div className="loginBtn">
            <button>Login</button>
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
