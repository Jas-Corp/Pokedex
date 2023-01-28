import getPokemonImageUrl from "../../core/utils/getPokemonImageUrl";
import Pokemon from "../../types/Pokemon";

type Props = {
  pokemon: Pokemon;
  pokemonId: number;
};

const PokeCard = ({ pokemon, pokemonId }: Props) => {
  return (
    <div className="pokecard">
      <img
        src={getPokemonImageUrl(pokemonId)}
        alt={`The pokemon ${pokemon.name}`}
      />
      <p className="pokecard__title">{pokemon.name}</p>
    </div>
  );
};

export default PokeCard;
