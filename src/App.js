import React, {useState, useEffect, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PokemonList from './components/PokemonList';
import Display from './pages/Display';
//import PokemonList from './components/PokemonList';
//
//import Pagination from './pages/Pagination';

//const NavRoute = ({exact, path, component: Component, navbar}) => (
//  <Route
//    exact={exact}
//    path={path}
//    render={(props) => (
//      <div>
//        <Component {...props} />
//      </div>
//    )}
//  />
//);
//
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
