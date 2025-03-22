import React from 'react';
import { Events } from '../components/Events';
import { Footer } from '../components/Footer';
export const EventsPage = () => {
  return <main className="w-full pt-20">
      <div className="relative h-[40vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1698656763807-9917cd292640?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3")'
      }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Meetings & Events
            </h1>
            <p className="text-xl text-white/90">
              Discover our exclusive events and gatherings
            </p>
          </div>
        </div>
      </div>
      <Events />
      <Footer />
    </main>;
};