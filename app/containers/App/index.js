/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ControlPanel from 'containers/ControlPanel/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from '../Login';
import Devices from '../Devices';
import NewDevice from '../NewDevice';

import GlobalStyle from '../../global-styles';
import '../../assets/global-style.css';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/control" component={ControlPanel} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/devices/new" component={NewDevice} />
        <Route exact path="/devices" component={Devices} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
