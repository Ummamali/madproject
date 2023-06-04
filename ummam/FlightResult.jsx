import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import citiesData from './citiesData';
import flightsData from './flightsData';
import { useNavigation } from '@react-navigation/native';

export default function FlightResult({
  flightId,
}) {
  const {fromcity, tocity, date, airline, seatsAvailable, discount, price} = flightsData[flightId];
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
      }}
      onPress={() => navigation.navigate('FlightDetails', {flightId})}
      >
      <View style={styles.imageContainer}>
        <Image source={citiesData[fromcity].image} style={styles.cityImage} />
        <Text style={styles.smallText}>{citiesData[fromcity].name}</Text>
      </View>
      <View>
        <Text style={styles.title}>{airline}</Text>
        <Text style={styles.normalText}>{seatsAvailable + ' seats'}</Text>
        <Text style={styles.normalText}>{date}</Text>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{width: '90%', height: 1, backgroundColor: '#ccc', marginTop: 4 }}></View>
        </View>
        <Text style={styles.priceLabel}>{'$' + (price * (1 - discount)).toFixed(2)}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={citiesData[tocity].image} style={styles.cityImage} />
        <Text style={styles.smallText}>{citiesData[tocity].name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityImage: {width: 94, height: 94, borderRadius: 3},
  smallText: {
    fontSize: 11,
    fontFamily: 'Roboto-Regular',
    color: '#777',
    marginTop: 4,
    textAlign: 'center',
  },
  normalText: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    color: '#777',
    marginTop: 0,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    color: '#555',
    marginTop: 4,
    textAlign: 'center',
  },
  priceLabel: {
    fontSize: 21,
    fontFamily: 'Roboto-Regular',
    color: '#05948F',
    marginTop: 4,
    textAlign: 'center',
  },
});
