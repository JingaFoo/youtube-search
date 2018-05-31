import React from 'react';
import './video_list_item.css';

const VideoListItemHorizontal = ({video, onVideoSelect}) => {
  // Functional prop onVideoSelect will update the selectedVideo state via onClick while passing the video prop as the onVideoSelect parameter
  // onVideoSelect will pass the video prop to the parent component VideoList, which will set the selectedVideo state using the video prop passed as its parameter
  return (
    <div onClick={() => onVideoSelect(video)} className="col-4 video-item" >
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
    </div>
  );
}

export default VideoListItemHorizontal;
