import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  titleTextStyle,
  subtitleTextStyle,
  textInputStyle,
  heroScreenStyle,
  normalScreenStyle,
} from './globalConfig';
import TripsButton from './TripsButton';
import Fuse from 'fuse.js';
import flightsData from './flightsData';
import FlightResult from './FlightResult';
import {SearchFlightsCities, debounce, searchFlights} from './utilFuncs';
import NoFlightsPrompt from './NoFlightsPrompt';

export default function SearchResult({route, navigation}) {
  const {params} = route;
  const [tocity, setTocity] = useState(params.tocity ? params.tocity : '');
  const [flights, setFlights] = useState([]);
  const timeoutRef = useRef({timeout: null});

  useEffect(() => {
    debounce(
      () =>
        setFlights(
          SearchFlightsCities([
            {name: 'fromcity', value: params.fromcity},
            {name: 'tocity', value: tocity},
          ]),
        ),
      timeoutRef.current,
    );
  }, [tocity]);

  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.titleText}>Search</Text>
        <TripsButton />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('FlightSearch')}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            ...styles.subtitleText,
          }}>
          Your departure from:{' '}
        </Text>
        <Text style={{...styles.subtitleText, color: '#05948F'}}>
          {params.fromcity}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#777',
          marginBottom: 20,
        }}>
        <Image
          source={require('./images/globeIcon.png')}
          style={{width: 26, height: 26, opacity: 0.6, marginBottom: -8}}
        />
        <TextInput
          style={styles.textInputStyles}
          placeholder="search destination here..."
          placeholderTextColor={'#999'}
          value={tocity}
          onChangeText={setTocity}
        />
      </View>
      <View style={{flex: 1}}>
        {flights.length === 0 ? (
          <NoFlightsPrompt />
        ) : (
          <ScrollView>
            {flights.map(flightId => (
              <FlightResult flightId={flightId} key={flightId} />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    ...normalScreenStyle,
    flex: 1,
  },
  titleText: {
    ...titleTextStyle,
    fontSize: 32,
  },
  textInputStyles: {
    ...textInputStyle,
    flex: 1,
    borderBottomWidth: 0,
    paddingBottom: 3,
    marginLeft: 4,
  },
  normalText: {fontSize: 13, opacity: 0.7},
  subtitleText: {
    ...subtitleTextStyle,
  },
});
