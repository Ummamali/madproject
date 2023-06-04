import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';

export default function TripsButton() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'flex-end',
        backgroundColor: '#ddd',
        width: 45,
        height: 45,
        borderRadius: 400,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
      }}
      onPress={() => navigation.navigate('BookedFlights')}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Image
          source={require('./images/bookedIcon.png')}
          style={{width: 16, height: 16, opacity: 0.9}}
        />
        <Text style={{fontSize: 11, color: '#000', opacity: 0.85}}>Trips</Text>
      </View>
    </TouchableOpacity>
  );
}
