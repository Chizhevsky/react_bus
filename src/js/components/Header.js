import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="col-md-8 col-md-offset-2">
            <div className="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">London Bus</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/">Main</Link></li>
                <li><Link to="/buses">Buses</Link></li>
                <li><Link to="/stations">Stations</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}
