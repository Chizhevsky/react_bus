import React from 'react';

import Header from './Header';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="main-page" className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="jumbotron">
              <h1>Hello</h1>
              <p>Test web-page on React. Please visit github to find code</p>
              <p><a className="btn btn-primary btn-lg" href="https://github.com/Chizhevsky/react_bus" role="button">GitHub</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
