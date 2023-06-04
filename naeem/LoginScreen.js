import React, { useState } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase/firebase.config'


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Login successful');
      navigation.replace("Profile")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  return (
    <ImageBackground source={require('./background.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require("./logo.png")} style={{height: 250, width: 250}}/>
        <TextInput
          label="Enter your Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          label="Enter your Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          style={styles.input}
        />
        <Button mode="contained"  onPress={handleLogin} style={styles.button} >
          Login
        </Button>
        <Button mode="contained"  onPress={() => navigation.navigate('Registration')} style={styles.button}>
          Register
        </Button>
        <Button
          mode="text"
          onPress={() => navigation.navigate('Forgot')}
        >
          Forgot Password
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' based on your preference
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
    marginTop: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
