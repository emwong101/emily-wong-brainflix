// styles
import "../mainPage/MainPage.scss";

// components
import Comments from "../../components/sections/comments/Comments";
import Hero from "../../components/sections/hero/Hero";
import NextVideos from "../../components/sections/nextVideos/NextVideos";
import VideoDescription from "../../components/sections/videoDescription/VideoDescription";

// libraries
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// API Links
const allVideos =
  "https://project-2-api.herokuapp.com/videos?api_key=536ba9bc-8a92-4bd6-8a10-a3a876def07a";
const specificVideo = (videoID) =>
  `https://project-2-api.herokuapp.com/videos/${videoID}?api_key=536ba9bc-8a92-4bd6-8a10-a3a876def07a`;

function MainPage() {
  // states
  const [videoID, setVideoID] = useState(null);
  const [defaultVideo] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
  const [video, setVideo] = useState();
  const [activeVideo, setActiveVideo] = useState({});

  // click handler for switching videos
  const handleClick = (event) => {
    event.preventDefault();
  };

  //API call for default page
  const params = useParams();

  useEffect(() => {
    if (Object.keys(params).length === 0) {
      const render = async () => {
        try {
          const { data: videoList } = await axios.get(allVideos);
          const { data } = await axios.get(specificVideo(defaultVideo));

          const vidList = videoList.filter(
            (video) => video.id !== defaultVideo
          );

          setVideo(vidList);
          setActiveVideo(data);
          setVideoID(defaultVideo);
        } catch (error) {
          console.log("Error");
        }
      };
      render();
    }
  }, [defaultVideo, params]);

  //API call for rendering different video paths
  useEffect(() => {
    if (params.videoID) {
      const fetchVideos = async () => {
        try {
          const { data: videoList } = await axios.get(allVideos);
          const { data } = await axios.get(specificVideo(params.videoID));

          const vidList = videoList.filter(
            (video) => video.id !== params.videoID
          );

          setVideo(vidList);
          setActiveVideo(data);
          setVideoID(params.videoID);
        } catch (error) {
          console.log(" Error");
        }
      };
      fetchVideos();
    }
  }, [params]);

  return (
    <>
      <Hero activeVideo={activeVideo} />
      <div className="main-content">
        <div className="main-content__left">
          <VideoDescription
            videos={activeVideo}
            setVideos={setActiveVideo}
            videoID={videoID}
          />
          {activeVideo.comments && <Comments comments={activeVideo.comments} />}
        </div>
        {video && <NextVideos videos={video} selectNext={handleClick} />}
      </div>
    </>
  );
}

export default MainPage;
