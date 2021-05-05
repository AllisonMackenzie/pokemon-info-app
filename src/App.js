import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Display from './pages/Display';
import './App.css';

export default function App() {
  const [currentPokemon, setCurrentPokemon] = useState(null);

  return (
    <React.Fragment>
      <div className="App">
        <Router history={History}>
          <div className="switch">
            <Switch>
              <Route exact path="/" component={Display} />
              <Route path="/:pokemon" component={Display} />
            </Switch>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
}

const getLastPart = (url) => {
  if (url === undefined) {
    return 'ID undefined?';
  }
  let href = url.toString();
  let parts = href.split('/');
  return href.lastIndexOf('/') !== href.length - 1
    ? parts[parts.length - 1]
    : parts[parts.length - 2];
};
