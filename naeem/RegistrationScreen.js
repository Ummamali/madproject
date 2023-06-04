import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Checkbox, TextInput, Button, Text} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebase/firebase.config';

const RegistrationScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [cpassword, setCpassword] = useState('');
  const [ccode, setCcode] = useState('+92');
  const [number, setNumber] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleCheckboxToggle = () => {
    setChecked(!checked);
  };

  const handleRegistration = () => {
    if (!toggleCheckBox) {
      alert('please select the check box');
    } else {
      if (password !== cpassword || cpassword === '') {
        alert('Password Mismatched');
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            const user = userCredential.user;
            const contact = ccode + ' ' + number;
            // Update the user profile with additional data
            const userProfile = {
              displayName: username,
              userAge: age,
              phoneNumber: contact,
            };

            // Update the user profile with additional data
            updateProfile(user, userProfile)
              .then(() => {
                alert('Changes Saved');
                navigation.replace('Login');
              })
              .catch(error => {
                alert('Failed to update user profile');
              });
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 26, color: '#444', marginBottom: 10}}>
        Registration
      </Text>
      <TextInput
        label="Enter your Name"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Enter your age"
        value={age}
        onChangeText={setAge}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
        label="Confirm Password"
        value={cpassword}
        secureTextEntry
        onChangeText={setCpassword}
        style={styles.input}
      />
      <View style={{flexDirection: 'row'}}>
        <TextInput
          value={ccode}
          onChangeText={setCcode}
          style={{marginBottom: 8, width: '20%', backgroundColor: '#F8F8F8'}}
        />
        <TextInput
          label="Contact Number"
          value={number}
          onChangeText={setNumber}
          style={{
            marginBottom: 8,
            marginLeft: 10,
            width: '77%',
            backgroundColor: '#F8F8F8',
          }}
        />
      </View>
      <View
        style={{flexDirection: 'row', alignSelf: 'flex-start', marginTop: 16}}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={{alignSelf: 'center'}}>
          I Agree, to the terms & policies
        </Text>
      </View>

      <Button
        mode="contained"
        onPress={handleRegistration}
        style={styles.button}>
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
    width: '100%',
    backgroundColor: '#F8F8F8',
  },
  button: {
    marginTop: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegistrationScreen;
