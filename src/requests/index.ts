import { PokemonApiResponse, PokemonResourceListResponse } from "../interfaces/api";
import { Pokemon } from "../interfaces/internal";
import request from "../utils/fetch";

export async function listPokemonsRequest(offset: number, limit = 15): Promise<Pokemon[]> {
  // This can be done more easily, since the api returns a next page from the response, but the requirements are explicit to use a offset and a limit
  // const response = await request<PokemonResourceListResponse>(this.nextPage || 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=15');

  // Gather the results
  const response = await request<PokemonResourceListResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);

  // done loading when the result list is length 0
  if (response.results.length === 0) {
    return [];
  }

  // Generate promises for other requests to gather more information about the pokemon
  // Although not specified, I decided to gather at list the type, photo and abilities of the pokemons
  // The api doesn't have a better way to do this with only listing, but since the api is cached and fast
  // We don't need to worry too much
  const promises: Promise<PokemonApiResponse>[] = [];

  // Insert promises inside the array
  for (const pokemonResponse of response.results) {
    const pokemonId = pokemonResponse.url.split("/").slice(-2, -1)[0];
    const requestPokemon = request<PokemonApiResponse>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    promises.push(requestPokemon);
  }

  // Fetch other properties
  const pokemonResponses = await Promise.all(promises);

  // Map the data to be used in the components of our application, reducing memory and maintaning an interface
  return pokemonResponses.map(pokemonResponse => ({
    id: pokemonResponse.id,
    name: pokemonResponse.name,
    abilities: pokemonResponse.abilities.map(ability => ability.ability.name),
    types: pokemonResponse.types.map(type => type.type.name),
  }));
}
