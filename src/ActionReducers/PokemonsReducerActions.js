// @flow
import {type ActionSaga} from '../ActionsReducersType';
import {type Pokemon} from '../Types/Pokemon';
import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
} from '../ActionsReducersType/ReducerActionsType';

export const fetchPokemon = (offset: number): ActionSaga => ({
  type: FETCH_POKEMONS_REQUEST,
  payload: {offset},
});

export const fetchPokemonSuccess = (pokemons: Array<Pokemon>): ActionSaga => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: {pokemons},
});

export const fetchPokemonFailure = (): ActionSaga => ({
  type: FETCH_POKEMONS_FAILURE,
  payload: {},
});
