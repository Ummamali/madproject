import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SearchScreen = ({navigation}) => {
  const [input, setinput] = useState('');
  const handleButton = () => {
    if (input.toLowerCase() === 'islamabad') {
      navigation.navigate('Result');
    } else {
      Alert.alert(
        'Incorrect Input',
        "Try Again.Please Enter 'islamabad to continue'",
      );
    }
  };
  return (
    <View style={{flex: 1}}>
      <Text style={styles.text}>Trip Attractions</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a City Name"
        placeholderTextColor={'#777'}
        value={input}
        onChangeText={setinput}
      />
      <View style={styles.container}>
        <TouchableOpacity
          title="Search"
          onPress={handleButton}
          style={styles.button}>
          <LinearGradient
            colors={['#F4D03F', '#16A085']}
            style={styles.gradient}>
            <Text style={styles.inputText}>Search</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const screenwidth = Dimensions.get('window').width;
const styles = {
  text: {
    fontFamily: 'Roboto',
    fontSize: 50,
    fontWeight: 'bold',
    padding: 20,
    color: 'black',
  },
  input: {
    height: 50,
    borderColor: '#79A2FF',
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    color: '#555',
  },
  button: {
    width: screenwidth * 0.8,
  },
  inputText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 20,
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
};

export default SearchScreen;
