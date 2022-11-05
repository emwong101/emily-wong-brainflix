import moment from "moment";
import React from "react";
import viewsIcon from "../../../assets/Images/views.svg";
import likeIcon from "../../../assets/Images/likes.svg";
import "../videoDescription/videoDescription.scss";

function VideoDescription({ videos }) {
  const { title, channel, description, views, likes } = videos;

  let date = moment(videos.timestamp, "x").format("MM/DD/YYYY");

  return (
    <div className="video">
      <h1 className="video__title">{title}</h1>
      <div className="video__info">
        <div className="video__info--date">
          <p className="video__channel">By {channel}</p>
          <p className="video__date">{date}</p>
        </div>
        <div className="video__info--views">
          <p className="video__views">
            <img className="video__views--icon" src={viewsIcon} alt="views" />
            {views}
          </p>
          <p className="video__likes">
            <img className="video__likes--icon" src={likeIcon} alt="likes" />
            {likes}
          </p>
        </div>
      </div>
      <p className="video__description">{description}</p>
    </div>
  );
}

export default VideoDescription;
