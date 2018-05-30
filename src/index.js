import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Navbar from './components/navbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { API_KEY } from './config/keys';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    //Fetch initial videos from YouTube API with the search term
    YTSearch({ key: API_KEY, term: 'lamborghini' }, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container main-body">
          <div className="row no-gutters">
            <div className="col-8">
              <VideoDetail video={this.state.videos[1]} />
            </div>
            <div className="col-4">
              <VideoList videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
