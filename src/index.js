import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Navbar from './components/navbar';
const API_KEY = 'AIzaSyD-Z7Dq-QyimQ1lC1JPixfMDmTA_y313as';

YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
