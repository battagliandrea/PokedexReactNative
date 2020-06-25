import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const PokemonItem = ({pokemon}) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: pokemon.imageUrl}} />
      <Text style={style.name}>{pokemon.name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 5,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PokemonItem;
