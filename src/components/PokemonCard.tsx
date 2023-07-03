import React from "react";
import { Pokemon } from "../interfaces";
import { getPokemonImage } from "../utils/PokemonUtils";

// Card containing the pokemon
const PokemonCard: React.FC<Pokemon> = (pokemon) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img src={getPokemonImage(pokemon)} alt={pokemon.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">
              {/* Miscelaneous to just uppercase the first name of the pokemon */}
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </p>
          </div>
        </div>
        {/* Those contents are not listed as requirements, but since those are important informations about the pokemon I decided to add it anyway */}
        <div className="content">
          <p>
            <b>Abilities</b>:{" "}
            {pokemon.abilities.map((ability) => ability).join(", ")}
          </p>
          <p>
            <b>Types</b>: {pokemon.types.map((type) => type).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
