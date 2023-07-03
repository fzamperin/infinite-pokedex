import { PokemonBriefResponse } from "../interfaces/api"
import { Pokemon } from "../interfaces/internal";

// Util function to generate an image of the pokemon
export function getPokemonImage(pokemon: Pokemon) {
  // Using this static url in order to fetch the images of the pokemons
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
}
