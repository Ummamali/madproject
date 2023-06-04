import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ItineraryDashboard = ({ navigation, itineraries, setItineraries }) => {
  const deleteItinerary = (index) => {
    const newItineraries = [...itineraries];
    newItineraries.splice(index, 1);
    setItineraries(newItineraries);
  }

  const editItinerary = (index) => {
    // Implement your edit logic here.
    console.log("Edit itinerary: ", index);
  }

  const viewItinerary = (itinerary) => {
    navigation.navigate('ViewItinerary', { itinerary });
  }

  const addNewItinerary = () => {
    navigation.navigate('AddDestination');
  }

     return (
    <View style={styles.container}>
      <Text style={styles.title}>Itinerary Dashboard</Text>
      
      <FlatList
  data={itineraries}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image 
          source={require('../images/dashboard.jpg')}
          style={styles.image}
        />
        <Text style={styles.itineraryName}>{item.destination}</Text>
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity onPress={() => viewItinerary(item)}>
          <Icon name="eye" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => editItinerary(index)}>
          <Icon name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteItinerary(index)}>
          <Icon name="trash-alt" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )}
/>

      <Button title="+ Add New Itinerary" onPress={addNewItinerary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  itineraryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
  },
  
  itineraryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default ItineraryDashboard;
