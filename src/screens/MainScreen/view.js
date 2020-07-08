// @flow

import React from 'react';
import {type PokemonsListModel} from './model.js';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import PokemonItem from './Components/PokemonItemView';
import styles from './style';

type Props = {
  model: PokemonsListModel,
};

const PokemonsListView = (props: Props) => {
  const {model} = props;
  const {counter, pokemons, onLoadMore} = model;

  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={pokemons}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <PokemonItem item={item} />
            </TouchableOpacity>
          );
        }}
        onEndReachedTrheshold={0.5}
        onEndReached={onLoadMore}
      />
    </View>
  );
};

export default PokemonsListView;
