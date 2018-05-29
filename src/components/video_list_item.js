import React from 'react';
import './video_list_item.css';

const VideoListItem = ({video}) => {
  console.log(video.snippet)
  return (
    <div className="video-item">
      <div className="row no-gutters">
        <div className="col-6">
          <div className="video-thumbnail">
            <img src={video.snippet.thumbnails.high.url} alt="Video Thumbnail"/>
          </div>
        </div>
        <div className="col-6">
          <a className="video-details" href="/">
            <h3 className="video-title">{video.snippet.title}</h3>
            <div className="channel-details">
              <span>{video.snippet.channelTitle}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoListItem;
