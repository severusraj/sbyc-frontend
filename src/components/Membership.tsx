import React from 'react';
import { MembershipForm } from './MembershipForm';
export const Membership = () => {
  return <section className="py-24 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Join Our Exclusive Community
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Experience the privileges of being a member at one of Asia's
              premier yacht clubs. Enjoy exclusive access to world-class
              facilities, special events, and a community of like-minded
              individuals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                <span>Access to all club facilities and services</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                <span>Priority booking for events and accommodations</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                <span>Reciprocal privileges at partner clubs worldwide</span>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1611480456129-25d8d7cef933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Yacht club membership" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Become a Member</h2>
            <p className="text-gray-300">
              Fill out the form below to start your membership application
              process
            </p>
          </div>
          <MembershipForm />
        </div>
      </div>
    </section>;
};