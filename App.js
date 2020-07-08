// Imports: Dependencies
import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from 'react-navigation-stack';
import {store} from './src/Store/Store';
import PokemonsListScreen from './src/Screens/PokemonListScreen';
import MainScreen from './src/Screens/MainScreen/index';
import {createAppContainer} from 'react-navigation';

const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Pokemons: PokemonsListScreen,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: 'Pokemons',
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
