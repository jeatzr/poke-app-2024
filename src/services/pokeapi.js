const URL_POKE = "https://pokeapi.co/api/v2/pokemon?limit=2000";

//función que devuelve todos los pokemons de la API
export async function getPokes() {
  let data = await fetch(URL_POKE);
  let pokes = await data.json();
  console.log(pokes);
  return pokes.results;

}

export async function getPokeByName(name) {

}
export async function getPokeById(id) {

}

export async function getPokeByURL(URL) {
  let data = await fetch(URL);
  let poke = await data.json();
  console.log(poke);
  return poke;

}