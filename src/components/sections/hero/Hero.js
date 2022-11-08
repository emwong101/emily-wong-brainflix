import React from "react";
import "./hero.scss";
function Hero({ activeVideo }) {
  const { image } = activeVideo;

  return (
    <div className="video__container">
      <video className="video__player" poster={image} controls></video>
    </div>
  );
}

export default Hero;
