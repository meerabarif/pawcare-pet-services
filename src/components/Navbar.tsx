import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  PawPrint, 
  Phone, 
  Menu, 
  X, 
  MessageCircle, 
  ChevronDown, 
  Scissors, 
  Home, 
  Sun, 
  Footprints, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { PET_SERVICES } from '../data/petServicesData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdowns on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'grooming':
        return <Scissors className="h-4 w-4 text-[#2D6A4F]" />;
      case 'boarding':
        return <Home className="h-4 w-4 text-[#2D6A4F]" />;
      case 'daycare':
        return <Sun className="h-4 w-4 text-[#F4A261]" />;
      case 'walking':
        return <Footprints className="h-4 w-4 text-[#2D6A4F]" />;
      case 'sitting':
        return <ShieldCheck className="h-4 w-4 text-[#2D6A4F]" />;
      default:
        return <PawPrint className="h-4 w-4 text-[#2D6A4F]" />;
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    // "Our Services" handled separately with dropdown
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Cost Estimator', path: '/estimator' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EAE4DC] bg-[#FAF7F2]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Wordmark */}
        <Link 
          to="/" 
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-[#1F2421] transition-transform hover:scale-[1.01]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2D6A4F] text-[#FAF7F2] shadow-sm transition-all group-hover:bg-[#1B4332]">
            <PawPrint className="h-5 w-5 fill-current" />
          </div>
          <span className="font-heading text-lg sm:text-xl">
            PawCare <span className="text-[#2D6A4F]">Pet Services</span>
          </span>
        </Link>

        {/* Clean Text Navigation Links + Dropdown */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A5568]">
          <Link
            to="/"
            className={`relative py-1 transition-colors hover:text-[#2D6A4F] ${
              location.pathname === '/' ? 'text-[#2D6A4F] font-semibold border-b-2 border-[#2D6A4F]' : ''
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`relative py-1 transition-colors hover:text-[#2D6A4F] ${
              location.pathname === '/about' ? 'text-[#2D6A4F] font-semibold border-b-2 border-[#2D6A4F]' : ''
            }`}
          >
            About Us
          </Link>

          {/* "Our Services" Dropdown Trigger */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1.5 py-1 text-sm font-medium transition-colors hover:text-[#2D6A4F] cursor-pointer ${
                isServicesActive ? 'text-[#2D6A4F] font-semibold border-b-2 border-[#2D6A4F]' : ''
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Our Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#2D6A4F]' : ''}`} />
            </button>

            {/* Dropdown Menu Panel */}
            {servicesDropdownOpen && (
              <div className="absolute left-0 mt-1 w-80 rounded-2xl border border-[#EAE4DC] bg-white p-2 shadow-xl shadow-black/5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#718096] border-b border-[#F0EAE1]">
                  Lahore Pet Care Services
                </div>

                <div className="py-1">
                  {PET_SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-[#FAF7F2] ${
                        location.pathname === `/services/${service.id}` ? 'bg-[#F2F7F4] text-[#2D6A4F]' : 'text-[#1F2421]'
                      }`}
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FAF7F2] group-hover:bg-white group-hover:shadow-xs transition-all">
                        {getServiceIcon(service.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold leading-tight truncate group-hover:text-[#2D6A4F]">
                            {service.title}
                          </span>
                          <span className="text-[10px] font-medium text-[#718096] tabular-nums shrink-0 ml-1">
                            {service.startingPrice.split('/')[0]}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#718096] line-clamp-1 mt-0.5 leading-snug">
                          {service.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Dropdown Footer: View All Services */}
                <div className="border-t border-[#F0EAE1] pt-1.5 mt-1">
                  <Link
                    to="/services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-[#2D6A4F] hover:bg-[#F2F7F4] transition-colors"
                  >
                    <span>Explore All Services Overview</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/why-choose-us"
            className={`relative py-1 transition-colors hover:text-[#2D6A4F] ${
              location.pathname === '/why-choose-us' ? 'text-[#2D6A4F] font-semibold border-b-2 border-[#2D6A4F]' : ''
            }`}
          >
            Why Choose Us
          </Link>

          <Link
            to="/estimator"
            className={`relative py-1 transition-colors hover:text-[#2D6A4F] ${
              location.pathname === '/estimator' ? 'text-[#2D6A4F] font-semibold border-b-2 border-[#2D6A4F]' : ''
            }`}
          >
            Cost Estimator
          </Link>

          <Link
            to="/contact"
            className={`relative py-1 transition-colors hover:text-[#2D6A4F] ${
              location.pathname === '/contact' ? 'text-[#2D6A4F] font-semibold border-b-2 border-[#2D6A4F]' : ''
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Primary Action buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/923007292273?text=Hi%20PawCare%20Lahore!%20I%20would%20like%20to%20inquire%20about%20your%20pet%20care%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#D5DDD7] bg-white px-3.5 py-2 text-xs font-semibold text-[#1F2421] shadow-xs transition-all hover:border-[#2D6A4F] hover:bg-[#F2F7F4] hover:text-[#2D6A4F] whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#2D6A4F] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#1B4332] active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Book an Appointment</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="rounded-lg bg-[#2D6A4F] px-3 py-1.5 text-xs font-semibold text-white"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-[#4A5568] hover:bg-[#EAE4DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#EAE4DC] bg-[#FAF7F2] px-4 pt-2 pb-6 lg:hidden max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2 pt-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                location.pathname === '/' ? 'bg-[#EAE4DC] text-[#2D6A4F] font-bold' : 'text-[#1F2421]'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                location.pathname === '/about' ? 'bg-[#EAE4DC] text-[#2D6A4F] font-bold' : 'text-[#1F2421]'
              }`}
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="rounded-xl border border-[#EAE4DC] bg-white p-2">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between px-2 py-1 text-sm font-bold text-[#1F2421]"
              >
                <span>Our Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#2D6A4F]' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 space-y-1 border-t border-[#F0EAE1] pt-2">
                  <Link
                    to="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-bold text-[#2D6A4F] hover:bg-[#FAF7F2]"
                  >
                    <span>All Services Overview</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>

                  {PET_SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs text-[#4A5568] hover:bg-[#FAF7F2] hover:text-[#2D6A4F]"
                    >
                      {getServiceIcon(s.category)}
                      <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                location.pathname === '/why-choose-us' ? 'bg-[#EAE4DC] text-[#2D6A4F] font-bold' : 'text-[#1F2421]'
              }`}
            >
              Why Choose Us
            </Link>

            <Link
              to="/estimator"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                location.pathname === '/estimator' ? 'bg-[#EAE4DC] text-[#2D6A4F] font-bold' : 'text-[#1F2421]'
              }`}
            >
              Cost Estimator
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                location.pathname === '/contact' ? 'bg-[#EAE4DC] text-[#2D6A4F] font-bold' : 'text-[#1F2421]'
              }`}
            >
              Contact Us
            </Link>

            <div className="pt-3 border-t border-[#EAE4DC] flex flex-col gap-2">
              <a
                href="https://wa.me/923007292273?text=Hi%20PawCare%20Lahore!%20I%20would%20like%20to%20inquire%20about%20your%20pet%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#D5DDD7] bg-white py-2.5 text-sm font-semibold text-[#1F2421]"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                WhatsApp Direct (+92 300 7292273)
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] py-2.5 text-sm font-semibold text-white shadow-xs"
              >
                <Phone className="h-4 w-4" />
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
