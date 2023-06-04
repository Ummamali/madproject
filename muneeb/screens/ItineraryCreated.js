import React from 'react';
import { View, Text, Button, Share, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ItineraryCreated = ({ route, navigation }) => {
  const { newItinerary } = route.params;

  const returnToDashboard = () => {
    navigation.navigate('ItineraryDashboard');
  };

  const shareItinerary = async () => {
    try {
      const result = await Share.share({
        message: JSON.stringify(newItinerary, null, 2),
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itinerary Created Successfully!</Text>
      <Button title="Return to Dashboard" onPress={returnToDashboard} />
      <Text style={styles.shareText}>Share in your social networks</Text>
      <Button title="Share Itinerary" onPress={shareItinerary} />
      <View style={styles.iconContainer}>
        <Icon name="facebook" size={30} color="#3b5998" />
        <Icon name="instagram" size={30} color="#C13584" />
        <Icon name="twitter" size={30} color="#1DA1F2" />
        <Icon name="whatsapp" size={30} color="#25D366" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  shareText: {
    fontSize: 20,
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
});

export default ItineraryCreated;
