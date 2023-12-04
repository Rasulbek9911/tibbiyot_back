import React from "react";
import { useGetFetch } from "../../hooks/useGetFetch";
import { baseUrl } from "../../services/http";
import { useParams } from "react-router-dom";

function BatafsilYangilik() {
  const { id } = useParams();
  const { data: newsDetail } = useGetFetch(`${baseUrl}/yangilik/${id}`);

  return (
    <div className="batafsilYangilik">
      {newsDetail && (
        <>
          <div className="dateDetail">
            <span>
              {" "}
              <i className="fa fa-calendar-check-o" aria-hidden="true"></i>{" "}
              {new Date(newsDetail.created_at).getHours() < 10
                ? "0" + new Date(newsDetail.created_at).getHours()
                : new Date(newsDetail.created_at).getHours()}
              :
              {new Date(newsDetail.created_at).getMinutes() < 10
                ? "0" + new Date(newsDetail.created_at).getMinutes()
                : new Date(newsDetail.created_at).getMinutes()}
            </span>
            <span>
              {" "}
              {new Date(newsDetail.created_at).getDay() < 10
                ? "0" + new Date(newsDetail.created_at).getDay()
                : new Date(newsDetail.created_at).getDay()}
              .
              {new Date(newsDetail.created_at).getMonth() < 10
                ? "0" + new Date(newsDetail.created_at).getMonth()
                : new Date(newsDetail.created_at).getMonth()}
              .
              {new Date(newsDetail.created_at).getFullYear() < 10
                ? "0" + new Date(newsDetail.created_at).getFullYear()
                : new Date(newsDetail.created_at).getFullYear()}
            </span>
          </div>
          <p className="title">{newsDetail.title}</p>
          <div className="image">
            <img src={newsDetail.image} alt="" />
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: newsDetail.body }}
            className="body"
          ></p>
        </>
      )}
    </div>
  );
}

export default BatafsilYangilik;
