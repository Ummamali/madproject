import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import firebase from './firebase';
import {getDatabase, ref, push, set} from 'firebase/database';
import LinearGradient from 'react-native-linear-gradient';

const Ticket = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const handlePress = () => {
    if (!/^[a-zA-Z]+$/.test(name)) {
      Alert.alert(
        'Invalid Name',
        'Please enter a valid name with only letters.',
      );
      return;
    }

    if (!/^\d+$/.test(age) || Number(age) < 18) {
      Alert.alert(
        'Invalid Age',
        'Please enter a valid age (must be a number greater than or equal to 18).',
      );
      return;
    }

    if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!/^\d{11}$/.test(phone)) {
      Alert.alert(
        'Invalid Phone Number',
        'Please enter a 11-digit phone number.',
      );
      return;
    }

    const dbRef = getDatabase(firebase);
    const newRecordRef = push(ref(dbRef));
    // Push the user details to the database

    const data = {
      name,
      age,
      email,
      phone,
    };

    set(newRecordRef, data)
      .then(() => {
        setName('');
        setAge('');
        setEmail('');
        setPhone('');
        navigation.navigate('Ticket Confirmation', {
          recordId: newRecordRef.key,
        });
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <View>
      <Text style={styles.title}>Purchase Ticket</Text>
      <Text style={styles.text}>Name:</Text>
      <TextInput
        placeholder="Enter your Name"
        placeholderTextColor={'#777'}
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Text style={styles.text}>Age:</Text>
      <TextInput
        placeholder="Enter your Age"
        placeholderTextColor={'#777'}
        value={age}
        onChangeText={setAge}
        style={styles.input}
      />
      <Text style={styles.text}>Email:</Text>
      <TextInput
        placeholder="Enter your Email"
        placeholderTextColor={'#777'}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Text style={styles.text}>Phone No:</Text>
      <TextInput
        placeholder="Enter your Phone No"
        placeholderTextColor={'#777'}
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <LinearGradient colors={['#F4D03F', '#16A085']} style={styles.gradient}>
          <Text style={styles.Text}>Submit</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  title: {
    fontFamily: 'Roboto',
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#79A2FF',
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    color: '#444',
  },
  text: {
    fontFamily: 'Roboto',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 25,
  },
  button: {
    width: '90%',
    alignSelf: 'center',
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
};
export default Ticket;
