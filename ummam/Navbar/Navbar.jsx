import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const tabsData = [
  {
    name: 'Rooms',
    image: require('./icons/rooms.png'),
    routeName: 'HotelsList',
  },
  {
    name: 'Flights',
    image: require('./icons/flight.png'),
    routeName: 'FlightSearch',
  },
  {
    name: 'Explore',
    image: require('./icons/exploreIcon.png'),
    routeName: 'SearchScreen',
  },
  {
    name: 'Itinerary',
    image: require('./icons/checklist.png'),
    routeName: 'ItineraryDashboard',
  },
  {
    name: 'Profile',
    image: require('./icons/user.png'),
    routeName: 'Route name not set',
  },
  {
    name: 'Settings',
    image: require('./icons/settings.png'),
    routeName: 'Route name not set',
  },
];

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainBar}>
      {tabsData.map(t => (
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate(t.routeName)}
          key={t.name}>
          <Image
            source={t.image}
            style={{width: 24, height: 24, opacity: 0.7}}
          />
          <Text style={styles.smallText}>{t.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 28,
    paddingRight: 28,
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tab: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 11,
    fontFamily: 'Roboto-Regular',
    color: '#777',
    marginTop: 4,
    textAlign: 'center',
  },
});
