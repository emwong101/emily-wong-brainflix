//importing data from JSON

import Videos from "../data/videos.json";
import videoDetails from "../data/video-details.json";

export const getVideos = (videoID) => {
  return Videos.filter((video) => video.id !== videoID);
};

export const getVideoDetails = (videoID) => {
  return videoDetails.find((video) => video.id === videoID);
};
