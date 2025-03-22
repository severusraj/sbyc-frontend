import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Gallery } from '../components/Gallery';
import { Marina } from '../components/Marina';
import { Hotel } from '../components/Hotel';
import { Dining } from '../components/Dining';
import { Events } from '../components/Events';
import { Facilities } from '../components/Facilities';
import { Membership } from '../components/Membership';
import { ReciprocalClubs } from '../components/ReciprocalClubs';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
export const Home = () => {
  return <main className="w-full">
      <Hero />
      <Features />
      <Gallery />
      <Marina />
      <Hotel />
      <Dining />
      <Events />
      <Facilities />
      <Membership />
      <ReciprocalClubs />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </main>;
};