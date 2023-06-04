import React, { createContext, useState } from 'react';

export const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [itineraries, setItineraries] = useState([
    {
      id: '1',
      place: 'Place 1',
      image: 'https://via.placeholder.com/150',
      activities: ['Activity 1', 'Activity 2'],
      date: '01/01/2023',
    },
    // ... more itineraries
  ]);

  return (
    <ItineraryContext.Provider value={{ itineraries, setItineraries }}>
      {children}
    </ItineraryContext.Provider>
  );
};
