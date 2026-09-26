/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CostEstimator } from './components/CostEstimator';
import { TestimonialsFaq } from './components/TestimonialsFaq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Pet Grooming & Spa');
  const [selectedPetType, setSelectedPetType] = useState('Dog');
  const [bookingNotes, setBookingNotes] = useState('');

  // Handle opening booking modal from anywhere
  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingModalOpen(true);
  };

  // Handle service card selection (scrolls to contact or opens modal)
  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  // Handle estimate transfer to contact form
  const handleBookWithEstimate = (details: {
    service: string;
    petType: string;
    estimatedTotal: number;
    notes: string;
  }) => {
    setSelectedService(details.service);
    setSelectedPetType(details.petType);
    setBookingNotes(`${details.notes} (Estimated Total: PKR ${details.estimatedTotal.toLocaleString()})`);
    
    // Smooth scroll down to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2421] selection:bg-[#EAF2ED] selection:text-[#2D6A4F]">
      {/* Top Bar Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Single Page Content */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <AboutUs />
        <ServicesSection onSelectService={handleSelectService} />
        <WhyChooseUs />
        <CostEstimator onBookWithEstimate={handleBookWithEstimate} />
        <TestimonialsFaq />
        <ContactSection
          initialService={selectedService}
          initialPetType={selectedPetType}
          initialNotes={bookingNotes}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService={selectedService}
        defaultPetType={selectedPetType}
        defaultNotes={bookingNotes}
      />
    </div>
  );
}
