import React from 'react';
import { IndexLink, Link } from 'react-router';

import Header from './Header';
import ListOfBuses from './ListOfBuses';

export default class Buses extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ListOfBuses />
      </div>
    );
  }
}
