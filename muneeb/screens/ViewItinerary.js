import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);


const ViewItinerary = ({ route }) => {
  const { itinerary } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.itineraryName}>{itinerary.destination}</Text>
        </View>
        <View style={styles.cardImageContainer}>
          <Image
            source={require('../images/dashboard.jpg')}
            style={styles.cardImage}
          />
        </View>
      </View>
      <View style={styles.ribbon}>
        <Text style={styles.text}>Destination: {itinerary.destination}</Text>
        <Text style={styles.text}>Date: {itinerary.date.toLocaleDateString()}</Text>

      </View>
      {itinerary.activities.map((activity, index) => (
        <View key={index} style={styles.activityContainer}>
          <Text style={styles.index}>{index + 1}</Text>
          <View style={styles.activity}>
            <Text style={styles.text}>Activity Name: {activity.name}</Text>
            <Text style={styles.text}>Date: {itinerary.date.toLocaleDateString()}</Text>

            <Text style={styles.text}>
              Activity Description: {activity.description}
            </Text>
            <Image
              source={{ uri: 'https://your-placeholder-image-url' }}
              style={styles.activityImage}
            />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
  cardContent: {
    flex: 1,
  },
  itineraryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardImageContainer: {
    marginLeft: 10,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  ribbon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  index: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#333',
  },
  activity: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activityImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignSelf: 'flex-end',
  },
});

export default ViewItinerary;
