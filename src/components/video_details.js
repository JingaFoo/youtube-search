import React from 'react';
import './video_details.css';

const VideoDetail = ({video}) => {
  if(!video) {
    return (
      <div className="container d-flex align-items-center justify-content-center spinner">
        <div className="loader"></div>
      </div>
    );
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail-box justify-content-center">
      <div className="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details p-4">
          <div>
            <h4>{video.snippet.title}</h4>
          </div>
          <hr />
          <button className="description-expand" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
            Description  <i className="icon ion-md-arrow-dropdown"></i>
          </button>
          <div className="collapse video-description" id="collapseDetails">
            <div className="card card-body">
              {video.snippet.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
