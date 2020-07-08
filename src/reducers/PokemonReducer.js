// @flow

import Immutable from 'seamless-immutable';
import {type Pokemon} from '../Types/Pokemon';
import {type ActionSaga} from '../ActionsReducersType';
import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
} from '../ActionsReducersType/ReducerActionsType';

export type PokemonReducerState = {
  +isLoading?: boolean,
  +pokemons: Array<Pokemon>,
};

const initialState: PokemonReducerState = Immutable({
  isLoading: false,
  pokemons: [],
});

const pokemonReducer = (
  state: PokemonReducerState = initialState,
  action: ActionSaga,
): PokemonReducerState => {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_POKEMONS_SUCCESS: {
      const data = Immutable(state.pokemons).concat(action.payload.pokemons);

      return {
        ...state,
        isLoading: false,
        pokemons: data,
      };
    }
    case FETCH_POKEMONS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        pokemons: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default pokemonReducer;
