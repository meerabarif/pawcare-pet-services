import React, { useState } from 'react';
import { PET_SERVICES, ServiceItem } from '../data/petServicesData';
import { Scissors, Home, Sun, Footprints, ShieldCheck, Check, Clock, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Pet Services' },
    { id: 'grooming', label: 'Grooming & Spa' },
    { id: 'boarding', label: 'Boarding' },
    { id: 'daycare', label: 'Daycare' },
    { id: 'walking', label: 'Dog Walking' },
    { id: 'sitting', label: 'In-Home Sitting' },
  ];

  const filteredServices = activeCategory === 'all'
    ? PET_SERVICES
    : PET_SERVICES.filter(s => s.category === activeCategory);

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

  const getServicePhoto = (id: string) => {
    if (id === 'pet-grooming') return '/src/assets/images/service_pet_grooming_lahore_1790446270038.jpg';
    if (id === 'pet-daycare' || id === 'pet-boarding') return '/src/assets/images/service_pet_daycare_lahore_1790446283796.jpg';
    return null;
  };

  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-[#2D6A4F] uppercase">
            Tailored Care For Lahore Pets
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#1F2421] sm:text-3xl md:text-4xl">
            Our Professional Pet Services in Lahore
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4A5568]">
            From cooling summer de-shedding spa baths to 24/7 power-backed luxury boarding, we take pride in safeguarding the wellbeing of your canine and feline family members.
          </p>

          {/* Interactive Category Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#EAE4DC]/60 rounded-2xl max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#1F2421] shadow-xs'
                    : 'text-[#4A5568] hover:text-[#1F2421] hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const photo = getServicePhoto(service.id);
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#EAE4DC] bg-white p-6 shadow-2xs transition-all duration-300 hover:border-[#2D6A4F]/40 hover:shadow-xl hover:shadow-[#1F2421]/5"
              >
                <div>
                  {/* Photo if available */}
                  {photo && (
                    <div className="relative mb-5 -mx-6 -mt-6 h-48 overflow-hidden bg-[#FAF7F2]">
                      <img
                        src={photo}
                        alt={`${service.title} in Lahore`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      {service.popular && (
                        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-[#F4A261] px-3 py-1 text-xs font-bold text-white shadow-xs">
                          <Sparkles className="h-3 w-3" />
                          <span>Popular in Lahore</span>
                        </div>
                      )}
                      <div className="absolute bottom-3 left-4 text-white text-xs font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                        {service.duration}
                      </div>
                    </div>
                  )}

                  {/* Header Row without photo */}
                  {!photo && (
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2ED]">
                        {getServiceIcon(service.category)}
                      </div>
                      {service.popular && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#FBF0E4] px-2.5 py-0.5 text-xs font-semibold text-[#D97706]">
                          <Sparkles className="h-3 w-3" />
                          Popular
                        </span>
                      )}
                    </div>
                  )}

                  {/* Title & Tagline */}
                  <div className="flex items-center gap-2">
                    {photo && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EAF2ED]">
                        {getServiceIcon(service.category)}
                      </div>
                    )}
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#1F2421] group-hover:text-[#2D6A4F] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-medium text-[#2D6A4F]">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#4A5568]">
                    {service.description}
                  </p>

                  {/* Key checklist features */}
                  <div className="mt-5 space-y-2 border-t border-[#F0EAE1] pt-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#718096]">
                      What's Included:
                    </div>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#2D312E]">
                        <Check className="h-3.5 w-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & Action */}
                <div className="mt-6 border-t border-[#F0EAE1] pt-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#718096]">Starting From</span>
                      <div className="font-heading text-lg font-extrabold text-[#1F2421] tabular-nums">
                        {service.startingPrice}
                      </div>
                    </div>
                    {!photo && (
                      <div className="flex items-center gap-1 text-xs text-[#718096]">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="mt-4 w-full rounded-2xl bg-[#FAF7F2] border border-[#D5DDD7] py-2.5 text-xs font-bold text-[#1F2421] shadow-2xs transition-all hover:bg-[#2D6A4F] hover:text-white hover:border-[#2D6A4F] active:scale-[0.98] cursor-pointer"
                  >
                    Book {service.title}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Lahore Climate Advisory banner */}
        <div className="mt-14 rounded-3xl border border-[#2D6A4F]/20 bg-[#EAF2ED]/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              Lahore Seasonal Weather Advisory
            </span>
            <h4 className="font-heading text-lg font-bold text-[#1F2421]">
              Is your dog or cat shedding excessively or struggling with Lahore's heat?
            </h4>
            <p className="text-xs sm:text-sm text-[#4A5568] max-w-2xl">
              We offer specialized summer coat thinning, de-shedding fur baths, paw pad cooling salves, and medicated anti-tick dips specially formulated for Punjab's humidity.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Pet Grooming & Spa - Summer De-Shedding')}
            className="shrink-0 rounded-2xl bg-[#2D6A4F] px-5 py-3 text-xs font-bold text-white shadow-xs hover:bg-[#1B4332] transition-colors cursor-pointer"
          >
            Book Summer De-Shedding
          </button>
        </div>

      </div>
    </section>
  );
};
