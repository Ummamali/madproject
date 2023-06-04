import React, { useState } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const VerificationScreen = ({ navigation, route }) => {
  const [pin, setpin] = useState('');
  const {email} = route.params;
  
  const handleVerification = (email) => {
    
    alert('Login successful');
    navigation.navigate('ChangePassword', { email })
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Enter the pin"
        value={pin}
        onChangeText={setpin}
        style={styles.input}
      />
      <Button mode="contained"  onPress={()=>{handleVerification(email)}} style={styles.button} >
        verify
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

export default VerificationScreen;
