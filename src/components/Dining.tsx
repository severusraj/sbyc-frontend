import React from 'react';
const restaurants = [{
  name: 'The Lighthouse',
  type: 'Fine Dining',
  image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3',
  description: 'Experience exquisite international cuisine with panoramic bay views'
}, {
  name: 'Marina Café',
  type: 'Casual Dining',
  image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3',
  description: 'Perfect for casual meetups and light meals by the water'
}, {
  name: 'Sunset Lounge',
  type: 'Bar & Lounge',
  image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3',
  description: 'Enjoy craft cocktails and tapas with stunning sunset views'
}];
export const Dining = () => {
  return <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Culinary Excellence
          </h2>
          <p className="text-xl text-gray-600">
            Discover our world-class dining venues
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => <div key={index} className="group cursor-pointer">
              <div className="relative h-72 mb-6 overflow-hidden rounded-lg">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-1">
                {restaurant.name}
              </h3>
              <p className="text-navy-900/60 mb-3">{restaurant.type}</p>
              <p className="text-gray-600">{restaurant.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};