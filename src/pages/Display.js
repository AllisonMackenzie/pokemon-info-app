import React, {useState} from 'react';
import PokemonList from '../components/PokemonList';
import PokemonInfo from '../components/PokemonInfo';
import axios from 'axios';
import './Display.css';

export default function Display() {
  return (
    <React.Fragment>
      <div className="pokemonList">
        <PokemonList />
      </div>
      <div className="pokemonInfo">
        <PokemonInfo />
      </div>
    </React.Fragment>
  );
}
