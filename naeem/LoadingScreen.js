import React from 'react';
import {View, StyleSheet, Image, Text, ImageBackground} from 'react-native';
import {Button} from 'react-native-paper';

const LoadingScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./background.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Project Title</Text>
        <Text style={styles.title2}>Travel Planner</Text>
        <Text style={styles.title}>Group Members</Text>
        <Text style={styles.plain}>FA20-BCS-063 , Muhammad Naeem</Text>
        <Text style={styles.plain}>FA20-BCS-067, Umam Ali</Text>
        <Text style={styles.plain}>FA20-BCS-068, Muhammad Usman</Text>
        <Text style={styles.plain}>FA20-BCS-072, Muneeb ur Rehman</Text>
        <Text style={styles.plain}>FA20-BCS-089, Shahzaib bilal Khan</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Registration')}
          style={styles.button}>
          Enter
        </Button>
        <Image
          source={require('./logo2.png')}
          style={{height: 300, width: 300, alignSelf: 'center'}}
        />
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
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#444',
  },
  title2: {
    fontSize: 40,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  plain: {
    fontSize: 12,
    color: '#777',
  },
  button: {
    marginTop: 16,
    width: '35%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
