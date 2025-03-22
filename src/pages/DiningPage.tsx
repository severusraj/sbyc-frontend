import React from 'react';
import { Dining } from '../components/Dining';
import { Footer } from '../components/Footer';
export const DiningPage = () => {
  return <main className="w-full pt-20">
      <div className="relative h-[40vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3")'
      }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Fine Dining Experience
            </h1>
            <p className="text-xl text-white/90">
              Savor exquisite cuisine with breathtaking views
            </p>
          </div>
        </div>
      </div>
      <Dining />
      <Footer />
    </main>;
};