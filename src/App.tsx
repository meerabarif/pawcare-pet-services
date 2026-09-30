/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Pet Grooming & Spa');
  const [selectedPetType, setSelectedPetType] = useState('Dog');
  const [bookingNotes, setBookingNotes] = useState('');

  // Handle opening booking modal from anywhere
  const handleOpenBooking = (serviceName?: string, packageNote?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    if (packageNote) {
      setBookingNotes(packageNote);
    }
    setIsBookingModalOpen(true);
  };

  // Handle service card selection (navigates or opens modal)
  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsBookingModalOpen(true);
  };

  // Handle estimate transfer to booking modal
  const handleBookWithEstimate = (details: {
    service: string;
    petType: string;
    estimatedTotal: number;
    notes: string;
  }) => {
    setSelectedService(details.service);
    setSelectedPetType(details.petType);
    setBookingNotes(`${details.notes} (Estimated Total: PKR ${details.estimatedTotal.toLocaleString()})`);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2421] selection:bg-[#EAF2ED] selection:text-[#2D6A4F]">
      <ScrollToTop />
      
      {/* Top Bar Navigation with Services Dropdown */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Routed Page Content */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                onSelectService={handleSelectService}
                onBookWithEstimate={handleBookWithEstimate}
                selectedService={selectedService}
                selectedPetType={selectedPetType}
                bookingNotes={bookingNotes}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenBooking={() => handleOpenBooking()} />}
          />
          <Route
            path="/services"
            element={<ServicesPage onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/services/:serviceId"
            element={<ServiceDetailPage onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/why-choose-us"
            element={<WhyChooseUsPage onOpenBooking={() => handleOpenBooking()} />}
          />
          <Route
            path="/estimator"
            element={<EstimatorPage onOpenBookingWithEstimate={handleBookWithEstimate} />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          {/* Catch-all redirect to Home */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                onSelectService={handleSelectService}
                onBookWithEstimate={handleBookWithEstimate}
                selectedService={selectedService}
                selectedPetType={selectedPetType}
                bookingNotes={bookingNotes}
              />
            }
          />
        </Routes>
      </main>

      {/* Universal Footer */}
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

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
