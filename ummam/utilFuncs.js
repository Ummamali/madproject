import flightsData from './flightsData';
import Fuse from 'fuse.js';
import popularFlights from './popularFlights';
import AsyncStorage from '@react-native-async-storage/async-storage';
import myBookings from './myBookings';

export function SearchFlightsCities(flightAttributes) {
  let result = Object.entries(flightsData).map(([flightId, flightObj]) => ({
    flightId,
    fromcity: flightObj.fromcity,
    tocity: flightObj.tocity,
  }));

  for (const attr of flightAttributes) {
    if (attr.value !== '') {
      const fuse = new Fuse(result, {keys: [attr.name]});
      result = fuse.search(`'${attr.value}`).map(item => item.item);
    }
  }
  return result.map(i => i.flightId);
}

export function searchFlightsMixed(flightAttributes, mixedQuery) {
  if (mixedQuery === '') {
    return popularFlights;
  }
  let result = Object.entries(flightsData).map(([flightId, flightObj]) => ({
    flightId,
    fromcity: flightObj.fromcity,
    tocity: flightObj.tocity,
  }));
  for (const item of result) {
    let mixedHash = '';
    for (const attr of flightAttributes) {
      mixedHash += item[attr.name];
    }
    item.hash = mixedHash;
  }
  const fuse = new Fuse(result, {keys: flightAttributes.map(o => o.name)});
  result = fuse.search(`'${mixedQuery}`);

  result = result.map(item => item.item);
  return result.map(i => i.flightId);
}

export function debounce(action, timeoutObject, bounceInterval = 250) {
  if (!timeoutObject.timeout) {
    timeoutObject.timeout = setTimeout(action, bounceInterval);
  } else {
    clearTimeout(timeoutObject.timeout);
    timeoutObject.timeout = setTimeout(() => {
      action();
      timeoutObject.timeout = null;
    }, bounceInterval);
  }
}

export async function replaceBookingsStorage(newBookingObject) {
  try {
    AsyncStorage.setItem('myBookings', JSON.stringify(newBookingObject));
  } catch (e) {
    console.log('Error occured...', e);
  }
}
