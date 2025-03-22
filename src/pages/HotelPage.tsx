import React from 'react';
import { Hotel } from '../components/Hotel';
import { Footer } from '../components/Footer';
export const HotelPage = () => {
  return <main className="w-full">
      <div className="relative h-[40vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3")'
      }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Luxury Accommodations
            </h1>
            <p className="text-xl text-white/90">
              Experience unparalleled comfort with stunning ocean views
            </p>
          </div>
        </div>
      </div>
      <Hotel />
      <Footer />
    </main>;
};