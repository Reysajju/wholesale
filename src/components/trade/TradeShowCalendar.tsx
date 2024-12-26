import React from 'react';
import { Calendar } from 'lucide-react';
import { useTradeShows } from '../../hooks/useTradeShows';

export function TradeShowCalendar() {
  const { events } = useTradeShows();

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex items-center mb-6">
        <Calendar className="h-6 w-6 text-indigo-600 mr-2" />
        <h3 className="text-xl font-semibold">Upcoming Trade Shows</h3>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="border-l-4 border-indigo-500 pl-4">
            <p className="font-semibold">{event.name}</p>
            <p className="text-sm text-gray-600">{event.date}</p>
            <p className="text-sm text-gray-600">{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}