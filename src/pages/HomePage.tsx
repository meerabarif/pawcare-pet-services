import React from 'react';
import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CostEstimator } from '../components/CostEstimator';
import { TestimonialsFaq } from '../components/TestimonialsFaq';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onOpenBooking: (serviceName?: string) => void;
  onSelectService: (serviceTitle: string) => void;
  onBookWithEstimate: (details: {
    service: string;
    petType: string;
    estimatedTotal: number;
    notes: string;
  }) => void;
  selectedService: string;
  selectedPetType: string;
  bookingNotes: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onSelectService,
  onBookWithEstimate,
  selectedService,
  selectedPetType,
  bookingNotes,
}) => {
  return (
    <div>
      <Hero onOpenBooking={() => onOpenBooking()} />
      <AboutUs />
      <ServicesSection onSelectService={onSelectService} />
      <WhyChooseUs />
      <CostEstimator onBookWithEstimate={onBookWithEstimate} />
      <TestimonialsFaq />
      <ContactSection
        initialService={selectedService}
        initialPetType={selectedPetType}
        initialNotes={bookingNotes}
      />
    </div>
  );
};
