import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';

const AddDestination = ({navigation, setItineraries}) => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const addDestination = () => {
    navigation.navigate('AddActivity', {destination, date, setItineraries});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Destination</Text>
      <Image
        source={require('../images/destination.jpg')}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Destination Name</Text>
        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            placeholder="Destination Name"
            placeholderTextColor="black"
            value={destination}
            onChangeText={setDestination}
          />
          <Icon name="map-marker-alt" size={23} color="black" />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Date</Text>
        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            placeholder="Date (dd-mm-yyyy)"
            placeholderTextColor="black"
            value={date.toLocaleDateString()}
            editable={false} // to prevent manual edits
          />
          <Icon
            name="calendar-alt"
            size={24}
            color="black"
            onPress={showDatepicker}
          />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addDestination}>
          <LinearGradient colors={['cyan', 'green']} style={styles.gradient}>
            <Text style={styles.buttonText}>Add Destination</Text>
          </LinearGradient>
        </TouchableOpacity>
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
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
  },
  button: {
    paddingTop: 10,
    borderRadius: 10,
    height: 50, // Adjust the height of the button
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddDestination;
