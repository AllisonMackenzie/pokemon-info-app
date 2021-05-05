import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './PokemonInfo.css';

export default function PokemonInfo() {
  const [currentPokemonID, setCurrentPokemonID] = useState();
  const [currentPokemonJSON, setCurrentPokemonJSON] = useState();
  const [loading, setLoading] = useState(true);
  let {pokemon} = useParams();

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        console.log('resolved!');
        setCurrentPokemonID(res.data.id);
        setCurrentPokemonJSON(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));

    return () => cancel();
  }, [currentPokemonID]);

  if (loading) {
    return 'Loading, please wait!';
  }

  return (
    <React.Fragment>
      <div className="pokemonInfoDisplay">
        <div className="pokeInfoApp">{pokemon}</div>
        <img
          className="pokemon"
          src={`sprites/pokemon/animated/${currentPokemonID}.gif`}
          alt="Alt Text: Pokemon being displayed goes here... You shouldn't be seeing this, did you do something wrong?"
        />
        <img
          className="pokemon"
          src={`sprites/pokemon/animated/shiny/${currentPokemonID}.gif`}
          alt="Shiny goes here"
        />
        <div>{`#${currentPokemonID}`}</div>
        <div className="type1">{currentPokemonJSON.types[0].type.name}</div>
        <div className="type2">
          {currentPokemonJSON.types[1] !== undefined
            ? currentPokemonJSON.types[1].type.name
            : null}
        </div>
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
