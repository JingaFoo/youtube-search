import React, { Component } from 'react';

import './search_bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div className="input-group">
        <input
          className="search-input form-control"
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button">
          <i className="icon ion-md-search"></i>
          </button>
        </div>
      </div>
    );
  };
}

export default SearchBar;
