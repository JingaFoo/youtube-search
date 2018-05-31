import React, { Component } from 'react';

import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'league of legends' };
    this.searchRef = React.createRef();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand" href="/"><i className="icon ion-logo-youtube">MyTube :)</i></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="icon ion-md-menu menu-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="nav-left col-2 d-none d-sm-block">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/"><i className="icon ion-md-home"></i></a>
                </li>
              </ul>
            </div>
            <div className="nav-right col-7 d-none d-sm-block">
              <div className="input-group">
                <input
                  className="search-input form-control"
                  value={this.state.term}
                  onChange={e => this.onInputChange(e.target.value)}
                  ref={this.searchRef}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-primary" type="button">
                    <i className="icon ion-md-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="mobile-view d-block d-sm-none">
              <ul className="navbar-nav">
                <li className="nav-item ml-auto">
                  <a className="nav-link" href="/">Home</a>
                  <a className="nav-link" href="/">Channels</a>
                </li>
              </ul>
              <div className="input-group">
                <input
                  className="search-input form-control"
                  value={this.state.term}
                  onChange={e => this.onInputChange(e.target.value)}
                  ref={this.searchRef}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-primary" type="button">
                    <i className="icon ion-md-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term)
  }

}

export default Navbar;
