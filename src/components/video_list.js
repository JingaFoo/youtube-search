import React from 'react';
import VideoListItem from './video_list_item';
import VideoListItemHorizontal from './video_list_horizontal';

import './video_list.css';

const VideoList = (props) => {
  // Iterate through the array of video objects and pass the video prop while rendering a VideoListItem for each video object
  // Pass the functional prop onVideoSelect to the child component VideoListItem to update the selectedVideo state
  const videoItemsVert = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });
  const videoItemsHorz = props.videos.map((video) => {
    return (
      <VideoListItemHorizontal
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });
  return (
    <div className="container video-list-box">
      <hr className="mx-4" />
      <div className="video-list">
        <div className="row no-gutters video-list-content d-none d-lg-block">
          {videoItemsVert}
        </div>
        <div className="row no-gutters video-list-content d-lg-none">
          {videoItemsHorz}
        </div>
      </div>
      <hr className="mx-4" />
    </div>
  );
};

export default VideoList;
