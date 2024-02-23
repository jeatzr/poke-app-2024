import React from 'react'
import { useEffect, useState } from 'react';
import { getPokeByName } from '../../services/pokeapi';

export default function PokemonDetail({ name }) {

  const [pokeData, setPokeData] = useState(null)

  useEffect(() => {
    getPokeByName(name)
      .then(json => {
        setPokeData(json)
        console.log(json)
      })
  }, [])

  return (
    <div>
      {pokeData && (<div>{pokeData.name}</div>)}
      <img
        src={
          pokeData?.sprites?.other?.dream_world?.front_default ||
          pokeData?.sprites?.front_default
        }
        alt={pokeData?.name}
      />
    </div>
  )
}
