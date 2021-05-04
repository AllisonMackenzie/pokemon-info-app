import React, {useState} from 'react';
import PokemonList from '../components/PokemonList';
import PokemonInfo from '../components/PokemonInfo';
import axios from 'axios';
import './Display.css';

export default function Display() {
  return (
    <div className="parentComponent">
      <div className="pokemonList">
        <PokemonList />
      </div>
      <div className="pokemonInfo">
        <PokemonInfo />
      </div>
    </div>
  );
}
