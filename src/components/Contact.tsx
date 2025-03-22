import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
export const Contact = () => {
  return <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-navy-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're interested in membership, have questions about our
              facilities, or would like to book an event, we're here to help.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-navy-900" />
                <div>
                  <h3 className="font-semibold text-navy-900">Location</h3>
                  <p className="text-gray-600">
                    Waterfront Road, Subic Bay Freeport Zone, Philippines
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-navy-900" />
                <div>
                  <h3 className="font-semibold text-navy-900">Phone</h3>
                  <p className="text-gray-600">+63 (47) 252-3000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-navy-900" />
                <div>
                  <h3 className="font-semibold text-navy-900">Email</h3>
                  <p className="text-gray-600">info@sbyc.ph</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
              </div>
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
              <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
              <button className="w-full bg-navy-900 text-white py-3 rounded-md hover:bg-navy-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3" alt="Yacht Club Location" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
};