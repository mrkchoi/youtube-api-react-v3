import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="item video-item">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="ui image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
