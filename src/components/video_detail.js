import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="justify-content-center">
      <div className="video-detail p-4">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>
            <h4>{video.snippet.title}</h4>
          </div>
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Description  <i className="icon ion-md-arrow-dropdown"></i>
          </button>
          <div className="collapse" id="collapseExample">
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
