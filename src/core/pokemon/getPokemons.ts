const LIMIT = 20;
export default async function getPokemons() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}`
  );
  const data = await response.json();
  return data.results;
}
