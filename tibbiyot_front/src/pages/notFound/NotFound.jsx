import React from "react";
import "./notFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound container">
      <h1>404</h1>
      <h3>Oops! Page not found.</h3>
      <p>Let’s get you to where you need to be.</p>
      <Link>Back to home</Link>
    </div>
  );
}

export default NotFound;
