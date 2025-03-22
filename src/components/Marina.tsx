import React from 'react';
import { Anchor, Shield, Wrench } from 'lucide-react';
import { BerthingRates } from './BerthingRates';
const services = [{
  icon: <Anchor className="w-6 h-6" />,
  title: 'Premium Berthing',
  description: 'State-of-the-art berths with 24/7 security and full utilities'
}, {
  icon: <Shield className="w-6 h-6" />,
  title: 'Security Services',
  description: 'Round-the-clock surveillance and dedicated security personnel'
}, {
  icon: <Wrench className="w-6 h-6" />,
  title: 'Maintenance',
  description: 'Complete yacht maintenance and repair services'
}, {
  icon: <div className="w-6 h-6" />,
  title: 'Weather Updates',
  description: 'Real-time weather monitoring and forecasting'
}];
export const Marina = () => {
  return <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-navy-900 mb-6">
              World-Class Marina Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our state-of-the-art marina offers comprehensive services for all
              your boating needs. With premium facilities and expert staff, we
              ensure your vessel receives the finest care.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => <div key={index} className="flex space-x-4">
                  <div className="text-navy-900">{service.icon}</div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1587365001066-8263b7061a38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Marina Services" className="object-cover w-full h-full" />
          </div>
        </div>
        <BerthingRates />
      </div>
    </section>;
};