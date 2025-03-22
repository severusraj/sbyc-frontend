import React from 'react';
const clubs = [{
  name: 'Royal Hong Kong Yacht Club',
  location: 'Hong Kong',
  image: 'https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3',
  description: "One of Asia's premier sailing clubs with over 150 years of history"
}, {
  name: 'Singapore Yacht Club',
  location: 'Singapore',
  image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3',
  description: 'A prestigious club offering world-class marina facilities'
}, {
  name: 'Royal Sydney Yacht Squadron',
  location: 'Australia',
  image: 'https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3',
  description: "Australia's oldest yacht club with exceptional facilities"
}];
export const ReciprocalClubs = () => {
  return <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Reciprocal Clubs
          </h2>
          <p className="text-xl text-gray-600">
            Enjoy privileged access to prestigious yacht clubs worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {clubs.map((club, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img src={club.image} alt={club.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{club.name}</h3>
                  <p className="text-sm text-white/90">{club.location}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{club.description}</p>
                <button className="mt-4 text-navy-900 font-semibold hover:text-navy-800 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            SBYC members enjoy reciprocal privileges at over 50 prestigious
            yacht clubs worldwide
          </p>
          <button className="bg-navy-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-navy-800 transition-colors">
            View All Partner Clubs
          </button>
        </div>
      </div>
    </section>;
};