// @flow

import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {type Reducer} from 'redux';
import {type ActionSaga} from '../../ActionsReducersType';
import {type Pokemon} from '../../Types/Pokemon';
import {type PokemonReducerState} from '../../Reducers/PokemonReducer';
import {fetchPokemon} from '../../ActionReducers/PokemonsReducerActions';
import PokemonsListView from './view';
import {type PokemonsListModel} from './model';

type Props = {
  pokemonReducer: PokemonReducerState,
  fetchPokemon: (offeset: number) => ActionSaga,
};

type State = {};

class MainScreen extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.loadPokemon();
  }

  componentDidUpdate(prevProps: Props) {}

  componentWillUnmount() {}

  getCurrentPokemons = (): Array<Pokemon> => {
    return this.props.pokemonReducer.pokemons;
  };

  loadPokemon = () => {
    const offset = this.getCurrentPokemons().length;
    this.props.fetchPokemon(offset);
  };

  getPokemonListModel = (): PokemonsListModel => {
    const pokemons = this.getCurrentPokemons();

    return {
      counter: pokemons.length,
      pokemons: pokemons,
      onLoadMore: this.loadPokemon,
    };
  };

  render() {
    return <PokemonsListView model={this.getPokemonListModel()} />;
  }
}

const mapStateToProps = (state: Reducer) => {
  return {
    pokemonReducer: state.pokemonReducer,
  };
};

const mapDispatchToProps = {
  fetchPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
