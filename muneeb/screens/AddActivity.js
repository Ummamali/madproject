import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddActivity = ({ navigation, route }) => {
  const { destination, date, setItineraries } = route.params;
  const [activities, setActivities] = useState([]);
  const [activityName, setActivityName] = useState('');
  const [activityDate, setActivityDate] = useState(new Date());
  const [activityDescription, setActivityDescription] = useState('');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || activityDate;
    setShow(Platform.OS === 'ios');
    setActivityDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const addActivity = () => {
    setActivities([...activities, {
      name: activityName,
      date: activityDate.toLocaleDateString(),
      description: activityDescription,
    }]);
    setActivityName('');
    setActivityDate(new Date());
    setActivityDescription('');
  }

  const saveActivity = () => {
    const newItinerary = {
      destination,
      date,
      activities
    };
    setItineraries(prevItineraries => [...prevItineraries, newItinerary]);
    navigation.navigate('ItineraryCreated', { newItinerary });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Activity</Text>
      <Image 
        source={require('../images/activity.jpg')}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Activity Name</Text>
        <View style={styles.inputField}>
          <TextInput 
            style={styles.input}
            placeholder="Activity Name"
            placeholderTextColor='black'
            value={activityName}
            onChangeText={setActivityName}
          />
          <Icon name="running" size={24} color="black" />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Activity Date</Text>
        <View style={styles.inputField}>
          <TextInput 
            style={styles.input}
            placeholder="Activity Date"
            placeholderTextColor='black'
            value={activityDate.toLocaleDateString()}
            editable={false} // to prevent manual edits
          />
          <Icon name="calendar-alt" size={24} color="black" onPress={showDatepicker} />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={activityDate}
              mode='date'
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Activity Description</Text>
        <View style={styles.inputField}>
          <TextInput 
            style={styles.input}
            placeholder="Activity Description"
            placeholderTextColor='black'
            value={activityDescription}
            onChangeText={setActivityDescription}
          />
          <Icon name="info-circle" size={24} color="black" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add Activity" onPress={addActivity} />
        <Button title="Save Activities" onPress={saveActivity} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    padding: 10,
    color: 'black',
  }
});

export default AddActivity;
