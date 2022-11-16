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
import { useRef } from "react";

// API Links

const allVideos = "http://localhost:8080/videos";
const specificVideo = (videoID) => `http://localhost:8080/videos/${videoID}`;

const commentURL = (videoID) =>
  `https://project-2-api.herokuapp.com/videos/${videoID}/comments?api_key=157a170e-0d59-422e-9b2c-16efb4469423`;

function MainPage() {
  // states
  const [videoID, setVideoID] = useState(null);
  const [defaultVideo] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
  const [video, setVideo] = useState();
  const [activeVideo, setActiveVideo] = useState({});
  const [comments, setComment] = useState("");

  //react hook declarations
  const commentRef = useRef();
  const params = useParams();

  // click handler for switching videos
  const handleClick = (event) => {
    event.preventDefault();
  };

  //submit handler for updating comment state upon form submit
  const submitHandle = (event) => {
    event.preventDefault();
    setComment(commentRef.current.value);
    event.target.reset();
  };

  //API call for default page
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

  //API call for comment posting
  useEffect(() => {
    if (comments.length !== 0) {
      const post = async () => {
        try {
          await axios.post(commentURL(videoID), {
            name: "Anon",
            comment: comments,
          });
          const { data } = await axios.get(specificVideo(videoID));
          setActiveVideo(data);
          setComment("");
        } catch {
          console.log("Error");
        }
      };
      post();
    }
  }, [comments, videoID]);

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
          {activeVideo.comments && (
            <Comments
              comments={activeVideo.comments}
              submit={submitHandle}
              commentRef={commentRef}
              videoID={videoID}
              specificVideo={specificVideo}
              setActiveVideo={setActiveVideo}
            />
          )}
        </div>
        {video && <NextVideos videos={video} selectNext={handleClick} />}
      </div>
    </>
  );
}

export default MainPage;
