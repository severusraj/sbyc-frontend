import React from 'react';
import { ReciprocalClubs } from '../components/ReciprocalClubs';
import { Footer } from '../components/Footer';
export const ReciprocalClubsPage = () => {
  return <main className="w-full pt-20">
      <div className="relative h-[40vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3")'
      }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Reciprocal Clubs
            </h1>
            <p className="text-xl text-white/90">
              Access to prestigious yacht clubs worldwide
            </p>
          </div>
        </div>
      </div>
      <ReciprocalClubs />
      <Footer />
    </main>;
};