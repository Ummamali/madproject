import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import ForgotScreen from './ForgotScreen';
import VerificationScreen from './VerificationScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import ProfileScreen from './ProfileScreen'
import LoadingScreen from './LoadingScreen';
import {auth} from './firebase/firebase.config'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/> */}
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Forgot" component={ForgotScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Verification" component={VerificationScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;