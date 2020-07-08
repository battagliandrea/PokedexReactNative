// @flow

import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
// import PokemonItem from '..r/Components/PokemonItem';

const PokemonsListScreen = () => {
  // You can use these instead of
  // mapStateToProps and mapDispatchToProps
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonReducer.pokemons);

  const [offset, setOffset] = useState(0);

  const loadPokemon = useCallback(() => {
    dispatch({type: 'FETCH_POKEMONS_REQUEST', payload: {offset: offset}});
  }, [dispatch, offset]);

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon, offset]);

  return (
    <View style={style.container}>
      <Text>{offset}</Text>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={pokemons}
        keyExtractor={(item) => item.name}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              {/* <PokemonItem pokemon={item} /> */}
            </TouchableOpacity>
          );
        }}
        onEndReachedTrheshold={0.5}
        onEndReached={() => {
          setOffset(pokemons.length);
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

export default PokemonsListScreen;
