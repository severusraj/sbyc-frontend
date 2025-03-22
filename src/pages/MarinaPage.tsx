import React from 'react';
import { Marina } from '../components/Marina';
import { Footer } from '../components/Footer';
export const MarinaPage = () => {
  return <main className="w-full pt-20">
      <div className="relative h-[40vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1587365001066-8263b7061a38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3")'
      }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Marina Services
            </h1>
            <p className="text-xl text-white/90">
              State-of-the-art facilities for your vessel
            </p>
          </div>
        </div>
      </div>
      <Marina />
      <Footer />
    </main>;
};