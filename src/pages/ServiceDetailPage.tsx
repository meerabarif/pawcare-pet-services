import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PET_SERVICES, ServiceItem } from '../data/petServicesData';
import { 
  Check, 
  Clock, 
  ChevronRight, 
  Calendar, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle, 
  ChevronDown, 
  ArrowRight,
  PawPrint,
  Scissors,
  Home,
  Sun,
  Footprints
} from 'lucide-react';

interface ServiceDetailPageProps {
  onOpenBooking: (serviceName?: string, packageNote?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenBooking }) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = PET_SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24 text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-[#E76F51]" />
        <h1 className="mt-4 font-heading text-2xl font-bold text-[#1F2421]">Service Not Found</h1>
        <p className="mt-2 text-sm text-[#4A5568]">The pet service you are looking for does not exist or may have moved.</p>
        <Link 
          to="/services" 
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2D6A4F] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#1B4332]"
        >
          <span>Explore All Services</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const otherServices = PET_SERVICES.filter((s) => s.id !== service.id);

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
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#718096] mb-6">
          <Link to="/" className="hover:text-[#2D6A4F] transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/services" className="hover:text-[#2D6A4F] transition-colors">Our Services</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#1F2421] font-semibold">{service.title}</span>
        </nav>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-white border border-[#EAE4DC] p-6 sm:p-10 shadow-sm">
          <div className="lg:col-span-7 space-y-4">
            
            {/* Unboxed Metadata (Zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2D6A4F]">
              <span>PawCare Lahore Certified</span>
              <span aria-hidden="true">·</span>
              <span>{service.duration}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#E76F51]">Starts {service.startingPrice}</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1F2421] tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg font-medium text-[#2D6A4F] leading-snug">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#4A5568]">
              {service.detailedOverview}
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2D312E]">
              {service.features.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EAF2ED] text-[#2D6A4F]">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking(service.title)}
                className="flex items-center gap-2 rounded-xl bg-[#2D6A4F] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-[#1B4332] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>Book This Service</span>
              </button>

              <a
                href={`https://wa.me/923007292273?text=Hi%20PawCare%20Lahore!%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-[#D5DDD7] bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-[#1F2421] hover:border-[#25D366] hover:bg-[#F2F7F4] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border-4 border-[#FAF7F2] shadow-md bg-[#FAF7F2]">
              <img
                src={service.image}
                alt={`${service.title} in Lahore`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="eager"
              />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 backdrop-blur-xs p-3 border border-[#EAE4DC] text-xs">
                <div className="font-bold text-[#1F2421] flex items-center justify-between">
                  <span>Lahore Climate Shield</span>
                  <span className="text-[#2D6A4F] text-[11px] font-semibold">24/7 Verified</span>
                </div>
                <p className="text-[11px] text-[#718096] mt-0.5 line-clamp-2">
                  {service.lahoreAdvantage}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lahore Climate Advantage Highlight Bar */}
        <div className="mt-10 rounded-2xl bg-[#F2F7F4] border border-[#D5DDD7] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F]">
                Tailored for Lahore Weather & Environment
              </span>
              <h3 className="font-heading text-lg font-bold text-[#1F2421]">
                Why local pet parents choose PawCare for {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] max-w-3xl">
                {service.lahoreAdvantage}
              </p>
            </div>
            <Link
              to="/estimator"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-white border border-[#2D6A4F] px-4 py-2.5 text-xs font-bold text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white transition-colors"
            >
              <span>Calculate Custom Price</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Packages & Pricing Tiers */}
        {service.packages && service.packages.length > 0 && (
          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">Transparent Pricing</span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-[#1F2421]">
                Select Your {service.title} Package
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#4A5568]">
                Clear rates in PKR with zero hidden surcharges. Includes medical-grade sanitation and dedicated handler attention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.packages.map((pkg, idx) => (
                <div 
                  key={idx}
                  className={`flex flex-col justify-between rounded-2xl border p-6 transition-all hover:shadow-md ${
                    pkg.badge 
                      ? 'border-[#2D6A4F] bg-white ring-1 ring-[#2D6A4F]' 
                      : 'border-[#EAE4DC] bg-white'
                  }`}
                >
                  <div>
                    {pkg.badge && (
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F] mb-2">
                        {pkg.badge}
                      </div>
                    )}
                    <h3 className="font-heading text-lg font-bold text-[#1F2421]">{pkg.name}</h3>
                    <div className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold text-[#2D6A4F] tabular-nums">
                      {pkg.price}
                    </div>
                    <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="mt-6 border-t border-[#F0EAE1] pt-4 space-y-2.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#718096]">
                        What's Included:
                      </div>
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#2D312E]">
                          <Check className="h-4 w-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#F0EAE1]">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(service.title, `Selected Package: ${pkg.name} (${pkg.price})`)}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        pkg.badge
                          ? 'bg-[#2D6A4F] text-white hover:bg-[#1B4332]'
                          : 'border border-[#D5DDD7] bg-[#FAF7F2] text-[#1F2421] hover:bg-[#2D6A4F] hover:text-white hover:border-[#2D6A4F]'
                      }`}
                    >
                      Book {pkg.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step-by-Step Procedure */}
        {service.steps && service.steps.length > 0 && (
          <div className="mt-20 rounded-3xl bg-white border border-[#EAE4DC] p-6 sm:p-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">What to Expect</span>
              <h2 className="mt-1 font-heading text-2xl font-bold text-[#1F2421]">
                Step-by-Step Experience
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#4A5568]">
                Every session is structured to ensure stress-free comfort, complete transparency, and medical hygiene.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6">
              {service.steps.map((st, i) => (
                <div key={i} className="relative rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] p-4 flex flex-col justify-between">
                  <div>
                    <div className="font-heading text-2xl font-extrabold text-[#2D6A4F]/40">
                      {st.step}
                    </div>
                    <h3 className="mt-2 font-heading text-sm font-bold text-[#1F2421]">
                      {st.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">Questions Answered</span>
              <h2 className="mt-1 font-heading text-2xl font-bold text-[#1F2421]">
                Frequently Asked Questions About {service.title}
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="rounded-2xl border border-[#EAE4DC] bg-white overflow-hidden transition-all">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                    >
                      <span className="font-heading text-sm font-semibold text-[#1F2421] pr-4">{faq.q}</span>
                      <ChevronDown className={`h-4 w-4 text-[#2D6A4F] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-[#4A5568] border-t border-[#F0EAE1]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Direct Booking CTA Card */}
        <div className="mt-16 rounded-3xl bg-[#2D6A4F] text-white p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#95D5B2] uppercase">
              Ready to Give Your Pet the Best in Lahore?
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Reserve {service.title} Today
            </h2>
            <p className="text-xs sm:text-sm text-[#E2DBD1] leading-relaxed">
              Book online or call us directly. We cover DHA, Gulberg, Model Town, Bahria, and central Lahore with climate-safe AC pet taxi transport.
            </p>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking(service.title)}
                className="rounded-xl bg-white px-6 py-3 text-xs sm:text-sm font-bold text-[#2D6A4F] shadow-sm hover:bg-[#FAF7F2] cursor-pointer"
              >
                Schedule Appointment
              </button>
              <a
                href={`https://wa.me/923007292273?text=Hi%20PawCare%20Lahore!%20I%20would%20like%20to%20book%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/40 px-5 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-white/10"
              >
                Chat on WhatsApp (+92 300 7292273)
              </a>
            </div>
          </div>
        </div>

        {/* Other Services Switcher Grid */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">More Services</span>
              <h3 className="font-heading text-xl font-bold text-[#1F2421]">Explore Other Lahore Pet Services</h3>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-[#2D6A4F] hover:underline flex items-center gap-1"
            >
              <span>View All 5 Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                to={`/services/${other.id}`}
                className="group flex flex-col justify-between rounded-2xl border border-[#EAE4DC] bg-white p-4 transition-all hover:border-[#2D6A4F] hover:shadow-md"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[#FAF7F2] mb-3">
                    <img
                      src={other.image}
                      alt={other.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    {getServiceIcon(other.category)}
                    <h4 className="font-heading text-sm font-bold text-[#1F2421] group-hover:text-[#2D6A4F]">
                      {other.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#718096] line-clamp-2 leading-relaxed">
                    {other.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#2D6A4F] tabular-nums">{other.startingPrice}</span>
                  <span className="font-semibold text-[#1F2421] group-hover:text-[#2D6A4F] flex items-center gap-1 text-[11px]">
                    Details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
