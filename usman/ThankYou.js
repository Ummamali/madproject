import * as React from 'react';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./Assests/pic3.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.icon1}>
          <Icon name="chevron-left" size={20} color="#000000" />
        </View>
        <Image style={styles.pic2} source={require('./Assests/t4.png')} />
        <Text style={styles.text}>Thank you</Text>
        <Text style={styles.text1}>Your Order is Successful</Text>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.7,
  },
  text: {
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
  },
  pic2: {
    width: 100,
    height: 100,
    left: '40%',
    marginRight: 200,
    borderRadius: 6,
  },
  icon1: {
    marginLeft: 12,
    marginBottom: 130,
  },
});
