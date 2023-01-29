type Props = {
  children: React.ReactNode;
};

const PokedexContainer = ({ children }: Props) => {
  return <div className="pokedex-container">{children}</div>;
};

export default PokedexContainer;
