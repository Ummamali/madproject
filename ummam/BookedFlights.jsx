import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  titleTextStyle,
  subtitleTextStyle,
  textInputStyle,
  heroScreenStyle,
  normalScreenStyle,
} from './globalConfig';
import StyledButton from './StyledButton';
import flightsData from './flightsData';
import citiesData from './citiesData';

import Color from 'color';
import {useNavigation} from '@react-navigation/native';
import NoFlightsPrompt from './NoFlightsPrompt';
import {useSelector, useDispatch} from 'react-redux';
import {CancelFlight, FirstLoad} from './store/MyBookingsSlice';

// Configs here
const cardHeight = 170;
const paddingY = 14;
const paddingX = 24;

const cardOuterPadding = 8;

export default function BookedFlights() {
  const myBookings = useSelector(state => state.myBookings.myBookings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FirstLoad());
  }, []);

  return (
    <View style={styles.screen}>
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.titleText}>Your Booked Flights</Text>
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
            style={{width: 26, height: 26, opacity: 0.8, marginBottom: -8}}
          />
          <TextInput
            style={styles.textInputStyles}
            placeholder="Special destinations here..."
            placeholderTextColor={'#999'}
          />
        </View>
      </View>
      <ScrollView>
        {Object.keys(myBookings).length > 0 ? (
          Object.keys(myBookings).map(flightId => (
            <Card flightId={flightId} key={flightId} myBookings={myBookings} />
          ))
        ) : (
          <NoFlightsPrompt />
        )}
      </ScrollView>
    </View>
  );
}

function Card({flightId, myBookings}) {
  const {tocity} = flightsData[flightId];
  return (
    <View
      style={{
        height: cardHeight,
        width: '100%',
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        elevation: 1,
        marginVertical: 8,
      }}>
      <ImageBackground
        source={citiesData[tocity].image}
        resizeMode="cover"
        style={{width: '100%', height: cardHeight}}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          opacity: 0.7,
        }}
      />
      <CardTextData flightId={flightId} myBookings={myBookings} />
    </View>
  );
}

function CardTextData({flightId, myBookings}) {
  const {date, time, notifications, airline, code, weightLimit, tocity} =
    flightsData[flightId];
  const myBookedSeats = myBookings[flightId];
  const navigation = useNavigation();
  const [cancelClicks, setCancelClicks] = useState(0);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 20,
        paddingVertical: paddingY,
        paddingHorizontal: paddingX,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={citiesData[tocity].flagImg}
              style={{
                width: 25,
                height: undefined,
                aspectRatio: 3 / 2,
                borderRadius: 1,
              }}
            />
            <Text style={{fontSize: 20, marginLeft: 5, marginTop: -3}}>
              {date}
            </Text>
          </View>
          <Text style={styles.normalText}>{time}</Text>
          <Text
            style={{
              ...styles.normalText,
              marginTop: 10,
              opacity: notifications.length > 0 ? 1 : 0.5,
              color:
                notifications.length > 0
                  ? Color(citiesData[tocity].darkBackground).lighten(2.2).hex()
                  : '#fff',
            }}>
            {notifications.length > 0
              ? notifications[0]
              : 'No special notifications'}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 15, textAlign: 'right', opacity: 0.9}}>
            {airline + ' ' + code}
          </Text>
          <Text style={{...styles.normalText, textAlign: 'right'}}>
            {myBookedSeats + ' seats'}
          </Text>
          <Text style={{...styles.normalText, textAlign: 'right'}}>
            {weightLimit + ' KG'}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (cancelClicks === 0) {
              setCancelClicks(prev => prev + 1);
            } else {
              dispatch(CancelFlight(flightId));
            }
          }}>
          <Text style={{fontSize: 17, color: '#EE4B2B', opacity: 0.85}}>
            {cancelClicks === 0 ? 'Cancel' : 'Press again to cancel'}
          </Text>
        </TouchableOpacity>
        <StyledButton
          title={'Details'}
          titleFontSize={14}
          onPress={() => navigation.navigate('FlightDetails', {flightId})}
          titleColor="#333"
          additionalStyle={{
            backgroundColor: '#34BFA6',
            paddingHorizontal: 30,
            paddingVertical: 6,
            borderRadius: 1,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    ...normalScreenStyle,
    paddingLeft: cardOuterPadding,
    paddingRight: cardOuterPadding,
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
