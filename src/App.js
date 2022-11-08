// styles
import "./App.scss";

// components
import Comments from "./components/sections/comments/Comments";
import Header from "./components/sections/header/Header";
import Hero from "./components/sections/hero/Hero";
import NextVideos from "./components/sections/nextVideos/NextVideos";
import VideoDescription from "./components/sections/videoDescription/VideoDescription";

// libraries
import { useState, useEffect } from "react";
import axios from "axios";

// API Links
const allVideos =
  "https://project-2-api.herokuapp.com/videos?api_key=536ba9bc-8a92-4bd6-8a10-a3a876def07a";
const specificVideo = (videoID) =>
  `https://project-2-api.herokuapp.com/videos/${videoID}?api_key=536ba9bc-8a92-4bd6-8a10-a3a876def07a`;

// App function
function App() {
  // states
  const [videoID, setVideoID] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [video, setVideo] = useState();
  const [activeVideo, setActiveVideo] = useState({});

  // click handler for switching videos
  const handleClick = (event, videoID) => {
    event.preventDefault();
    setVideoID(videoID);
    setActiveVideo(specificVideo(videoID));
  };

  //API call for rendering video list
  useEffect(() => {
    const render = async () => {
      try {
        const { data } = await axios.get(specificVideo(videoID));
        setActiveVideo(data);
      } catch (error) {
        console.log("Error");
      }
    };
    render();
  }, [videoID]);

  //API call for showing active video
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await axios.get(allVideos);
        const vidList = data.filter((video) => video.id !== videoID);
        setVideo(vidList);
      } catch (error) {
        console.log("Error");
      }
    };
    fetchVideos();
  }, [videoID]);

  return (
    <>
      <Header />
      <Hero activeVideo={activeVideo} />
      <div className="main-content">
        <div className="main-content__left">
          <VideoDescription videos={activeVideo} />
          {activeVideo.comments && <Comments comments={activeVideo.comments} />}
        </div>
        {video && <NextVideos videos={video} selectNext={handleClick} />}
      </div>
    </>
  );
}

export default App;
