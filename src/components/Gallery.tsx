import React from 'react';
export const Gallery = () => {
  const images = ['https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3', 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-4.0.3', 'https://images.unsplash.com/photo-1593351415075-3bac9f45c877?ixlib=rb-4.0.3', 'https://images.unsplash.com/photo-1599582350162-83106f579198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];
  return <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Capture the Moments
          </h2>
          <p className="text-xl text-gray-600">
            Experience the beauty of Subic Bay Yacht Club
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
              <img src={image} alt={`Gallery image ${index + 1}`} className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>)}
        </div>
      </div>
    </section>;
};