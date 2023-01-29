import getPokemonImageUrl from "../../core/utils/getPokemonImageUrl";
import Pokemon from "../../types/Pokemon";
import click from "../../resources/sounds/click.mp3";

type Props = {
  pokemon: Pokemon;
  pokemonId: number;
  setSelectedPokemon: (pokemon: Pokemon) => void;
};

// The PokeCard component is a child of the PokeList component.
const PokeCard = ({ pokemon, pokemonId, setSelectedPokemon }: Props) => {
  const audio = new Audio(click);

  const handleClick = () => {
    setSelectedPokemon(pokemon);
    audio.play();
  };

  return (
    <div className="pokecard" onClick={handleClick}>
      <img
        src={getPokemonImageUrl(pokemonId)}
        alt={`The pokemon ${pokemon.name}`}
      />
      <p className="pokecard__title">{pokemon.name}</p>
    </div>
  );
};

export default PokeCard;
