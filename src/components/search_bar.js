import React, { Component } from 'react';

import './search_bar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="input-group">
        <input className="search-input form-control" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
          <i className="icon ion-md-search"></i>
          </button>
        </div>
      </div>
    );
  };
}

export default SearchBar;
