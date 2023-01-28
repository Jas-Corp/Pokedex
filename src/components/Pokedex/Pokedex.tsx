import Pokemon from "../../types/Pokemon";
import PokeList from "./PokeList";

type Props = {
  pokemons: Pokemon[];
};
const Pokedex = ({ pokemons }: Props) => {
  return (
    <div className="pokedex">
      <div className="pokedex__left">
        <PokeList pokemons={pokemons} />
      </div>
      <div className="pokedex__center" />
      <div className="pokedex__right"></div>
    </div>
  );
};

export default Pokedex;
