import React from 'react';
import { Dumbbell, GlassWater, Trophy } from 'lucide-react';
const facilities = [{
  name: 'Swimming Pool',
  icon: <div className="w-8 h-8 mb-4" />,
  image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3',
  description: 'Olympic-sized infinity pool with panoramic bay views'
}, {
  name: 'Fitness Center',
  icon: <Dumbbell className="w-8 h-8 mb-4" />,
  image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3',
  description: 'State-of-the-art equipment and personal training services'
}, {
  name: 'Spa & Wellness',
  icon: <GlassWater className="w-8 h-8 mb-4" />,
  image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3',
  description: 'Luxurious treatments and relaxation areas'
}, {
  name: 'Pickleball Courts',
  icon: <Trophy className="w-8 h-8 mb-4" />,
  image: 'https://images.unsplash.com/photo-1618551763300-dc7eb8ce3560?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'Professional-grade courts with coaching available'
}];
export const Facilities = () => {
  return <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600">
            Experience luxury and comfort in every corner
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => <div key={index} className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={facility.image} alt={facility.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-white">{facility.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-200">{facility.description}</p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-navy-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-navy-800 transition-colors">
            View All Facilities
          </button>
        </div>
      </div>
    </section>;
};