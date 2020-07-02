// Imports: Dependencies
import {takeEvery, put} from 'redux-saga/effects';
import PokeApi from '../api/PokeApi';
import Pokemon from '../models/pokemon';

function* getPokemonsAsync(action): Array<Pokemon> {
  try {

    var response = yield PokeApi.get(`/pokemon?offset=${action.payload.offset}&limit=50`);

    const pokemons: Array<Pokemon> = response.data.results.map((pokemon) => {
      return Pokemon.class(pokemon);
    });

    yield put({
      type: 'GET_POKEMONS_SUCCESS',
      value: pokemons,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: 'GET_POKEMONS_ERROR',
      value: [],
    });
  }
}

export function* watchGetPokemons() {
  yield takeEvery('GET_POKEMONS', getPokemonsAsync);
}
