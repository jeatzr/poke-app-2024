import React from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom'

const CardList = ({ pokes }) => {
  return (
    <div className='card-list' >
      {pokes.map(poke =>
        <Link to={"/pokemon/" + poke.name}>
          <Card poke={poke} key={poke.url} />
        </Link>
      )}
    </div>
  )
};

export default CardList;