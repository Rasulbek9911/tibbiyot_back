import React from "react";
import "./oqXalatModal.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useGetFetch } from "../../../hooks/useGetFetch";
import { baseUrl } from "../../../services/http";

function OqXalatModal() {
  const { javob } = useParams();
  const { data } = useGetFetch(`${baseUrl}/foydali_malumot/${javob}`);
  const navigate = useNavigate();
  if (!data) {
    return <p></p>;
  }
  return (
    <div className="javobContent">
      <div className="javobModal">
        <i
          className="fa fa-times closeBtn"
          aria-hidden="true"
          onClick={() => navigate(-1)}
        ></i>
        <h2>{data.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>
      </div>
    </div>
  );
}

export default OqXalatModal;
