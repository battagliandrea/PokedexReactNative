// @flow

import type {Effect} from 'redux-saga';
import {takeEvery} from 'redux-saga/effects';
import {fetchPokemons} from '../Sagas/PokemonSagas';
import {FETCH_POKEMONS_REQUEST} from '../ActionsReducersType/ReducerActionsType';

const mySaga = function* (): Iterable<Effect> {
  yield takeEvery(FETCH_POKEMONS_REQUEST, fetchPokemons);
};

export default mySaga;
