import Immutable from 'seamless-immutable';
import Pokemon from '../models/pokemon';

export type PokemonReducerState = {
  +pokemonItems: Array<Pokemon>,
};

const initialState: PokemonReducerState = Immutable({
  pokemonItems: [],
});

const pokemonReducer = (state = initialState, action): PokemonReducerState => {
  switch (action.type) {
    case 'GET_POKEMONS_ASYNC': {
      return {
        pokemonItems: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default pokemonReducer;
