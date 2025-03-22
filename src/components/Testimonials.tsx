import React from 'react';
export const Testimonials = () => {
  const testimonials = [{
    quote: "The facilities and service at SBYC are truly world-class. It's become our second home on the water.",
    author: 'James Wilson',
    title: 'Yacht Owner'
  }, {
    quote: 'From the fine dining to the impeccable marina services, SBYC exceeds expectations at every turn.',
    author: 'Sarah Chen',
    title: 'Club Member'
  }, {
    quote: "The events and community at SBYC make it more than just a yacht club - it's a lifestyle.",
    author: 'Michael Rodriguez',
    title: 'Long-time Member'
  }];
  return <section className="py-24 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Member Experiences</h2>
          <p className="text-xl text-gray-300">
            Hear what our members have to say
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
              <div className="text-2xl text-white/20 mb-4">"</div>
              <p className="text-lg text-gray-300 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.title}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};