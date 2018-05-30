import React from 'react';
import './video_list_item.css';

const VideoListItem = ({video}) => {
  return (
    <div className="col-md-12 video-item">
      <a className="video-content" href="/">
      <div className="channel-details p-2">
        <span>{video.snippet.channelTitle}</span>
        <hr className="my-2" />
      </div>
      <div className="video-thumbnail">
        <img src={video.snippet.thumbnails.high.url} alt="Video Thumbnail"/>
      </div>
      <div className="video-details p-3">
        <h3 className="video-title">{video.snippet.title}</h3>
      </div>
      </a>
    </div>
  );
}

export default VideoListItem;
