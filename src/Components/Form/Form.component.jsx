import { useEffect, useState } from "react";
import PokemonImage from "../PokemonImage";
import ForwardsButton from "../ForwardsButton/";
import BackwardsButton from "../BackwardsButton/";
import "./Form.styles.css";

const Form = () => {
  const [formText, setFormText] = useState();
  const [id, setId] = useState(1);
  const [pokemonData, setPokemonData] = useState({
    name: "no pokemon Selected",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("useeffec");
    const idUpdateFunction = async () => {
      try {
        let data = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
        let json = await data.json();
        console.log(json);
        setId(json.id);
        setPokemonData({
          name: json.name,
          image: json.sprites.front_default,
        });
        if (error.length > 0) {
          setError("");
        }
      } catch {
        console.log("No pokemon found!");
        setError("No pokemon found!");
      }
    };

    idUpdateFunction();
  }, [id, error]);

  const updatePokemon = async (e) => {
    e.preventDefault();

    try {
      let data = await fetch("https://pokeapi.co/api/v2/pokemon/" + formText);
      let json = await data.json();
      console.log(json);
      setId(json.id);
      setPokemonData({
        name: json.name,
        image: json.sprites.front_default,
      });
      if (error.length > 0) {
        setError("");
      }
    } catch {
      console.log("No pokemon found!");
      setError("No pokemon found!");
    }
  };

  return (
    <>
      <div>
        <PokemonImage
          id={id}
          name={pokemonData.name}
          image={pokemonData.image}
        />
        <form className="formCss" onSubmit={updatePokemon}>
          <input onChange={(e) => setFormText(e.target.value)} />
          <button className="searchButton">Search pokemon!</button>
        </form>
        {error ? <div>{error}</div> : ""}
        <div className="backAndForwardContainer">
          <BackwardsButton id={id} setId={setId} />
          <ForwardsButton id={id} setId={setId} />
        </div>
      </div>
    </>
  );
};

export default Form;
