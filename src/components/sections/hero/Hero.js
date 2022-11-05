import React from "react";
import "./hero.scss";
//use video details json
function Hero({ activeVideo }) {
  const {
    image,
    // video
  } = activeVideo;

  return (
    <div className="video__container">
      <video className="video__player" poster={image} controls></video>
    </div>
  );
}

export default Hero;
