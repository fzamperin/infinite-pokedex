import PokemonList from "./components/PokemonList";

// For the pokemon store, we could also instantiate the store or more stores in the beginning of our application
// And then pass the store along for the components to consume it, it could be easier to further write some unit tests
const App = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <p className="title">Pokelist</p>
          <p className="subtitle">Pokelist with infinite scroll attached</p>
        </div>
      </section>
      <section>
        {/* Our entire application basically starts in this component that lists the pokemons */}
        <PokemonList />
      </section>
    </div>
  );
};

export default App;
