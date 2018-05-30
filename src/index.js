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

    this.state = { videos: [] }

    //Fetch initial videos from YouTube API with the search term
    YTSearch({ key: process.env.API_KEY, term: 'league of legends' }, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container main-body">
          <div className="d-none d-sm-block">
            <div className="row no-gutters">
              <div className="col-8">
                <VideoDetails video={this.state.videos[0]} />
              </div>
              <div className="col-4">
                <VideoList videos={this.state.videos} />
              </div>
            </div>
          </div>
          <div className="d-block d-sm-none">
            <div className="">
              <VideoDetails video={this.state.videos[0]} />
            </div>
            <div className="">
              <VideoList videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
