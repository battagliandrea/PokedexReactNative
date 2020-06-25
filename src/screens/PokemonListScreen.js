import React, {useCallback, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import PokemonItem from '../components/PokemonItem';

const PokemonsListScreen = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => {
    return state.pokemonReducer.pokemonItems;
  });

  const callPokemon = useCallback(() => dispatch({type: 'GET_POKEMONS'}), [
    dispatch,
  ]);

  useEffect(() => {
    const getPokemon = () => callPokemon();

    getPokemon();
  }, [callPokemon]);

  return (
    <View style={style.container}>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={pokemons}
        keyExtractor={(item) => item.name}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <PokemonItem pokemon={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// Exports
export default PokemonsListScreen;
