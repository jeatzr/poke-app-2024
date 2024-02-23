import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';

export default function Details() {

  const { pokemonName } = useParams();
  console.log(pokemonName);

  return (
    <PokemonDetail name={pokemonName} />
  )
}
