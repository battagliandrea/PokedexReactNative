// Imports: Dependencies
import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from 'react-navigation-stack';
import {store} from './src/store/Store';
import PokemonsListScreen from './src/screens/PokemonListScreen';
import {createAppContainer} from 'react-navigation';

const navigator = createStackNavigator(
  {
    Pokemons: PokemonsListScreen,
  },
  {
    initialRouteName: 'Pokemons',
    defaultNavigationOptions: {
      title: 'Pokedex',
    },
  },
);

const AppContainer = createAppContainer(navigator);

// React Native App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
