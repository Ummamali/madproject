import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function NoFlightsPrompt({
  title = 'No Flights to Show',
  message = 'We are unable to find the flights specified',
}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      }}>
      <Image
        source={require('./images/noResults.png')}
        style={{width: 35, height: 35}}
      />
      <Text style={{fontSize: 22, color: '#000', opacity: 0.7, marginTop: 6}}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: 'black',
          opacity: 0.5,
          marginBottom: 10,
          marginTop: -1,
        }}>
        {message}
      </Text>
      <TouchableOpacity
        style={{marginBottom: 10}}
        onPress={() => navigation.navigate('FlightSearch')}>
        <Text style={{fontSize: 14, color: '#1B594E'}}>
          Flights Search Portal
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PopularPackages')}>
        <Text style={{fontSize: 14, color: '#1B594E'}}>Popular Packages</Text>
      </TouchableOpacity>
    </View>
  );
}
