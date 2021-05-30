import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Pagination from '../pages/Pagination';
import axios from 'axios';
import {setupCache} from 'axios-cache-adapter';
import './PokemonList.css';

export default function PokemonList() {
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonURL, setPokemonURL] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'
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
    return 'If this is your first time being here, click a Pokemon to the left, otherwise... Loading, please wait!';
  }

  return (
    <React.Fragment>
      <Pagination
        nextPage={nextPageURL ? nextPage : null}
        previousPage={previousPageURL ? previousPage : null}
      />
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
                loading="lazy"
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
