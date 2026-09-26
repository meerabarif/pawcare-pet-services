import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialPetType?: string;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialPetType = '',
  initialNotes = '',
}) => {
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

  // Update form if preloaded from estimator or services
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialService }));
    }
    if (initialPetType) {
      setFormData(prev => ({ 
        ...prev, 
        petType: initialPetType.toLowerCase().includes('cat') ? 'Cat' : 'Dog' 
      }));
    }
    if (initialNotes) {
      setFormData(prev => ({ 
        ...prev, 
        message: prev.message ? `${prev.message}\nNote: ${initialNotes}` : `Estimate details: ${initialNotes}` 
      }));
    }
  }, [initialService, initialPetType, initialNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hi PawCare Lahore! I would like to book an appointment:
- Name: ${formData.name || 'Pet Parent'}
- Pet: ${formData.petType}
- Service: ${formData.serviceNeeded}
- Preferred Date: ${formData.preferredDate || 'Earliest available'}
- Preferred Slot: ${formData.preferredTime}
- Area: ${formData.neighborhood}
- Message/Notes: ${formData.message || 'No special instructions'}`;
    return `https://wa.me/923007292273?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-[#EAE4DC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-[#2D6A4F] uppercase">
            Get In Touch · Lahore
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#1F2421] sm:text-3xl md:text-4xl">
            Book an Appointment or Inquire Today
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4A5568]">
            Schedule your pet’s visit, reserve boarding dates, or book in-home pet sitting anywhere in Lahore. We respond within 15 minutes during operating hours.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#EAE4DC] bg-[#FAF7F2] p-6 sm:p-10 shadow-sm">
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF2ED] text-[#2D6A4F] mb-4">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#1F2421]">
                    Appointment Request Received!
                  </h3>
                  <p className="mt-2 text-sm text-[#4A5568] max-w-md mx-auto">
                    Thank you, <strong className="text-[#1F2421]">{formData.name}</strong>. Our Lahore care coordinator is reviewing your request for <strong className="text-[#1F2421]">{formData.petType} ({formData.serviceNeeded})</strong>.
                  </p>
                  <p className="mt-2 text-xs text-[#718096]">
                    We will call or WhatsApp you on <strong>{formData.phone}</strong> shortly to confirm your booking slot.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#20ba5a] transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center rounded-xl border border-[#D5DDD7] bg-white px-5 py-3 text-xs font-bold text-[#1F2421] hover:bg-[#FAF7F2]"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1F2421] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Fatima Ali"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#D5DDD7] bg-white px-3.5 py-2.5 text-xs text-[#1F2421] placeholder:text-[#A0AEC0] focus:border-[#2D6A4F] focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1F2421] mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-[#D5DDD7] bg-white px-3.5 py-2.5 text-xs text-[#1F2421] placeholder:text-[#A0AEC0] focus:border-[#2D6A4F] focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1F2421] mb-1.5">
                        Pet Type *
                      </label>
                      <select
                        value={formData.petType}
                        onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                        className="w-full rounded-xl border border-[#D5DDD7] bg-white px-3.5 py-2.5 text-xs text-[#1F2421] focus:border-[#2D6A4F] focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]"
                      >
                        <option value="Dog">Dog (Any Breed)</option>
                        <option value="Cat">Cat (Persian, Domestic, etc.)</option>
                        <option value="Puppy/Kitten">Puppy / Kitten</option>
                        <option value="Multiple Pets">Multiple Pets</option>
                        <option value="Other">Other Pet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1F2421] mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full rounded-xl border border-[#D5DDD7] bg-white px-3.5 py-2.5 text-xs text-[#1F2421] focus:border-[#2D6A4F] focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]"
                      >
                        <option value="Pet Grooming & Spa">Pet Grooming & Spa</option>
                        <option value="Overnight Pet Boarding">Overnight Pet Boarding</option>
                        <option value="Daycare & Social Play">Daycare & Social Play</option>
                        <option value="Dog Walking & Exercise">Dog Walking & Exercise</option>
                        <option value="In-Home Pet Sitting">In-Home Pet Sitting</option>
                        <option value="Multiple / Custom Package">Multiple / Custom Package</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1F2421] mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full rounded-xl border border-[#D5DDD7] bg-white px-3.5 py-2.5 text-xs text-[#1F2421] focus:border-[#2D6A4F] focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1F2421] mb-1.5">
                        Your Neighborhood in Lahore
                      </label>
                      <select
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        className="w-full rounded-xl border border-[#D5DDD7] bg-white px-3.5 py-2.5 text-xs text-[#1F2421] focus:border-[#2D6A4F] focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]"
                      >
                        <option value="DHA Lahore">DHA Lahore (All Phases)</option>
                        <option value="Gulberg">Gulberg (I, II, III)</option>
                        <option value="Model Town">Model Town</option>
                        <option value="Bahria Town">Bahria Town Lahore</option>
                        <option value="Johar Town">Johar Town & PCSIR</option>
                        <option value="Cantt / Askari">Lahore Cantt & Askari</option>
                        <option value="Faisal Town">Faisal Town / Garden Town</option>
                        <option value="Other Lahore Area">Other Lahore Location</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F2421] mb-1.5">
                      Special Requests / Pet Health Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Needs anti-tick medicated bath, requires AC room, first-time groom, diet preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-[#D5DDD7] bg-white px-3.5 py-2.5 text-xs text-[#1F2421] placeholder:text-[#A0AEC0] focus:border-[#2D6A4F] focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] py-3 px-6 text-xs font-bold text-white shadow-sm hover:bg-[#1B4332] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit Appointment Request</span>
                    </button>

                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366]/10 px-5 py-3 text-xs font-bold text-[#1b7a3d] hover:bg-[#25D366] hover:text-white transition-all whitespace-nowrap"
                    >
                      <MessageCircle className="h-4 w-4 text-[#25D366]" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Location, Operating Hours & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Hub Card */}
            <div className="rounded-3xl border border-[#EAE4DC] bg-[#FAF7F2] p-6 shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2ED] text-[#2D6A4F]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-[#1F2421]">Lahore Centers</h3>
                  <p className="text-xs text-[#6B7280]">Convenient drop-off & pickup</p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="border-b border-[#E2DBD1] pb-3">
                  <span className="font-bold text-[#1F2421] block">DHA Flagship Sanctuary:</span>
                  <p className="text-[#4A5568] mt-0.5">
                    Sector Y, Phase 3, DHA (Near Sheba Park), Lahore, Pakistan
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#1F2421] block">Gulberg Care & Grooming Lounge:</span>
                  <p className="text-[#4A5568] mt-0.5">
                    Off M.M. Alam Road, Gulberg III, Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Timings & WhatsApp Card */}
            <div className="rounded-3xl border border-[#EAE4DC] bg-[#FAF7F2] p-6 shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FBF0E4] text-[#F4A261]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-[#1F2421]">Operating Hours</h3>
                  <p className="text-xs text-[#6B7280]">Open 7 Days a Week</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#4A5568]">
                <div className="flex justify-between">
                  <span>Monday - Sunday:</span>
                  <span className="font-bold text-[#1F2421]">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Overnight Boarding Check-in:</span>
                  <span className="font-bold text-[#1F2421]">24/7 (With Notice)</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency On-Call Vet:</span>
                  <span className="font-bold text-[#2D6A4F]">Available 24/7</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E2DBD1] flex flex-col gap-2">
                <a
                  href="tel:+923007292273"
                  className="flex items-center gap-2 text-xs font-semibold text-[#1F2421] hover:text-[#2D6A4F]"
                >
                  <Phone className="h-4 w-4 text-[#2D6A4F]" />
                  <span>Call Us: +92 300 7292273</span>
                </a>
                <a
                  href="https://wa.me/923007292273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-[#1F2421] hover:text-[#2D6A4F]"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>Direct WhatsApp: +92 300 7292273</span>
                </a>
              </div>
            </div>

            {/* Emergency Vet Banner */}
            <div className="rounded-2xl bg-[#EAF2ED] border border-[#2D6A4F]/20 p-4">
              <h4 className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">
                Lahore Pet Emergency Support
              </h4>
              <p className="mt-1 text-xs text-[#2D312E] leading-relaxed">
                Affiliated with accredited veterinary hospital facilities near DHA & Gulberg for immediate medical attention whenever required.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
