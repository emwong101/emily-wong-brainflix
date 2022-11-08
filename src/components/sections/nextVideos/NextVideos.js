import React from "react";
import "./nextVideos.scss";
import { Link } from "react-router-dom";

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
            <Link
              className="next-video__link"
              to={`/home/${video.id}`}
              key={video.id}
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
