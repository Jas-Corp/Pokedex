import Pokemon from "../../types/Pokemon";
import PokeCard from "./PokeCard";

type Props = {
  pokemons: Pokemon[];
};
const PokeList = ({ pokemons }: Props) => {
  return (
    <div className="pokelist">
      {pokemons.map((pokemon, index) => {
        return <PokeCard pokemonId={index + 1} pokemon={pokemon} key={index} />;
      })}
    </div>
  );
};

export default PokeList;
