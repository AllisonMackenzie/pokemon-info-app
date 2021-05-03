import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Pagination from '../pages/Pagination';
import axios from 'axios';
import './PokemonList.css';

export default function PokemonList() {
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonURL, setPokemonURL] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPageURL, setNextPageURL] = useState();
  const [previousPageURL, setPreviousPageURL] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageURL, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageURL(res.data.next);
        setPreviousPageURL(res.data.previous);
        setPokemonName(res.data.results.map((p) => p.name));
        setPokemonURL(res.data.results.map((p) => p.url));
      })
      .catch((err) => console.error(err));

    return () => cancel();
  }, [currentPageURL]);

  const nextPage = () => {
    setCurrentPageURL(nextPageURL);
  };

  const previousPage = () => {
    setCurrentPageURL(previousPageURL);
  };

  if (loading) {
    return 'Loading, please wait!';
  }

  return (
    <React.Fragment>
      <div>Pokemon List</div>
      <div>---------------</div>
      <div>
        {pokemonName.map((pokeName, index) => (
          <div key={pokeName}>
            {pokemonURL === undefined
              ? 'undefined'
              : getLastPart(pokemonURL[index]) + `. `}
            {<Link to={`${pokeName}`}>{`${pokeName}`}</Link>}{' '}
            {
              <img
                src={`sprites/pokemon/icons/${getLastPart(
                  pokemonURL[index]
                )}.png`}
                alt={`${pokeName} icon`}
                width="38px"
                height="38px"
              />
            }
          </div>
        ))}
      </div>
      <Pagination
        nextPage={nextPageURL ? nextPage : null}
        previousPage={previousPageURL ? previousPage : null}
      />
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
