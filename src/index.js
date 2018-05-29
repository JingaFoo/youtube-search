import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Navbar from './components/navbar';
import { API_KEY } from './config/keys';

YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
  console.log(data);
});

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
