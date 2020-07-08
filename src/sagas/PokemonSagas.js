// @flow

import {type Saga} from 'redux-saga';
import {put} from 'redux-saga/effects';
import PokeApi from '../Api/PokeApi';
import {type ActionSaga} from '../ActionsReducersType';
import {
  fetchPokemonSuccess,
  fetchPokemonFailure,
} from '../ActionReducers/PokemonsReducerActions.js';
import {
  IMAGE_URL,
  API_URL_KEY_LIMIT,
  API_URL_KEY_OFFSET,
  API_URL_CONST_OFFSET,
  API_URL_QUERY_POKEMON,
} from '../Utils/Constants';

export function* fetchPokemons(action: ActionSaga): Saga<void> {
  try {
    var response = yield PokeApi.get(
      `${API_URL_QUERY_POKEMON}?${API_URL_KEY_OFFSET}=${action.payload.offset}&${API_URL_KEY_LIMIT}=${API_URL_CONST_OFFSET}`,
    );

    const pokemons = response.data.results.map((pokemon) => {
      const splittedString = pokemon.url.split('/');
      const id = splittedString[splittedString.length - 2];
      const imageUrl = `${IMAGE_URL}/${id}.png`;
      return {
        ...pokemon,
        id: id,
        imageUrl: imageUrl,
      };
    });

    yield put(fetchPokemonSuccess(pokemons));
  } catch (error) {
    console.log(error);
    yield put(fetchPokemonFailure());
  }
}
