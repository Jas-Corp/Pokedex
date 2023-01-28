import { useState } from "react";
import Pokemon from "../../types/Pokemon";
import PokeList from "./PokeList";
import PokeScreen from "./PokeScreen";

type Props = {
  pokemons: Pokemon[];
};
const Pokedex = ({ pokemons }: Props) => {
  if (pokemons.length === 0) return <div>Loading...</div>;
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(pokemons[0]);
  console.log(selectedPokemon);

  return (
    <div className="pokedex">
      <div className="pokedex__left">
        <PokeList pokemons={pokemons} setSelectedPokemon={setSelectedPokemon} />
      </div>
      <div className="pokedex__center" />
      <div className="pokedex__right">
        <PokeScreen pokemon={selectedPokemon} />
      </div>
    </div>
  );
};

export default Pokedex;
