// Imports: Dependencies
import {all} from 'redux-saga/effects';

// Imports: Redux Sagas
import {watchGetPokemons} from './PokemonSagas';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([watchGetPokemons()]);
}
