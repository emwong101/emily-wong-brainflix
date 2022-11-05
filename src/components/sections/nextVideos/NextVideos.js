import React from "react";
import "./nextVideos.scss";

//use videos.json

export default function NextVideos({ videos, selectNext }) {
  return (
    <div className="next-video">
      <h4 className="next-video__heading">NEXT VIDEOS</h4>
      <div className="next-video__list">
        {videos.map((video) => (
          <div
            className="next-video__div"
            key={video.id}
            onClick={(event) => selectNext(event, video.id)}
          >
            <div className="next-video__image--div">
              <img
                className="next-video__image"
                src={video.image}
                alt="thumbnail"
              />
            </div>
            <div className="next-video__text">
              <h4 className="next-video__title">{video.title}</h4>
              <p className="next-video__channel">{video.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
