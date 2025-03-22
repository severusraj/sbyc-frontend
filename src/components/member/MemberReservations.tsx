import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { ReservationModal } from './ReservationModal';
export const MemberReservations = () => {
  const [selectedReservation, setSelectedReservation] = useState<any>(null);
  const reservations = [{
    type: 'Marina',
    date: '2024-03-20',
    time: '08:00 AM',
    location: 'Berth B-15',
    details: 'Premium Berth Space',
    status: 'Confirmed',
    confirmationNumber: 'M20240320-B15'
  }, {
    type: 'Hotel',
    date: '2024-04-15',
    time: '02:00 PM',
    location: 'Deluxe Ocean View Room',
    details: 'King Bed, Ocean View',
    status: 'Pending',
    confirmationNumber: 'H20240415-D12'
  }, {
    type: 'Dining',
    date: '2024-03-25',
    time: '07:00 PM',
    location: 'The Lighthouse Restaurant',
    details: 'Dinner Reservation - 4 guests',
    status: 'Confirmed',
    confirmationNumber: 'D20240325-L07'
  }];
  return <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            My Reservations
          </h2>
          <div className="space-y-4">
            {reservations.map((reservation, index) => <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">
                      {reservation.type}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={18} className="mr-2" />
                        <span>{reservation.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={18} className="mr-2" />
                        <span>{reservation.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={18} className="mr-2" />
                        <span>{reservation.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${reservation.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {reservation.status}
                    </span>
                    <button onClick={() => setSelectedReservation(reservation)} className="block mt-4 text-navy-900 hover:text-navy-800">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {selectedReservation && <ReservationModal reservation={selectedReservation} onClose={() => setSelectedReservation(null)} />}
    </div>;
};