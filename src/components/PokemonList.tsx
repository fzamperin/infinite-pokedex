import { useEffect, useRef } from "react";
import PokemonStore from "../store/PokemonStore";
import PokemonCard from "./PokemonCard";
import { observer } from "mobx-react";

const PokemonList: React.FC = observer(() => {
  // Get the store instance with the values observable and actions
  const { pokemons, isLoading, doneLoading, fetchPokemons } = PokemonStore;

  // set and observerTarget reference for the div
  const observerTarget = useRef(null);

  /* This useEffect is used to allow the IntersectionObserverApi to
      run when the user scrolls the page and the div created
      appears in the view
  */
  useEffect(() => {
    // Declare a new observer with the callback function to be executed and options
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Fetch if has intersected
            fetchPokemons();
        }
      },
      { threshold: 0.5 }
    );

    // If target has already with the value current then set to observe the target
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }


    // Disconnect and stops listening when component is dismounted
    return () => {
      if (observerTarget.current) {
        observer.disconnect();
      }
    };
  }, [observerTarget]);

  return (
    <div>
      <div className="columns is-multiline">
        {/* Iterate to render the pokemon's list */}
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className="column is-12-mobile is-4-tablet is-3-desktop">
              {/* Pass the entire object of a pokemon,
                  the logic has to be inside the component
                  and if something changes we do not need to change it here
              */}
              <PokemonCard {...pokemon} />
            </div>
          ))
        }
      </div>
      {/* Loading bar */}
      {isLoading && !doneLoading && (
          <progress className="progress is-small is-black" max="100">
            15%
          </progress>
        )}
        {/* ObserverTarget div to render more results when the user reaches the div */}
        {!doneLoading && <div ref={observerTarget}></div>}
    </div>
  );
});

export default PokemonList;
