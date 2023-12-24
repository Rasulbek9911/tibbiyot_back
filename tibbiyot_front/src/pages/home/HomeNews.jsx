import React from "react";
import image from "../../assets/images/news.jpg";
import { useGetFetch } from "../../hooks/useGetFetch";
import { baseUrl } from "../../services/http";
import { Link } from "react-router-dom";

function News() {
  const { data: yangiliklar } = useGetFetch(`${baseUrl}/yangilik`);
  return (
    <div className="news">
      <h2>Yangiliklar</h2>
      <div className="rows">
        {yangiliklar &&
          yangiliklar.map((yangilik) => {
            return (
              <Link
                to={`/Yangiliklar/${yangilik.id}`}
                key={yangilik.id}
                className="cardss"
              >
                <div className="imgBlok">
                  <img src={yangilik.image} alt="" />
                </div>
                <div className="desc">
                  <div className="date">
                    <span>
                      {" "}
                      <i
                        className="fa fa-calendar-check-o"
                        aria-hidden="true"
                      ></i>{" "}
                      {new Date(yangilik.created_at).getHours() < 10
                        ? "0" + new Date(yangilik.created_at).getHours()
                        : new Date(yangilik.created_at).getHours()}
                      :
                      {new Date(yangilik.created_at).getMinutes() < 10
                        ? "0" + new Date(yangilik.created_at).getMinutes()
                        : new Date(yangilik.created_at).getMinutes()}
                    </span>
                    <span>
                      {" "}
                      {new Date(yangilik.created_at).getDay() < 10
                        ? "0" + new Date(yangilik.created_at).getDay()
                        : new Date(yangilik.created_at).getDay()}
                      .
                      {new Date(yangilik.created_at).getMonth() < 10
                        ? "0" + new Date(yangilik.created_at).getMonth()
                        : new Date(yangilik.created_at).getMonth()}
                      .
                      {new Date(yangilik.created_at).getFullYear() < 10
                        ? "0" + new Date(yangilik.created_at).getFullYear()
                        : new Date(yangilik.created_at).getFullYear()}
                    </span>
                  </div>
                  <p>{yangilik.title.slice(0, 125)}...</p>
                </div>
              </Link>
            );
          })}
        {/* <div className="cardss">
          <div className="imgBlok">
            <img src={image} alt="" />
          </div>
          <div className="desc">
            <div className="date">
              <span>
                {" "}
                <i
                  className="fa fa-calendar-check-o"
                  aria-hidden="true"
                ></i>{" "}
                18:00
              </span>
              <span>22.05.2023</span>
            </div>
            <p>
              Литва саломатлик фанлари университети профессори Аурелия
              Блачевицин иштирокида марказ томонидан ташкил этилган ишчи
              йиғилиши ва давра суҳбати.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default News;
