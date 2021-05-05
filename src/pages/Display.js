import React from 'react';
import PokemonList from '../components/PokemonList';
import PokemonInfo from '../components/PokemonInfo';
import './Display.css';

export default function Display() {
  return (
    <div className="parentComponent">
      <div className="pokemonList">
        <PokemonList />
      </div>
      <div className="pokemonInfo">
        <PokemonInfo key={window.location.href} />
      </div>
    </div>
  );
}
