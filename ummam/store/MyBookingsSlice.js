import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  myBookings: {},
};

export const bookingsSlice = createSlice({
  name: 'myBookings',
  initialState,
  reducers: {
    flightBooked: (state, action) => {
      state.myBookings[action.payload.flightId] = action.payload.seats;
    },
    flightCanceled: (state, action) => {
      delete state.myBookings[action.payload.flightId];
    },
    firstLoad: (state, action) => {
      state.myBookings = action.payload;
    },
  },
});

export function FirstLoad() {
  return async dispatch => {
    // AsyncStorage.clear();
    const myStorageBookingsString = await AsyncStorage.getItem('myBookings');
    if (myStorageBookingsString !== null) {
      dispatch(
        bookingsSlice.actions.firstLoad(JSON.parse(myStorageBookingsString)),
      );
    }
  };
}

export function BookFlight(flightObj) {
  // flightObject =====> {flightId: String, seats: number}
  return async dispatch => {
    try {
      const myStorageBookingsString = await AsyncStorage.getItem('myBookings');
      const myStorageBookings =
        myStorageBookingsString !== null
          ? JSON.parse(myStorageBookingsString)
          : {};

      myStorageBookings[flightObj.flightId] = flightObj.seats;

      await AsyncStorage.setItem(
        'myBookings',
        JSON.stringify(myStorageBookings),
      );
      dispatch(bookingsSlice.actions.flightBooked(flightObj));
      return true;
    } catch (error) {
      console.log('some error occured', error);
      return false;
    }
  };
}

export function CancelFlight(flightId) {
  return async dispatch => {
    try {
      const myStorageBookingsString = await AsyncStorage.getItem('myBookings');
      const myStorageBookings =
        myStorageBookingsString !== null
          ? JSON.parse(myStorageBookingsString)
          : {};

      delete myStorageBookings[flightId];

      await AsyncStorage.setItem(
        'myBookings',
        JSON.stringify(myStorageBookings),
      );
      dispatch(bookingsSlice.actions.flightCanceled({flightId}));
      return true;
    } catch (error) {
      console.log('some error occured', error);
      return false;
    }
  };
}

export default bookingsSlice.reducer;
