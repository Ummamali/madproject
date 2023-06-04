import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { updatePassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase/firebase.config';
// import * as ImagePicker from 'expo-image-picker';



const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [ccode, setCcode] = useState('+92');
  const [number, setNumber] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleImagePress = () => {
    // Implement logic to open the image picker and set the selected image
    // For brevity, this example assumes that the selected image URI is available in `selectedImageURI` variable

    // Example implementation using a static image path
    const selectedImageURI = require('./dp.jpg');

    setProfileImage(selectedImageURI);
  };

  // DONOT KNOW ABOUT WORKIN PICKER WAS GIVING ERROR!
  // const handleImagePress = async () => {
  //   const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
  //   if (permissionResult.granted === false) {
  //     alert('Permission to access the camera roll is required!');
  //     return;
  //   }

  //   const imageResult = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [1, 1],
  //     quality: 1,
  //   });

  //   if (!imageResult.cancelled) {
  //     setProfileImage({ uri: imageResult.uri });
  //   }
  // };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAge(user.userAge);
        setEmail(user.email);
        setUsername(user.displayName);
        setNumber(user.phoneNumber)
      } else {
        alert("some error occured!")
      }
    });
    return () => unsubscribe();
  }, []);
  
  
  const handleSave = () => {
    const contact = ccode+' '+number;

    updateProfile(auth.currentUser, {
      displayName: username,
      userAge: age,
      phoneNumber: contact,
      email: email,
    }).then(() => {
      alert("updated successfully!");
    }).catch((error) => {
      alert("error occured!");
    });

    const user = auth.currentUser;
    const newPassword = password;
    updatePassword(user, newPassword).then(() => {
      alert('Changes Saved');
    }).catch((error) => {
      alert(error.message);
    });

  };

  return (
    <View style={styles.container}>
      <>
      {profileImage ? (
          <View style={styles.container2}>
            <Image source={profileImage} style={styles.profileImage} />
            <TouchableOpacity style={styles.editButton} onPress={handleImagePress} >
              <Text>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          
        ) : (
          <View style={styles.container2}>
            <Image source={require('./pro.jpg')} style={styles.profileImage} />
            <TouchableOpacity style={styles.editButton} onPress={handleImagePress} >
              <Text>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          
        )}
      </>
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
            <View style={{flexDirection:"row"}}>
        <TextInput
          value={ccode}
          onChangeText={setCcode}
          style={{marginBottom: 8,
                  width: '20%',
                  backgroundColor: '#F8F8F8',}}
        />
        <TextInput
          label="Contact Number"
          value={number}
          onChangeText={setNumber}
          style={{marginBottom: 8,
                marginLeft: 10,
                width: '77%',
                backgroundColor: '#F8F8F8',}}
        />
      </View>
      
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop:-50
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 16,
    marginBottom: -50
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
  editButton: {
    position: 'absolute',
    bottom: 80, // Adjust this value to position the button as desired
    backgroundColor: 'white', // Customize the button background color
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default RegistrationScreen;
