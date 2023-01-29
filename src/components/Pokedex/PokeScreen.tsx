import { useEffect, useState } from "react";
import getPokemonData from "../../core/pokemon/getPokemonData";
import Pokemon from "../../types/Pokemon";
import PokemonData from "../../types/PokemonData";

type Props = {
  pokemon: Pokemon;
};

// Display the selected pokemon type and image
const PokeScreen = ({ pokemon }: Props) => {
  const [pokemonData, setPokemonData] = useState<PokemonData>();

  const loadPokemonData = async () => {
    const pokemonData = await getPokemonData(pokemon.url);
    setPokemonData(pokemonData);
  };

  useEffect(() => {
    loadPokemonData();
  }, [pokemon]);

  return (
    <div className="pokescreen">
      <div className="pokescreen__display">
        <p className="pokescreen__display__name">{pokemon.name}</p>
        <img src={pokemonData?.sprites.front_default} alt="" />
        <p className="pokescreen__display__types">
          {pokemonData?.types.map((type) => {
            return type.type.name + " ";
          })}
        </p>
      </div>
    </div>
  );
};

export default PokeScreen;
