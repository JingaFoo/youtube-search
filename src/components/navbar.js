import React, { Component } from 'react';
import SearchBar from './search_bar';

import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand" href="/">YouTube</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="icon ion-md-menu menu-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="nav-left col-3 d-none d-sm-block">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
              </ul>
            </div>
            <div className="nav-right col-7 d-none d-sm-block">
              <SearchBar />
            </div>
            <div className="mobile-view d-block d-sm-none">
              <ul className="navbar-nav">
                <li className="nav-item ml-auto">
                  <a className="nav-link" href="/">Home</a>
                  <a className="nav-link" href="/">Channels</a>
                </li>
              </ul>
              <SearchBar />
            </div>
          </div>
        </div>
      </nav>
    );
  };
}

export default Navbar;
