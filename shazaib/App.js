import 'react-native-gesture-handler';
import SearchScreen from './SearchScreen';
import Result from './Result';
import Faisal from './Faisal';
import Ticket from './Ticket';
import * as React from 'react';
import Confirm from './Confirm';
import Navbar from './Navbar/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



<Navbar/>
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          name="Result"
          component={Result}
        />
        <Stack.Screen
          name="Faisal Mosque"
          component={Faisal}
        />
        <Stack.Screen
          name="Purchase Ticket"
          component={Ticket}
        />
        <Stack.Screen
          name="Ticket Confirmation"
          component={Confirm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App