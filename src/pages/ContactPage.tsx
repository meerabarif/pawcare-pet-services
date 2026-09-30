import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import { LAHORE_AREAS, PET_SERVICES } from '../data/petServicesData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    petType: 'Dog',
    serviceNeeded: 'Pet Grooming & Spa',
    preferredDate: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
    neighborhood: 'DHA Lahore',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hi PawCare Lahore! I would like to book an appointment:
- Name: ${formData.name || 'Pet Parent'}
- Phone: ${formData.phone || 'N/A'}
- Pet: ${formData.petType}
- Service: ${formData.serviceNeeded}
- Preferred Date: ${formData.preferredDate || 'Earliest available'}
- Preferred Time: ${formData.preferredTime}
- Neighborhood: ${formData.neighborhood}
- Special Notes: ${formData.message || 'None'}`;
    return `https://wa.me/923007292273?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-[#2D6A4F] uppercase">
            Get in Touch
          </span>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2421] tracking-tight">
            Contact PawCare Pet Services Lahore
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4A5568]">
            We are here 7 days a week to assist you. Book a service, schedule a facility visit, or reach out to our emergency on-call veterinarian.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-[#EAE4DC] bg-white p-6 shadow-2xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2ED] text-[#2D6A4F] mb-4">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-sm font-bold text-[#1F2421]">Phone Helpline</h3>
            <p className="mt-1 text-xs text-[#6B7280]">Daily 8:00 AM - 9:00 PM</p>
            <a href="tel:+923007292273" className="mt-3 block font-bold text-sm text-[#2D6A4F] hover:underline">
              +92 300 7292273
            </a>
          </div>

          <div className="rounded-2xl border border-[#EAE4DC] bg-white p-6 shadow-2xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366] mb-4">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-sm font-bold text-[#1F2421]">WhatsApp Direct</h3>
            <p className="mt-1 text-xs text-[#6B7280]">Instant updates & bookings</p>
            <a 
              href="https://wa.me/923007292273" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 block font-bold text-sm text-[#25D366] hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border border-[#EAE4DC] bg-white p-6 shadow-2xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2ED] text-[#2D6A4F] mb-4">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-sm font-bold text-[#1F2421]">Lahore Facility</h3>
            <p className="mt-1 text-xs text-[#6B7280]">Central AC Sanctuary</p>
            <span className="mt-3 block text-xs font-semibold text-[#1F2421]">
              Sector Y, Phase 3, DHA, Lahore
            </span>
          </div>

          <div className="rounded-2xl border border-[#EAE4DC] bg-white p-6 shadow-2xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2ED] text-[#2D6A4F] mb-4">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-sm font-bold text-[#1F2421]">Hours & Emergency</h3>
            <p className="mt-1 text-xs text-[#6B7280]">Check-ins & Drop-offs</p>
            <span className="mt-3 block text-xs font-semibold text-[#1F2421]">
              Mon - Sun: 8 AM - 9 PM <span className="text-[#2D6A4F] block text-[11px]">(24/7 Vet On-Call)</span>
            </span>
          </div>
        </div>

        {/* Main Grid: Form + Location & Coverage */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Booking & Inquiry Form */}
          <div className="lg:col-span-7 rounded-3xl border border-[#EAE4DC] bg-white p-6 sm:p-10 shadow-sm">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1F2421]">
              Schedule an Appointment or Ask a Question
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#4A5568]">
              Fill out the details below. Our Lahore team confirms bookings within 15–30 minutes during operating hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-[#EAF2ED] p-6 text-center border border-[#95D5B2]">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#2D6A4F]" />
                <h3 className="mt-3 font-heading text-lg font-bold text-[#1F2421]">
                  Appointment Request Received!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#4A5568] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our Lahore care coordinator will reach out to <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#20ba59]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        petType: 'Dog',
                        serviceNeeded: 'Pet Grooming & Spa',
                        preferredDate: '',
                        preferredTime: 'Morning (9 AM - 12 PM)',
                        neighborhood: 'DHA Lahore',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center justify-center rounded-xl border border-[#D5DDD7] bg-white px-5 py-2.5 text-xs font-bold text-[#1F2421] hover:bg-[#FAF7F2]"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {errorMsg && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-700 border border-red-200">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayesha Malik"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#EAE4DC] px-3.5 py-2.5 text-xs sm:text-sm focus:border-[#2D6A4F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-[#EAE4DC] px-3.5 py-2.5 text-xs sm:text-sm focus:border-[#2D6A4F] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                      Pet Type
                    </label>
                    <select
                      value={formData.petType}
                      onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                      className="w-full rounded-xl border border-[#EAE4DC] px-3.5 py-2.5 text-xs sm:text-sm focus:border-[#2D6A4F] focus:outline-none bg-white"
                    >
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                      <option value="Multiple Pets">Multiple Pets</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                      Service Needed
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full rounded-xl border border-[#EAE4DC] px-3.5 py-2.5 text-xs sm:text-sm focus:border-[#2D6A4F] focus:outline-none bg-white"
                    >
                      {PET_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full rounded-xl border border-[#EAE4DC] px-3.5 py-2.5 text-xs sm:text-sm focus:border-[#2D6A4F] focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                      Time Window
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full rounded-xl border border-[#EAE4DC] px-3.5 py-2.5 text-xs sm:text-sm focus:border-[#2D6A4F] focus:outline-none bg-white"
                    >
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                      Lahore Area
                    </label>
                    <select
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                      className="w-full rounded-xl border border-[#EAE4DC] px-3.5 py-2.5 text-xs sm:text-sm focus:border-[#2D6A4F] focus:outline-none bg-white"
                    >
                      {LAHORE_AREAS.map((a, i) => (
                        <option key={i} value={a.name}>{a.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                    Special Instructions / Pet Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about pet breed, age, temperament, feeding instructions, or if you need AC pet taxi pickup..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-[#EAE4DC] p-3 text-xs sm:text-sm focus:border-[#2D6A4F] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-[#1B4332] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Confirm Booking Request</span>
                  </button>

                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366]/10 px-5 py-3 text-xs sm:text-sm font-bold text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Book via WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Info: Coverage & Facility Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Facility Hub Card */}
            <div className="rounded-3xl border border-[#EAE4DC] bg-white p-6 sm:p-8 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F]">
                Main Lahore Facility
              </span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#1F2421]">
                DHA Phase 3 / 5 Pet Sanctuary
              </h3>
              <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">
                Our main climate-controlled resort features separate dog and cat wings, dual automated backup generators, soundproof suites, and medical-grade sanitization.
              </p>
              <div className="mt-4 pt-3 border-t border-[#F0EAE1] space-y-2 text-xs text-[#2D312E]">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#2D6A4F] shrink-0" />
                  <span>Sector Y, Phase 3, DHA, Lahore</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#2D6A4F] shrink-0" />
                  <span>Visiting Hours: 10:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>

            {/* Coverage Areas Card */}
            <div className="rounded-3xl border border-[#EAE4DC] bg-white p-6 sm:p-8 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F]">
                AC Pet Taxi & Home Visits
              </span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#1F2421]">
                Covered Lahore Neighborhoods
              </h3>
              <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">
                Doorstep pickup, dog walking, and home pet sitting are active daily across:
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-medium text-[#1F2421]">
                {LAHORE_AREAS.map((a, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2D6A4F]" />
                    <span>{a.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
