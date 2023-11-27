import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// scss
import "./login.scss";
import { useContext } from "react";
import { LoginContext } from "../../../context/AuthLogin";

function Login() {
  const navigate = useNavigate();
  const { setToken, token } = useContext(LoginContext);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit(e) {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token))
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
            className="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
            <button>Kirish</button>
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
