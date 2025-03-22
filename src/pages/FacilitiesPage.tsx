import React from 'react';
import { Facilities } from '../components/Facilities';
import { Footer } from '../components/Footer';
export const FacilitiesPage = () => {
  return <main className="w-full pt-20">
      <div className="relative h-[40vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3")'
      }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Facilities
            </h1>
            <p className="text-xl text-white/90">
              World-class amenities for your comfort and enjoyment
            </p>
          </div>
        </div>
      </div>
      <Facilities />
      <Footer />
    </main>;
};