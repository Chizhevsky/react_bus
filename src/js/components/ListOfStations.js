import React from 'react';

export default class Buses extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name} <small>{this.props.street} St.</small></h3>
        <h5>{this.props.anotherTransport}</h5>
      </div>
    );
  }
}
