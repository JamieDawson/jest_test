import Pokedex from "./Components/Pokedex";

import "./App.css";

function App() {
  return (
    <div className="everything">
      <div className="pokedex-container">
        <Pokedex />
      </div>
    </div>
  );
}

export default App;

/*
Recreate the pokedex!

1) Make an image carasel. Scan through images 0 - 1025

Can search through pokemon by name and number.

Displays:
  image
  name
  id
  Abilities


*/

/*
Design:

Make PokemontImage Component
        FrontButton
        BackButton

      Image
  name      id
  abilities: ....


*/
