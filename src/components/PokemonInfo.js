import React, {useState} from 'react';
import axios from 'axios';
import './PokemonInfo.css';

export default function PokemonInfo() {
  const [currentPokemon, setCurrentPokemon] = useState(0);

  if (currentPokemon === 0) {
    return (
      <React.Fragment>
        <div className="pokeInfoApp">Hello</div>
        <img
          className="peekachu"
          src="sprites/pokemon/animated/25.gif"
          alt="Pikachu B/W animated Gif"
          width="100px"
          height="100px"
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div>
        YeeHawYeeHawYeeHawYeeHawYeeHawYeeHawYeeHawYeeHawYeeHawYeeHawYeeHaw
        YeeHawYeeHawYeeHawYeeHawYeeHawYeeHawYeeHaw YeeHawYeeHawYeeHaw
        YeeHawYeeHaw YeeHawYeeHaw YeeHawYeeHaw YeeHaw YeeHaw YeeHawYeeHaw
        YeeHawYeeHaw YeeHaw YeeHawYeeHawYeeHawYeeHaw YeeHaw YeeHawYeeHaw
        YeeHawYeeHaw YeeHawYeeHaw YeeHaw YeeHaw YeeHaw YeeHaw YeeHaw
        YeeHawYeeHaw YeeHaw YeeHaw YeeHawYeeHaw YeeHaw YeeHaw YeeHawYeeHaw
        YeeHawYeeHaw YeeHaw YeeHawYeeHaw YeeHaw YeeHaw YeeHawYeeHawYeeHaw YeeHaw
        YeeHaw YeeHaw YeeHaw YeeHawYeeHaw YeeHaw YeeHaw YeeHaw YeeHaw
        YeeHawYeeHaw YeeHawYeeHaw YeeHaw YeeHaw YeeHaw YeeHaw YeeHaw
        YeeHawYeeHaw YeeHaw YeeHaw
      </div>
    </React.Fragment>
  );
}
