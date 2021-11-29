import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home/Home';
import EpisodeDetail from './pages/EpisodeDetail/EpisodeDetail';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="EpisodeDetailScreen" component={EpisodeDetail} />
        <Stack.Screen
          name="CharacterDetailScreen"
          component={CharacterDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
