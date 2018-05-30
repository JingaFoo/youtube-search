import React from 'react';
import VideoListItem from './video_list_item';

import './video_list.css';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });
  return (
    <div className="container video-list">
      <div className="row no-gutters justify-content-center">
        {videoItems}
      </div>
    </div>
  );
};

export default VideoList;
