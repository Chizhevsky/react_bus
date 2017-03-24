import React from 'react';

import Header from './Header';
import ListOfStations from './ListOfStations';

export default class Stations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: props.route.stations,
    };
  }
  handleStations(e) {
    let searchStation = e.target.value.toLowerCase();
    let newStations = this.props.route.stations.filter( (el) => {
      const value = el.name.toLowerCase();
      return value.indexOf(searchStation) !== -1;
    });
    this.setState({
      stations: newStations
    });
  }
  render() {
    console.log(this.props.route.stations[0].name);
    return (
      <div>
        <Header />
        <div id="stations-page" className="row">
          <div className="col-md-4 col-md-offset-4">
            <h2>Stations for 901 bus</h2>
            <input className="form-control" onChange={this.handleStations.bind(this)} />
          </div>
          <div className="col-md-4 col-md-offset-4 list-of-station">
            {
              this.state.stations.map( (el) => {
                return <ListOfStations
                  key = {el.id}
                  name = {el.name}
                  street = {el.street}
                  anotherTransport = {el.anotherTransport}
                />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
