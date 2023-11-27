import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Loader() {
  return (
    <div
      style={{
        // position: "absolute",
        // left: "50%",
        // top: "60%",
        width: "200px",
        height: "200px",
      }}
      class="spinner-border text-primary"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loader;
