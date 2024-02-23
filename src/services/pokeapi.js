const URL_POKE = "https://pokeapi.co/api/v2/pokemon";

//función que devuelve todos los pokemons de la API
export async function getPokes() {
  let data = await fetch(URL_POKE + "?limit=2000");
  let pokes = await data.json();
  console.log(pokes);
  return pokes.results;
}

export async function getPokeByName(name) {
  let data = await fetch(URL_POKE + "/" + name);
  let poke = await data.json();
  console.log(poke);
  return poke;

}

export async function getPokeByURL(URL) {
  let data = await fetch(URL);
  let poke = await data.json();
  console.log(poke);
  return poke;
}