import React from 'react';
import VideoListItem from './video_list_item';

import './video_list.css';

const VideoList = (props) => {
  // Iterate through the array of video objects and pass the video prop while rendering a VideoListItem for each video object
  // Pass the functional prop onVideoSelect to the child component VideoListItem to update the selectedVideo state
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });
  return (
    <div className="container video-list-box">
      <hr className="mx-4" />
      <div className="video-list">
        <div className="row no-gutters video-list-content">
          {videoItems}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
