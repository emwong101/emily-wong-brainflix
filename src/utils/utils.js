//importing data from JSON

import Videos from "../data/videos.json";

export const getVideos = (videoID) => {
  return Videos.filter((video) => video.id !== videoID);
};
