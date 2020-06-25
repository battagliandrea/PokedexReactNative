import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import PokemonItem from '../components/PokemonItem';

class PokemonsListScreen extends React.Component {
    render(){
        return (
            <View style={style.container}>
                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data = { this.props.pokemons }
                    keyExtractor = {(item) => item.name}
                    renderItem = { ({item}) => {
                        return (
                            <TouchableOpacity>
                                <PokemonItem pokemon={item}/>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        )
    }

    componentDidMount() {
        this.props.reduxGetPokemon()
    }
}

const style = StyleSheet.create({
    container: {
        flex:1
    }
});

const mapStateToProps = (state) => {    
    return {
      pokemons: state.pokemonReducer.pokemonItems
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        reduxGetPokemon: () => dispatch({
            type: 'GET_POKEMONS'
        })
    };
};
  
// Exports
export default connect(mapStateToProps, mapDispatchToProps)(PokemonsListScreen);