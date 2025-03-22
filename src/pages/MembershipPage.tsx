import React from 'react';
import { Membership } from '../components/Membership';
import { Footer } from '../components/Footer';
export const MembershipPage = () => {
  return <main className="w-full pt-20 relative">
      <div className="relative h-[40vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1611480456129-25d8d7cef933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3")'
      }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Club Membership
            </h1>
            <p className="text-xl text-white/90">
              Join our exclusive community of sailing enthusiasts
            </p>
          </div>
        </div>
      </div>
      <Membership />
      <Footer />
    </main>;
};