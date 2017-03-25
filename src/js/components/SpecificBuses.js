import React from 'react';
import { IndexLink, Link } from 'react-router';

import Header from './Header';
import ListOfBuses from './ListOfBuses';

export default class Buses extends React.Component {
  constructor(props) {
    super(props);
    this.routes = props.route.routes;
  }
  render() {
    const {way} = this.props.params;
    return (
      <div>
        <Header />
        <ListOfBuses />
        <div class="row">
          <div className="col-md-8 col-md-offset-2">
            <h1>{way}</h1>
            {
              this.routes[way].time.map((el) => {
                return (
                  <h3>{el}</h3>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
