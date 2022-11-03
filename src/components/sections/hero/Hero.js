import React from "react";
//use video details json
function Hero({ activeVideo }) {
  const {
    image,
    // video
  } = activeVideo;

  return <video poster={image} controls></video>;
}

export default Hero;
