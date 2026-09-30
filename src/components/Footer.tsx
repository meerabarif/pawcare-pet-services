import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, MapPin, Phone, Mail, MessageCircle, Heart } from 'lucide-react';
import { PET_SERVICES } from '../data/petServicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#EAE4DC] bg-[#F5F0E8] text-[#4A5568]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2D6A4F] text-white">
                <PawPrint className="h-5 w-5 fill-current" />
              </div>
              <span className="font-heading text-lg font-bold text-[#1F2421]">
                PawCare <span className="text-[#2D6A4F]">Pet Services</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-[#4A5568] max-w-sm">
              Lahore’s trusted sanctuary for hygienic pet grooming, climate-controlled boarding, daytime play, and personalized in-home pet sitting.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://wa.me/923007292273"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#D5DDD7] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="tel:+923007292273"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#D5DDD7] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@pawcarelahore.com"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#D5DDD7] text-[#4A5568] hover:bg-[#1F2421] hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Dedicated Services Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-3">
              Services Pages
            </h4>
            <ul className="space-y-2 text-xs">
              {PET_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="hover:text-[#2D6A4F] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link to="/services" className="font-bold text-[#2D6A4F] hover:underline">
                  All Services Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Pages Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-3">
              Quick Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-[#2D6A4F]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#2D6A4F]">About Us</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-[#2D6A4F]">Why Choose Us</Link></li>
              <li><Link to="/estimator" className="hover:text-[#2D6A4F]">Cost Estimator</Link></li>
              <li><Link to="/contact" className="hover:text-[#2D6A4F]">Contact & Location</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2421] mb-3">
              Visit or Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#4A5568]">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                <span>Sector Y, Phase 3, DHA, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#2D6A4F] shrink-0" />
                <span>+92 300 7292273</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#2D6A4F] shrink-0" />
                <span>hello@pawcarelahore.com</span>
              </div>
              <div className="text-[11px] text-[#718096] pt-1">
                Mon - Sun: 8:00 AM - 9:00 PM <br />
                <span className="text-[#2D6A4F] font-semibold">24/7 Emergency Vet Hotline</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#E2DBD1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#718096]">
          <p>© {new Date().getFullYear()} PawCare Pet Services Lahore. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Providing loving pet services in Lahore with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-current inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
