import React from 'react';
import { IndexLink, Link } from 'react-router';

import Header from './Header';

export default class Buses extends React.Component {
  render() {
    return (
        <div id="list-of-buses" class="row">
          <div className="col-md-8 col-md-offset-2">
            <h1>Choose route <small>from Minsk to:</small></h1>
              <ul class="nav nav-pills nav-justified">
                <li role="presentation"><Link to="/buses/moskow">Moskow</Link></li>
                <li role="presentation"><Link to="/buses/vilnius">Vilnius</Link></li>
                <li role="presentation"><Link to="/buses/riga">Riga</Link></li>
              </ul>
          </div>
        </div>
    );
  }
}
