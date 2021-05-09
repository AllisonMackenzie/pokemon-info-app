import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {setupCache} from 'axios-cache-adapter';
import './PokemonInfo.css';

export default function PokemonInfo() {
  const [currentPokemonID, setCurrentPokemonID] = useState();
  const [currentPokemonJSON, setCurrentPokemonJSON] = useState();
  const [currentPokemonMoves, setCurrentPokemonMoves] = useState();
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
        setCurrentPokemonMoves(res.data.moves.map((p) => p.move.name));
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
          loading="lazy"
        />
        <img
          className="pokemon"
          src={`sprites/pokemon/animated/shiny/${currentPokemonID}.gif`}
          alt="Shiny goes here"
          loading="lazy"
        />
        <div>{`ID #${currentPokemonID}`}</div>
        <div className="types">
          <div>
            <br />
            TYPES
          </div>
          <div className="capitalize type1">
            {currentPokemonJSON.types[0].type.name}
          </div>
          <div className="capitalize type2">
            {currentPokemonJSON.types[1] !== undefined
              ? currentPokemonJSON.types[1].type.name
              : null}
          </div>
        </div>
        <div className="abilites">
          <div>
            <br />
            ABILITIES
          </div>
          <div className="capitalize ability1">
            {currentPokemonJSON.abilities[0].ability.name}
          </div>
          <div className="capitalize ability2">
            {currentPokemonJSON.abilities[1] !== undefined
              ? currentPokemonJSON.abilities[1].ability.name
              : null}
          </div>
          <div className="capitalize ability3">
            {currentPokemonJSON.abilities[2] !== undefined
              ? `HIDDEN: ${currentPokemonJSON.abilities[2].ability.name}`
              : null}
          </div>
          <div className="base-stats">
            <div>
              <br />
              BASE STATS
            </div>
            <div className="hp">{`HP: ${currentPokemonJSON.stats[0].base_stat}`}</div>
            <div className="attack">
              {`Atk: ${currentPokemonJSON.stats[1].base_stat}`}
            </div>
            <div className="defense">
              {`Def: ${currentPokemonJSON.stats[2].base_stat}`}
            </div>
            <div className="special-attack">
              {`Sp. Atk: ${currentPokemonJSON.stats[3].base_stat}`}
            </div>
            <div className="special-defense">
              {`Sp. Def: ${currentPokemonJSON.stats[4].base_stat}`}
            </div>
            <div className="speed">{`Speed: ${currentPokemonJSON.stats[5].base_stat}`}</div>
          </div>
          <div className="moves">
            <br />
            MOVES
          </div>
          <div className="capitalize moveList">
            {currentPokemonMoves.map((pokeMove) => (
              <div key={pokeMove}>
                {currentPokemonMoves === undefined
                  ? 'undefined'
                  : `${pokeMove}`}
              </div>
            ))}
          </div>
          <div></div>
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
