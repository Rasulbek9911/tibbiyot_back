import React, { useState } from "react";
import "./videoMateriallar.scss";
import SidebarHome from "../../components/sidebar/SidebarHome";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import { useGetFetch } from "../../hooks/useGetFetch";
import { baseUrl } from "../../services/http";
import { Pagination } from "@mui/material";
import ReactPlayer from "react-player";

function VideoMateriallar() {
  const [page, setPage] = useState(1);
  function handlePagination(e, p) {
    setPage(p);
  }
  const {
    data: videos,
    isPending,
    error,
  } = useGetFetch(`${baseUrl}/video_all?page=${page}`);

  if (!videos) {
    return <p></p>;
  }
  return (
    <div className="videoMateriallar container">
      <div className="videos">
        <div className="rows">
          {videos &&
            videos.results.map((video) => {
              return (
                <div key={video.id} className="cardss">
                  <div className="videoBlok">
                    <ReactPlayer
                      controls
                      url={video.video_url}
                      className="reactPlayer"
                    />
                  </div>
                  <div className="desc">
                    <p>{video.title}</p>
                    {/* .slice(0, 130) */}
                    <div className="date">
                      <span>
                        {" "}
                        <i
                          className="fa fa-calendar-check-o"
                          aria-hidden="true"
                        ></i>{" "}
                        {new Date(video.created_at).getHours() < 10
                          ? "0" + new Date(video.created_at).getHours()
                          : new Date(video.created_at).getHours()}
                        :
                        {new Date(video.created_at).getMinutes() < 10
                          ? "0" + new Date(video.created_at).getMinutes()
                          : new Date(video.created_at).getMinutes()}
                      </span>
                      <span>
                        {" "}
                        {new Date(video.created_at).getDay() < 10
                          ? "0" + new Date(video.created_at).getDay()
                          : new Date(video.created_at).getDay()}
                        .
                        {new Date(video.created_at).getMonth() < 10
                          ? "0" + new Date(video.created_at).getMonth()
                          : new Date(video.created_at).getMonth()}
                        .
                        {new Date(video.created_at).getFullYear() < 10
                          ? "0" + new Date(video.created_at).getFullYear()
                          : new Date(video.created_at).getFullYear()}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <hr />
        <Pagination
          count={videos.total_pages}
          color="primary"
          onChange={handlePagination}
        ></Pagination>
      </div>
      <div className="sidebarNews">
        <SidebarHome />
        <OqXalat />
        <SmallContact />
      </div>
    </div>
  );
}

export default VideoMateriallar;
