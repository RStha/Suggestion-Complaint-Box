import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css'

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path= '/login' component={Login} />
        <Route exact path= '/' component={Dashboard} /> 
        <Route exact path= '/signup' component={SignUp} /> 
      </Switch>
      </BrowserRouter>
    );
  }

}

export default App;
