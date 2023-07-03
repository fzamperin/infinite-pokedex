import { action, makeObservable, observable, runInAction } from 'mobx';
import { Pokemon } from '../interfaces/internal';
import { listPokemonsRequest } from '../requests';

// PokemonStore state class
class PokemonStore {
  private offset = 0;
  private readonly limit = 15;
  pokemons: Pokemon[] = [];
  isLoading = false;
  nextPage: string | null = null;
  doneLoading = false;

  constructor() {
    // marks the observable class with each object as it is, action and observable objects
    makeObservable(this, {
      pokemons: observable,
      isLoading: observable,
      fetchPokemons: action,
      doneLoading: observable,
    });
  }

  fetchPokemons = async () => {
    // Do not allow to list more pokemons if there's already a request being made
    if(this.isLoading) return;
    
    this.isLoading = true;

    try {
      // Fetch the pokemon list
      let pokemons = await listPokemonsRequest(this.offset, this.limit);

      // done loading when the result list is length 0
      if (pokemons.length === 0) {
        this.doneLoading = true;
        return;
      }

      // Push new pokemons with the pokemons list
      this.pokemons.push(...pokemons);

      // Increase the offset based on the limit
      this.offset += this.limit;
    } catch (error) {
      console.error('Error fetching pokemons:', error);
    }

    // When finished set loading to false
    this.isLoading = false;
  };
}

export default new PokemonStore();
