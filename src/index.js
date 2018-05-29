import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';

const API_KEY = 'AIzaSyD-Z7Dq-QyimQ1lC1JPixfMDmTA_y313as';

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
