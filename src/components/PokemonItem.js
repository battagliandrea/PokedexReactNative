import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import {Card} from 'react-native-paper';

const PokemonItem = ({pokemon}) => {
  return (
    <Card style={style.card}>
      <View style={style.container}>
        <Image style={style.image} source={{uri: pokemon.imageUrl}} />
        <Text style={style.name}>{pokemon.name}</Text>
      </View>
    </Card>
  );
};

const style = StyleSheet.create({
  card: {
    flex: 1,
    width: (Dimensions.get('window').width - 32) / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 4,
    marginStart: 8,
    marginEnd: 8,
    padding: 4,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: '#FFFFFF',
    resizeMode: 'stretch',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PokemonItem;
