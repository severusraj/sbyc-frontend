import React, { useState } from 'react';
import { BookingModal } from './BookingModal';
import { useToast } from '../hooks/useToast';
const rooms = [{
  type: 'Deluxe Ocean View',
  image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3',
  price: '₱12,000',
  description: 'Luxurious room with panoramic ocean views and premium amenities'
}, {
  type: 'Marina Suite',
  image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3',
  price: '₱18,000',
  description: 'Spacious suite overlooking the marina with separate living area'
}, {
  type: 'Presidential Suite',
  image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3',
  price: '₱25,000',
  description: 'Ultimate luxury with expansive views and exclusive services'
}];
export const Hotel = () => {
  const [selectedRoom, setSelectedRoom] = useState<(typeof rooms)[0] | null>(null);
  const {
    toast,
    showToast,
    hideToast
  } = useToast();
  return <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Luxury Accommodations
          </h2>
          <p className="text-xl text-gray-600">
            Experience comfort and elegance with stunning views
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <img src={room.image} alt={room.type} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-navy-900">
                    {room.type}
                  </h3>
                  <span className="text-navy-900 font-medium">
                    {room.price}/night
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <button onClick={() => setSelectedRoom(room)} className="w-full bg-navy-900 text-white py-2 rounded-md hover:bg-navy-800 transition-colors">
                  Book Now
                </button>
              </div>
            </div>)}
        </div>
      </div>
      {selectedRoom && <BookingModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />}
      {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
    </section>;
};