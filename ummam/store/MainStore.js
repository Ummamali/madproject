import {configureStore} from '@reduxjs/toolkit';
import MyBookingsSliceReducer from './MyBookingsSlice';

export const store = configureStore({
  reducer: {
    myBookings: MyBookingsSliceReducer,
  },
});
