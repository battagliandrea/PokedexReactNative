// @flow

import React from 'react';
import {View, Image, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {type Pokemon} from '../../../Types/Pokemon';
import styles from '../style.js';

type Props = {
  item: Pokemon,
};

const PokemonItem = (props: Props) => {
  const {item} = props;
  const renderPokemon = (pokemon: Pokemon) => {
    return (
      <Card style={styles.card}>
        <View style={styles.cardContainer}>
          <Image style={styles.cardImage} source={{uri: pokemon.imageUrl}} />
          <Text style={styles.cardName}>{pokemon.name}</Text>
        </View>
      </Card>
    );
  };

  return renderPokemon(item);
};

export default PokemonItem;
