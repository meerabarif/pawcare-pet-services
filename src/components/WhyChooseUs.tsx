import React from 'react';
import { WHY_CHOOSE_US_POINTS, LAHORE_AREAS } from '../data/petServicesData';
import { ShieldCheck, HeartHandshake, ThermometerSnowflake, Smartphone, Check, MapPin } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake className="h-6 w-6 text-[#2D6A4F]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="h-6 w-6 text-[#2D6A4F]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-[#2D6A4F]" />;
      case 'Smartphone':
        return <Smartphone className="h-6 w-6 text-[#F4A261]" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-[#2D6A4F]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#EAE4DC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-[#2D6A4F] uppercase">
            The PawCare Standard
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#1F2421] sm:text-3xl md:text-4xl">
            Why Pet Owners Across Lahore Trust Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4A5568]">
            We designed our operations specifically around the real needs of Lahore pet parents: uninterrupted power, strict clinical hygiene, zero cage stress, and instant WhatsApp communication.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-[#EAE4DC] bg-white p-7 shadow-2xs transition-all hover:border-[#2D6A4F]/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF2ED]">
                  {getIcon(point.icon)}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF2ED] px-3 py-1 text-xs font-bold text-[#2D6A4F]">
                  <Check className="h-3 w-3" />
                  {point.highlight}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-xl font-bold text-[#1F2421]">
                {point.title}
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-[#4A5568]">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lahore Coverage Zone Card */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-[#EAE4DC] bg-white p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#F0EAE1]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                <MapPin className="h-4 w-4" />
                <span>Lahore Service Radius & Pick-Up Zones</span>
              </div>
              <h3 className="mt-1 font-heading text-xl font-bold text-[#1F2421]">
                Serving Pet Parents Across All Major Lahore Neighborhoods
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#4A5568]">
                Whether you drop off at our DHA Phase 3 or Gulberg III centers, or schedule our air-conditioned mobile Pet Taxi for home pickup:
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-[#EAF2ED] px-4 py-2 rounded-2xl">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2D6A4F] animate-pulse" />
              <span className="text-xs font-bold text-[#2D6A4F]">Active Daily Across Lahore</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {LAHORE_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-xl border border-[#EAE4DC] bg-[#FAF7F2] px-3 py-2.5 text-xs font-medium text-[#1F2421] transition-colors hover:border-[#2D6A4F] hover:bg-[#F2F7F4]"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#2D6A4F]" />
                <span className="truncate">{area.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
