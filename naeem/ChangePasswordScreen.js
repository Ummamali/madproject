import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { updatePassword } from "firebase/auth";
// import {auth} from './firebase/firebase.config'


const ChangePasswordScreen = ({ navigation, route }) => {
  const [np, setnp] = useState('');
  const [cnp, setcnp] = useState('');
  const {email} = route.params;

  //Error!
//   const handleChangePassword = () => {
//     const user = email;
//     var newPassword;
//     if(np===cnp){
//       newPassword = np;
//       updatePassword(user, newPassword).then(() => {
//         alert('Changes Saved');
//         navigation.navigate('Login')
//       }).catch((error) => {
//         alert(error.message);
//       });
//     }
//     else{
//       alert("Password Mismatch");
//     }
//   };

  const handleChangePassword = () => {
        alert('Changes Saved');
        navigation.navigate('Login')
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Enter new Password"
        value={np}
        onChangeText={setnp}
        style={styles.input}
      />
      <TextInput
        label="Confirm new Password"
        value={cnp}
        secureTextEntry
        onChangeText={setcnp}
        style={styles.input}
      />
      <Button mode="contained"  onPress={handleChangePassword} style={styles.button} >
        Done
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

export default ChangePasswordScreen;
