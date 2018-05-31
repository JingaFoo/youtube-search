import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Navbar from './components/navbar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import { API_KEY } from './config/keys';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('league of legends');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }
  /*
    Pass a prop video with an initial selectedVideo to VideoDetails to render an initial video.
    Pass a functional prop onVideoSelect to VideoList that updates the selectedVideo state
  */
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

    return (
      <div>
        <Navbar onSearchTermChange={videoSearch} />
        <div className="container main-body">
          <div className="d-none d-lg-block">
            <div className="row no-gutters">
              <div className="col-8">
                <VideoDetails video={this.state.selectedVideo} />
              </div>
              <div className="col-4">
                <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos} />
              </div>
            </div>
          </div>
          <div className="d-none d-md-block d-lg-none">
            <div className="row d-flex justify-content-center">
              <div className="col-10">
                <VideoDetails video={this.state.selectedVideo} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
