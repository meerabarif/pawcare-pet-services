import React, { useState } from 'react';
import { PawPrint, Phone, Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EAE4DC] bg-[#FAF7F2]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single element Brand Wordmark */}
        <a 
          href="#home" 
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-[#1F2421] transition-transform hover:scale-[1.01]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2D6A4F] text-[#FAF7F2] shadow-sm transition-all group-hover:bg-[#1B4332]">
            <PawPrint className="h-5 w-5 fill-current" />
          </div>
          <span className="font-heading text-lg sm:text-xl">
            PawCare <span className="text-[#2D6A4F]">Pet Services</span>
          </span>
        </a>

        {/* Zone 2: 4-6 Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4A5568]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#2D6A4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action buttons */}
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
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#2D6A4F] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#1B4332] active:scale-[0.98] whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Book an Appointment</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
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
        <div className="border-b border-[#EAE4DC] bg-[#FAF7F2] px-4 pt-2 pb-6 sm:hidden">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#1F2421] hover:bg-[#EAE4DC]"
              >
                {link.name}
              </a>
            ))}
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
