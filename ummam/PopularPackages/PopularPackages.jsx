import React, {useEffect, useRef, useState} from 'react';
import {Text, View, StyleSheet, TextInput, ScrollView} from 'react-native';
import {
  titleTextStyle,
  subtitleTextStyle,
  textInputStyle,
  heroScreenStyle,
  normalScreenStyle,
} from '../globalConfig';
import StyledButton from '../StyledButton';
import FlightResult from '../FlightResult';
import popularFlights from '../popularFlights';
import TripsButton from '../TripsButton';
import {debounce, searchFlights, searchFlightsMixed} from '../utilFuncs';
import NoFlightsPrompt from '../NoFlightsPrompt';

export default function PopularPackages({navigation}) {
  const [shownPackages, setShownPackages] = useState([]);
  const [q, setQ] = useState('');
  const timeoutRef = useRef({timeout: null});

  useEffect(() => {
    debounce(
      () =>
        setShownPackages(
          searchFlightsMixed([{name: 'fromcity'}, {name: 'tocity'}], q),
        ),
      timeoutRef.current,
    );
  }, [q]);

  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.titleText}>Popular Packages</Text>
        <TripsButton />
      </View>
      <Text style={styles.subtitleText}>
        Our featured packages, tailored for you
      </Text>
      <StyledButton
        onPress={() => navigation.navigate('FlightSearch')}
        title="Search Flights Instead"
        additionalStyle={{
          width: '45%',
          marginTop: 10,
          padding: 9,
          borderRadius: 4,
          backgroundColor: '#1B594E',
        }}
        titleFontSize={14}
      />
      <View style={{marginTop: 26}}>
        <Text style={{...styles.subtitleText, fontSize: 13, marginBottom: -8}}>
          Search destinations
        </Text>
        <TextInput style={styles.textInput} value={q} onChangeText={setQ} />
      </View>
      <ScrollView style={{marginTop: 28, flex: 1, marginBottom: 16}}>
        {shownPackages.length > 0 ? (
          shownPackages.map(fid => <FlightResult flightId={fid} key={fid} />)
        ) : (
          <NoFlightsPrompt />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    ...normalScreenStyle,
  },
  titleText: {
    ...titleTextStyle,
    fontSize: 34,
  },
  subtitleText: {
    ...subtitleTextStyle,
  },
  textInput: {...textInputStyle},
  ftr: {
    fontFamily: 'Roboto-Regular',
    color: '#999',
    textAlign: 'center',
    fontSize: 12.5,
  },
});
