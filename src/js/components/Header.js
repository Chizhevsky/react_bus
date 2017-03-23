import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="col-md-8 col-md-offset-2">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">London Bus</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Main</a></li>
                <li><a href="#">Buses</a></li>
                <li><a href="#">Stations</a></li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}
