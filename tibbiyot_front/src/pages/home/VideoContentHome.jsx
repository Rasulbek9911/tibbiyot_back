import React from "react";
import { useGetFetch } from "../../hooks/useGetFetch";
import { baseUrl } from "../../services/http";
import ReactPlayer from "react-player";

function VideoContentHome() {
  const {
    data: videos,
    isPending,
    error,
  } = useGetFetch(`${baseUrl}/video_home`);
  return (
    <div className="videos">
      <h2>Video materiallar</h2>
      <div className="rows">
        {videos &&
          videos.map((video) => {
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
    </div>
  );
}

export default VideoContentHome;
