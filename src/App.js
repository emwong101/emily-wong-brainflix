//styles
import "./App.scss";

//components
import Comments from "./components/sections/comments/Comments";
import Header from "./components/sections/header/Header";
import Hero from "./components/sections/hero/Hero";
import NextVideos from "./components/sections/nextVideos/NextVideos";
import VideoDescription from "./components/sections/videoDescription/VideoDescription";

//data
import { getVideoDetails, getVideos } from "./utils/utils";
import { useState } from "react";

function App() {
  const [videoID, setVideoID] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [video, setVideo] = useState(getVideos(videoID));
  const [activeVideo, setActiveVideo] = useState(getVideoDetails(videoID));

  const handleClick = (event, videoID) => {
    event.preventDefault();
    setVideoID(videoID);
    setVideo(getVideos(videoID));
    setActiveVideo(getVideoDetails(videoID));
  };

  return (
    <>
      <Header />
      <Hero activeVideo={activeVideo} />
      <VideoDescription videos={activeVideo} />
      <Comments comments={activeVideo.comments} />
      <NextVideos videos={video} selectNext={handleClick} />
    </>
  );
}

export default App;
