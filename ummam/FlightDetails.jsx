import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  topPadding,
  titleTextStyle,
  subtitleTextStyle,
  textInputStyle,
  heroScreenStyle,
} from './globalConfig';
import StyledButton from './StyledButton';
import citiesData from './citiesData';

import Color from 'color';
import flightsData from './flightsData';
import {useNavigation} from '@react-navigation/native';
import TripsButton from './TripsButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BookFlight} from './store/MyBookingsSlice';
import {useDispatch, useSelector} from 'react-redux';

const screenPadding = 20;

export default function FlightDetails({route}) {
  const flightObj = flightsData[route.params.flightId];
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const myBookings = useSelector(state => state.myBookings.myBookings);
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: screenPadding,
          opacity: 0.7,
        }}>
        <Image
          source={require('./images/backIcon.png')}
          style={{width: 20, height: 20}}></Image>
        <Text style={{fontSize: 13, color: '#000', marginLeft: -6}}>Back</Text>
      </TouchableOpacity>
      <View style={{marginBottom: 0}}>
        <Text style={styles.titleText}>Flight Details</Text>

        <Text style={styles.subtitleText}>
          Your next adventure is waiting for you
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginTop: 28,
          marginBottom: 14,
          paddingLeft: screenPadding,
          paddingRight: screenPadding,
        }}>
        <View>
          <Text style={styles.normalText}>
            {'Seats Available: ' + flightObj.seatsAvailable}
          </Text>
          <StyledButton
            disabled={route.params.flightId in myBookings}
            title={
              route.params.flightId in myBookings ? 'Booked' : 'Book Flight'
            }
            onPress={() => {
              dispatch(BookFlight({flightId: route.params.flightId, seats: 1}));
            }}
            additionalStyle={{
              borderRadius: 1,
              paddingLeft: 44,
              paddingRight: 44,
              paddingTop: 8,
              paddingBottom: 8,
              backgroundColor:
                route.params.flightId in myBookings ? '#000' : '#05948F',
            }}
          />
        </View>
        <View>
          <Text
            style={{
              ...styles.normalText,
              textAlign: 'right',
              fontStyle: 'italic',
              marginBottom: -5,
            }}>
            {flightObj.discount * 100 + '% OFF'}
          </Text>
          <Text style={{fontSize: 27, color: '#05948F'}}>
            {'$' + (flightObj.price * (1 - flightObj.discount)).toFixed(2)}
          </Text>
        </View>
      </View>
      <Card
        cityCode={flightObj.fromcity}
        date={flightObj.date}
        time={flightObj.time}
        buttonTitle="Book Room"
      />
      <View style={{marginBottom: 14}}></View>
      <Card
        cityCode={flightObj.tocity}
        date={flightObj.arrivalDate}
        time={flightObj.arrivalTime}
        cardTitle="Your Arrival At"
        buttonTitle="Book Room"
      />
      <Text
        style={{
          fontSize: 20,
          color: '#555',
          textAlign: 'center',
          marginTop: 10,
        }}>
        Explore World Destinations
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <ExploreCard city={flightObj.fromcity} />
        <View style={{marginLeft: 30}} />
        <ExploreCard city={flightObj.tocity} />
      </View>
    </View>
  );
}

function Card({
  cityCode,
  date,
  time,
  cardTitle = 'Your Departure From',
  buttonTitle,
  onButtonClick,
}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: citiesData[cityCode].darkBackground,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: screenPadding,
        paddingRight: screenPadding,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{fontSize: 22, opacity: 0.9}}>{cardTitle}</Text>
          <Text style={styles.cardText}>
            {citiesData[cityCode].name + ', ' + citiesData[cityCode].country}
          </Text>
          <Text style={styles.cardText}>
            {citiesData[cityCode].airport + ', ' + citiesData[cityCode].name}
          </Text>
        </View>
        <Image
          source={citiesData[cityCode].flagImg}
          style={{
            width: 60,
            height: undefined,
            aspectRatio: 3 / 2,
            borderRadius: 1,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginTop: 26,
        }}>
        <StyledButton
          title={buttonTitle}
          titleFontSize={13}
          onPress={() => navigation.navigate('HotelsList')}
          additionalStyle={{
            borderRadius: 1,
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 7,
            paddingBottom: 7,
            backgroundColor: Color(citiesData[cityCode].darkBackground)
              .lighten(0.7)
              .hex(),
          }}
        />
        <View>
          <Text style={{...styles.cardText, textAlign: 'right'}}>{date}</Text>
          <Text style={{...styles.cardText, textAlign: 'right'}}>{time}</Text>
        </View>
      </View>
    </View>
  );
}

const cardLength = 120;

function ExploreCard({city = 'london'}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Result')}
      style={{
        position: 'relative',
        borderRadius: 3,
        width: cardLength,
        height: cardLength,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={citiesData[city].image}
        style={{
          width: cardLength,
          height: cardLength,
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: 3,
        }}
      />
      <View
        style={{
          width: cardLength,
          height: cardLength,
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: '#000',
          opacity: 0.5,
          zIndex: 10,
          borderRadius: 3,
        }}
      />
      <Text
        style={{
          zIndex: 20,
          fontSize: 11,
        }}>
        {'Explore ' + citiesData[city].name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    ...heroScreenStyle,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 22,
  },
  titleText: {
    ...titleTextStyle,
    marginLeft: screenPadding,
  },
  subtitleText: {
    ...subtitleTextStyle,
    marginLeft: screenPadding,
    fontSize: 15,
    opacity: 0.8,
  },
  ftr: {
    fontFamily: 'Roboto-Regular',
    color: '#999',
    textAlign: 'center',
    fontSize: 12.5,
  },
  normalText: {
    fontFamily: 'Roboto-Regular',
    color: '#999',
    fontSize: 13.5,
    marginTop: -3,
  },
  cardText: {
    color: '#fff',
    opacity: 0.5,
    fontSize: 12,
  },
});
