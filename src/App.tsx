import { useEffect, useState } from "react";
import getPokemons from "./core/pokemon/getPokemons";
import PokedexContainer from "./layouts/PokedexContainer";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const loadPokemons = async () => {
    const data = await getPokemons();
    setPokemons(data);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <div className="App">
      <h1 className="title">
        Poke<span className="title-black">dex</span>
      </h1>
      <PokedexContainer>
        <Pokedex pokemons={pokemons} />
      </PokedexContainer>
    </div>
  );
}

export default App;
