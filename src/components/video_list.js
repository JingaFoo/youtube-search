import React from 'react';
import VideoListItem from './video_list_item';

import './video_list.css';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });
  return (
    <div className="container">
      <div className="video-results">
        <span>5 videos</span>
      </div>
      <hr />
      <div className="video-list">
        <div className="row no-gutters video-list-content">
          {videoItems}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
