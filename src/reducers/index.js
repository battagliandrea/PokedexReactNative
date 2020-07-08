// @flow

import {combineReducers} from 'redux';

import PokemonReducer from './PokemonReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  pokemonReducer: PokemonReducer,
});

// Exports
export default rootReducer;
