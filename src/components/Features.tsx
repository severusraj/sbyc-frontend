import React from 'react';
import { Anchor, Hotel, Utensils, Users } from 'lucide-react';
const features = [{
  icon: <Anchor className="w-8 h-8" />,
  title: 'World-Class Marina',
  description: 'State-of-the-art berthing facilities and comprehensive marine services'
}, {
  icon: <Hotel className="w-8 h-8" />,
  title: 'Luxury Accommodations',
  description: 'Elegant rooms and suites with stunning ocean views'
}, {
  icon: <Utensils className="w-8 h-8" />,
  title: 'Fine Dining',
  description: 'Exquisite cuisine featuring local and international dishes'
}, {
  icon: <Users className="w-8 h-8" />,
  title: 'Exclusive Events',
  description: 'Year-round social activities and nautical events'
}];
export const Features = () => {
  return <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Experience Excellence
          </h2>
          <p className="text-xl text-gray-600">
            Discover the finest amenities and services at SBYC
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-navy-900 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};