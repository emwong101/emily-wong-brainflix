import React from "react";
import "./hero.scss";

function Hero({ activeVideo, videoRef }) {
  const { image, video } = activeVideo;

  const ended = (event) => {
    event.target.load();
  };

  return (
    <div className="video__container">
      <video
        ref={videoRef}
        className="video__player"
        poster={image}
        src={video}
        onEnded={ended}
        controls
      ></video>
    </div>
  );
}

export default Hero;
