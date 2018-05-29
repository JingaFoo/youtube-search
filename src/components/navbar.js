import React from 'react';
import SearchBar from './search_bar';

import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <a className="navbar-brand" href="/">YouTube</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <div className="nav-left col-3">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
          </ul>
        </div>
        <div className="nav-right col-7">
          <SearchBar />
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
