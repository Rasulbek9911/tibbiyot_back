import React, { useState } from "react";
import "./oqxalat.scss";
import { Link } from "react-router-dom";
import { useGetFetch } from "../../../hooks/useGetFetch";
import { baseUrl } from "../../../services/http";

function OqXalat() {
  const { data, isPending, error } = useGetFetch(`${baseUrl}/foydali_malumot`);

  if (!data) {
    return <p></p>;
  }
  return (
    <div className="oqXalat">
      <h2>{data[0].title}</h2>
      <div className="image">
        <img src={data[0].image} alt="" />
      </div>
      <div className="javob">
        <Link to={`/${data[0].id}`}>Javob</Link>
      </div>
    </div>
  );
}

export default OqXalat;
