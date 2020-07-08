// @flow

import {type Pokemon} from '../../Types/Pokemon';

export type PokemonsListModel = {
  counter: number,
  pokemons: Array<Pokemon>,
  onLoadMore: () => void,
};
