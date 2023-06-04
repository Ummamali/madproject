import flightsData from './flightsData';
import Fuse from 'fuse.js';

export function searchFlights(flightAttributes, mixKeys = false) {
  const list = Object.entries(flightsData).map(([flightId, flightObj]) => ({
    flightId,
    fromcity: flightObj.fromcity,
    tocity: flightObj.tocity,
  }));
  let result = list;
  if (!mixKeys) {
    for (const attr of flightAttributes) {
      if (attr.value !== '') {
        const fuse = new Fuse(result, {keys: [attr.name]});
        result = fuse.search(`'${attr.value}`);
        result = result.map(item => item.item);
        result.forEach(item => console.log(item));
      }
    }
  }
  return result.map(i => i.flightId);
}
