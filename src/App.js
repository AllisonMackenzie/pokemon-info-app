import React, {useState, useEffect, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Display from './pages/Display';
import PokemonInfo from './components/PokemonInfo';

export default function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Router history={History}>
          <div>
            <Switch>
              <Route exact path="/" component={Display} />
            </Switch>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
}
