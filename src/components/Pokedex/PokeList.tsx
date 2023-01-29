import Pokemon from "../../types/Pokemon";
import PokeCard from "./PokeCard";

type Props = {
  pokemons: Pokemon[];
  setSelectedPokemon: (pokemon: Pokemon) => void;
};
// List of ALl Pokemon Fetch from API
const PokeList = ({ pokemons, setSelectedPokemon }: Props) => {
  return (
    <div className="pokelist">
      {pokemons.map((pokemon, index) => {
        return (
          <PokeCard
            pokemonId={index + 1}
            pokemon={pokemon}
            setSelectedPokemon={setSelectedPokemon}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default PokeList;
