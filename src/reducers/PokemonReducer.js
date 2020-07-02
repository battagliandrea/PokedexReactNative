import Immutable from 'seamless-immutable';
import Pokemon from '../models/pokemon';

export type PokemonReducerState = {
  +pokemonItems: Array<Pokemon>,
};

const initialState: PokemonReducerState = Immutable({
  isLoading: false,
  pokemons: []
});

const pokemonReducer = (state = initialState, action): PokemonReducerState => {
  switch (action.type) {
    case 'GET_POKEMONS': {
      return {
        ...state,
        isLoading: true
      };
    }
    case 'GET_POKEMONS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        pokemons: action.value
      };
    }
    case 'GET_POKEMONS_ERROR': {
      return {
        ...state,
        isLoading: false,
        pokemons: [],
        offset: 0
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default pokemonReducer;
