import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Navbar from './components/navbar';
import VideoList from './components/video_list';
import { API_KEY } from './config/keys';

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
        <VideoList videos={this.state.videos} />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
