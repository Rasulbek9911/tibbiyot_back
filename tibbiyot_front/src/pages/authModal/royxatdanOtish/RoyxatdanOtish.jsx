import React, { useState } from "react";
import "./royxatdanOtish.scss";
import { useNavigate, Navigate } from "react-router-dom";
import { baseUrl } from "../../../services/http";

function RoyxatdanOtish() {
  const oldingiOage = useNavigate();
  const [navigate, setNavigate] = useState(false);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function onSubmit(e) {
    e.preventDefault();

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
        if (data.status == "success") {
          setNavigate(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          onClick={() => oldingiOage(-1)}
        ></i>
        <h1>Ro‘yxatdan o‘tish</h1>
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
          <input
            className="passwordQayta"
            type="password"
            placeholder="Parolni takrorlang"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <div className="royxatdanOtishBtn">
            <button>Ro'yxatdan o'tish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RoyxatdanOtish;
