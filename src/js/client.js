import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Main from './components/Main';
import Buses from './components/Buses';
import Stations from './components/Stations';
import SpecificBuses from './components/SpecificBuses';

const app = document.getElementById('app');

const stations = [
  {
    id: 1,
    name: 'Druznaia',
    street: 'Druznaia',
    anotherTransport: '901'
  },
  {
    id: 2,
    name: 'Vokzal',
    street: 'Babruiskai',
    anotherTransport: '46 78 127 151э 901'
  },
  {
    id: 3,
    name: 'Sverdlova',
    street: 'Sverdlova',
    anotherTransport: '901'
  },
  {
    id: 4,
    name: 'Dinamo Stadium',
    street: 'Ulianovskaia',
    anotherTransport: '901'
  },
  {
    id: 5,
    name: 'Lyceum',
    street: 'Ulianovskaia',
    anotherTransport: '901'
  },
  {
    id: 6,
    name: 'Gorki Park',
    street: 'Pulichova',
    anotherTransport: '901'
  },
  {
    id: 7,
    name: 'Pervomaiskaia',
    street: 'Pervomaiskaia',
    anotherTransport: '37 901'
  },
  {
    id: 8,
    name: 'Biaduli',
    street: 'Biaduli',
    anotherTransport: '901'
  },
  {
    id: 9,
    name: 'Independence Avenue',
    street: 'Masherova',
    anotherTransport: '19 901'
  },
  {
    id: 10,
    name: 'Krasnaia',
    street: 'Krasnaia',
    anotherTransport: '19 901'
  },
  {
    id: 11,
    name: 'Kuibisheva',
    street: 'Kuibisheva',
    anotherTransport: '29 44 136 901'
  },
  {
    id: 12,
    name: 'Komarovsky market',
    street: 'Horuzei',
    anotherTransport: '19 901'
  },
];

const routes = {
  moskow: {
    time: ["2:30", "5:40", "7:50", "8:30", "10:00", "11:30", "15:00", "17:15", "19:00", "20-00", "20-40", "21:30", "22:00", "23:15"]
  },
  vilnius: {
    time: ["5:30", "7:50", "8:30", "10:00", "11:30", "15:00", "19:00",  "20-40", "22:00", "23:15"]
  },
  riga: {
    time: ["6:30", "8:50", "9:30", "10:00", "12:30", "16:00", "19:00",  "20-15", "22:30", "23:40"]
  },
};

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main} />
      <Route path="/buses" component={Buses} />
      <Route path="/buses/:way" component={SpecificBuses} routes={routes} />
      <Route path="/stations" component={Stations} stations={stations}/>
  </Router>,
  app
);
