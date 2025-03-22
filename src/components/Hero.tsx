import React from 'react';
import { useNavigate } from 'react-router-dom';
export const Hero = () => {
  const navigate = useNavigate();
  return <div className="relative h-screen w-full">
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3")'
    }}>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Subic Bay Yacht Club
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Experience luxury living and world-class sailing in the heart of
            Subic Bay
          </p>
          <button onClick={() => navigate('/membership')} className="bg-white text-navy-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Membership
          </button>
        </div>
      </div>
    </div>;
};