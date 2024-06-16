import "./PokemonImage.styles.css";

const PokemonImage = ({ id, name, image }) => {
  return (
    <>
      <img alt="pokemon" src={image} className="image" />
      <div className="pokemon-info-container">
        <div className="idValue">ID: {id}</div>
        <div className="name">Name: {name}</div>
      </div>
    </>
  );
};

export default PokemonImage;
