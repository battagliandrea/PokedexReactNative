import Immutable from 'seamless-immutable';

export type PokemonReducerState = {
  +pokemonItems: Array<PlayersScreenItem>,
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
