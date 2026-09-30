import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PET_SERVICES, ServiceItem } from '../data/petServicesData';
import { 
  Scissors, 
  Home, 
  Sun, 
  Footprints, 
  ShieldCheck, 
  Check, 
  Clock, 
  ArrowRight, 
  Calendar,
  Sparkles,
  Phone,
  MessageCircle
} from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'grooming', label: 'Grooming & Spa' },
    { id: 'boarding', label: 'Boarding' },
    { id: 'daycare', label: 'Daycare' },
    { id: 'walking', label: 'Dog Walking' },
    { id: 'sitting', label: 'In-Home Sitting' },
  ];

  const filteredServices = activeCategory === 'all'
    ? PET_SERVICES
    : PET_SERVICES.filter((s) => s.category === activeCategory);

  const getServiceIcon = (category: ServiceItem['category']) => {
    switch (category) {
      case 'grooming':
        return <Scissors className="h-5 w-5 text-[#2D6A4F]" />;
      case 'boarding':
        return <Home className="h-5 w-5 text-[#2D6A4F]" />;
      case 'daycare':
        return <Sun className="h-5 w-5 text-[#F4A261]" />;
      case 'walking':
        return <Footprints className="h-5 w-5 text-[#2D6A4F]" />;
      case 'sitting':
        return <ShieldCheck className="h-5 w-5 text-[#2D6A4F]" />;
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-[#2D6A4F] uppercase">
            Complete Pet Wellness in Lahore
          </span>
          <h1 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-[#1F2421] sm:text-4xl">
            Our Full Suite of Pet Care Services
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#4A5568]">
            Explore individual specialized services engineered for Lahore’s weather conditions, load shedding protection, and your pet’s physical and emotional comfort.
          </p>
        </div>

        {/* Filter Bar (Segmented Controls - allowed for interactive filtering) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#2D6A4F] text-white shadow-xs'
                  : 'bg-white border border-[#EAE4DC] text-[#4A5568] hover:border-[#2D6A4F] hover:text-[#2D6A4F]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services List Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-3xl border border-[#EAE4DC] bg-white overflow-hidden shadow-2xs hover:shadow-md transition-all hover:border-[#2D6A4F]/50 group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {service.popular && (
                    <div className="absolute top-3 right-3 rounded-lg bg-[#2D6A4F] px-2.5 py-1 text-[11px] font-bold text-white shadow-xs">
                      Popular in Lahore
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-[#1F2421] flex items-center gap-1.5 shadow-xs">
                    <Clock className="h-3 w-3 text-[#2D6A4F]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#2D6A4F] font-semibold">
                    {getServiceIcon(service.category)}
                    <span className="capitalize">{service.category} Service</span>
                  </div>

                  <h2 className="mt-2 font-heading text-xl font-bold text-[#1F2421] group-hover:text-[#2D6A4F] transition-colors">
                    <Link to={`/services/${service.id}`}>
                      {service.title}
                    </Link>
                  </h2>

                  <p className="mt-1 text-xs text-[#2D6A4F] font-medium">
                    {service.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Top Features */}
                  <div className="mt-4 pt-4 border-t border-[#F0EAE1] space-y-2">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#2D312E]">
                        <Check className="h-3.5 w-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between py-3 border-t border-[#F0EAE1]">
                  <div>
                    <span className="text-[11px] text-[#718096] block uppercase tracking-wider font-semibold">Starting at</span>
                    <span className="font-heading text-lg font-extrabold text-[#2D6A4F] tabular-nums">
                      {service.startingPrice}
                    </span>
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1F2421] group-hover:text-[#2D6A4F] hover:underline"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex items-center justify-center rounded-xl border border-[#D5DDD7] bg-[#FAF7F2] py-2.5 text-xs font-bold text-[#1F2421] hover:bg-[#EAE4DC] transition-colors"
                  >
                    View Packages
                  </Link>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.title)}
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-[#2D6A4F] py-2.5 text-xs font-bold text-white hover:bg-[#1B4332] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lahore Climate Protection Banner */}
        <div className="mt-16 rounded-3xl bg-[#FAF7F2] border border-[#EAE4DC] p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                Standard in All PawCare Lahore Services
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1F2421]">
                Zero Load Shedding & Continuous Climate Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Whether your pet is staying overnight, attending daycare, or enjoying a groom, they are protected in 22°C–24°C filtered air conditioning with uninterrupted industrial generator backup, clean drinking water, and certified veterinary first-aid handlers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end justify-center">
              <Link
                to="/estimator"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] px-5 py-3 text-xs font-bold text-white hover:bg-[#1B4332]"
              >
                <span>Calculate Cost Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5DDD7] bg-white px-5 py-3 text-xs font-bold text-[#1F2421] hover:bg-[#FAF7F2]"
              >
                <span>Ask Us Any Question</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
