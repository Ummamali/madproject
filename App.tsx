// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import FlightSearch from './ummam/FlightSearch';
import PopularPackages from './ummam/PopularPackages/PopularPackages';
import Navbar from './ummam/Navbar/Navbar';
import FlightDetails from './ummam/FlightDetails';
import BookedFlights from './ummam/BookedFlights';
import SearchResult from './ummam/SearchResult';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <Stack.Navigator
        initialRouteName="PopularPackages"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="FlightSearch" component={FlightSearch} />
        <Stack.Screen name="PopularPackages" component={PopularPackages} />
        <Stack.Screen name="FlightDetails" component={FlightDetails} />
        <Stack.Screen name="BookedFlights" component={BookedFlights} />
        <Stack.Screen name="FlightSearchResult" component={SearchResult} />
      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
}

export default App;
