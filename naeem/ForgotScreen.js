import React, { useState } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
// import {  sendEmailVerification } from "firebase/auth";
// import {auth} from './firebase/firebase.config'

const ForgotScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  
  // Error
  // const handleForgot = () => {
  //   sendEmailVerification(email)
  //   .then(() => {
  //     navigation.navigate('Verification', { email });
  //   }).catch((error) => {
  //     alert("error");
  //   });;
  // };

  const handleForgot = () => {
    navigation.navigate('Verification', { email });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Enter your Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button mode="contained"  onPress={handleForgot} style={styles.button} >
        Find
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
    backgroundColor: 'white'
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
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ForgotScreen;
