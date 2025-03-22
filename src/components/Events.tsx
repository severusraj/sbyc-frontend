import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
const events = [{
  title: 'Annual Regatta',
  date: 'September 15-17, 2024',
  location: 'Subic Bay Main Harbor',
  image: 'https://images.unsplash.com/photo-1698656763807-9917cd292640?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'Join us for our prestigious annual sailing competition featuring yachts from across Asia.'
}, {
  title: 'Summer Yacht Party',
  date: 'July 20, 2024',
  location: 'SBYC Marina',
  image: 'https://images.unsplash.com/photo-1552600337-6f42e4fb2e78?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'An exclusive evening of fine dining, music, and networking under the stars.'
}, {
  title: 'Sailing Workshop',
  date: 'Monthly',
  location: 'SBYC Training Center',
  image: 'https://images.unsplash.com/photo-1506527240747-720a3e17b910?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'Learn sailing basics or advance your skills with our expert instructors.'
}];
export const Events = () => {
  return <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Join us for exclusive events and experiences
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="text-navy-900 font-semibold hover:text-navy-800 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};