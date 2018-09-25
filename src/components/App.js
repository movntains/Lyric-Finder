import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../actions';
import Navbar from './layout/Navbar';
import IndexPage from './layout/IndexPage';
import Lyrics from './tracks/Lyrics';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);