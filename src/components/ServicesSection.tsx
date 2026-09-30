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
  Sparkles, 
  ArrowRight,
  Calendar
} from 'lucide-react';

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
        </div>

        {/* Category Filter Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#2D6A4F] text-white shadow-xs'
                  : 'bg-white border border-[#EAE4DC] text-[#4A5568] hover:border-[#2D6A4F] hover:text-[#2D6A4F]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const photo = service.image;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#EAE4DC] bg-white overflow-hidden shadow-2xs transition-all hover:border-[#2D6A4F]/50 hover:shadow-md"
              >
                <div>
                  {/* Photo Banner with tag */}
                  {photo && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F2]">
                      <img
                        src={photo}
                        alt={`${service.title} Lahore`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
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

                  <div className="p-6">
                    {/* Title & Tagline */}
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EAF2ED]">
                        {getServiceIcon(service.category)}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-[#1F2421] group-hover:text-[#2D6A4F] transition-colors">
                          <Link to={`/services/${service.id}`}>
                            {service.title}
                          </Link>
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
                </div>

                {/* Bottom Pricing & Action */}
                <div className="p-6 pt-0">
                  <div className="border-t border-[#F0EAE1] pt-4 flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#718096]">Starting From</span>
                      <div className="font-heading text-lg font-extrabold text-[#1F2421] tabular-nums">
                        {service.startingPrice}
                      </div>
                    </div>
                    <Link
                      to={`/services/${service.id}`}
                      className="text-xs font-bold text-[#2D6A4F] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Page</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex items-center justify-center rounded-xl border border-[#D5DDD7] bg-[#FAF7F2] py-2.5 text-xs font-bold text-[#1F2421] hover:bg-[#EAE4DC] transition-colors"
                    >
                      View Packages
                    </Link>
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-[#2D6A4F] py-2.5 text-xs font-bold text-white shadow-2xs hover:bg-[#1B4332] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Book Service</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Overview Link Bar */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-2xl bg-white border border-[#2D6A4F] px-6 py-3 text-xs sm:text-sm font-bold text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white transition-all shadow-xs"
          >
            <span>View Full Service Catalog & Pricing Matrix</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
