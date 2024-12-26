import { useState, useEffect } from 'react';

interface TradeShow {
  id: string;
  name: string;
  date: string;
  location: string;
}

export function useTradeShows() {
  const [events, setEvents] = useState<TradeShow[]>([
    {
      id: '1',
      name: 'International Home & Gift Show',
      date: 'June 15-18, 2024',
      location: 'New York, NY'
    },
    {
      id: '2',
      name: 'Global Wholesale Expo',
      date: 'July 22-25, 2024',
      location: 'Las Vegas, NV'
    },
    {
      id: '3',
      name: 'Home Decor & Design Show',
      date: 'August 10-13, 2024',
      location: 'Chicago, IL'
    }
  ]);

  return { events };
}