import React, { useState, useEffect } from 'react';
import './App.css';
import { getPokes } from './services/pokeapi'
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
//const URL_POKE = "https://pokeapi.co/api/v2/pokemon?limit=500"

//declaramos el componente App como función
function App() {

  //Inicializamos el estado del componente con hooks
  const [pokes, setPokes] = useState([]);
  const [search, setSearch] = useState('');

  //hook useEffect que se ejecuta para inicializar el componente
  useEffect(() => {

    getPokes().then(pokes => setPokes(pokes));

  }, [])


  function onSearchChange(searchTerm) {
    setSearch(searchTerm)
  }

  const filteredPokemons = pokes.filter(pokemon => {
    return pokemon.name.toLowerCase().startsWith(search.toLowerCase());
  });

  //renderizado del componente:
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Poke App</h1>
        <SearchBox
          placeholder="Búsqueda Pokemon"
          onSearchChange={onSearchChange}
        />
        <CardList pokes={filteredPokemons} />
      </header>
    </div>
  );
}

export default App;
