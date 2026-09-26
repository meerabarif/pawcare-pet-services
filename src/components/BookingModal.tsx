import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Send, Calendar, User, Phone, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultPetType?: string;
  defaultNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Pet Grooming & Spa',
  defaultPetType = 'Dog',
  defaultNotes = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    petType: defaultPetType,
    service: defaultService,
    date: '',
    area: 'DHA Lahore',
    notes: defaultNotes,
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) setFormData(p => ({ ...p, service: defaultService }));
    if (defaultPetType) setFormData(p => ({ ...p, petType: defaultPetType }));
    if (defaultNotes) setFormData(p => ({ ...p, notes: defaultNotes }));
  }, [defaultService, defaultPetType, defaultNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hi PawCare Lahore! I want to schedule a booking:
- Name: ${formData.name || 'Pet Parent'}
- Phone: ${formData.phone}
- Pet: ${formData.petType}
- Service: ${formData.service}
- Date: ${formData.date || 'Earliest slot'}
- Area: ${formData.area}
- Notes: ${formData.notes || 'None'}`;
    return `https://wa.me/923007292273?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#FAF7F2] p-6 sm:p-8 shadow-2xl border border-[#EAE4DC] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-[#718096] hover:bg-[#EAE4DC] hover:text-[#1F2421] transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF2ED] text-[#2D6A4F] mb-3">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#1F2421]">
              Booking Request Received!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#4A5568]">
              Thank you, <strong>{formData.name}</strong>. We've logged your request for <strong>{formData.service}</strong>. Our care team will call or message you on <strong>{formData.phone}</strong> shortly.
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-xs font-bold text-white shadow-xs hover:bg-[#20ba5a]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="rounded-xl border border-[#D5DDD7] bg-white py-2.5 text-xs font-bold text-[#1F2421] hover:bg-[#F2F7F4]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                Quick Reservation
              </span>
              <h3 className="font-heading text-xl font-bold text-[#1F2421] mt-0.5">
                Book Pet Care in Lahore
              </h3>
              <p className="text-xs text-[#6B7280]">
                Choose your service and slot. No immediate online payment required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-[#A0AEC0]" />
                    <input
                      type="text"
                      required
                      placeholder="Ahmed Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#D5DDD7] bg-white pl-9 pr-3 py-2 text-xs text-[#1F2421] focus:border-[#2D6A4F] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-[#A0AEC0]" />
                    <input
                      type="tel"
                      required
                      placeholder="0300 7654321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-[#D5DDD7] bg-white pl-9 pr-3 py-2 text-xs text-[#1F2421] focus:border-[#2D6A4F] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                    Pet Type
                  </label>
                  <select
                    value={formData.petType}
                    onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                    className="w-full rounded-xl border border-[#D5DDD7] bg-white px-3 py-2 text-xs text-[#1F2421] focus:border-[#2D6A4F] focus:outline-none"
                  >
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Small Dog">Small Dog (&lt;10kg)</option>
                    <option value="Medium Dog">Medium Dog (10-25kg)</option>
                    <option value="Large Dog">Large Dog (&gt;25kg)</option>
                    <option value="Puppy/Kitten">Puppy / Kitten</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-xl border border-[#D5DDD7] bg-white px-3 py-2 text-xs text-[#1F2421] focus:border-[#2D6A4F] focus:outline-none"
                  >
                    <option value="Pet Grooming & Spa">Pet Grooming & Spa</option>
                    <option value="Overnight Pet Boarding">Overnight Pet Boarding</option>
                    <option value="Daycare & Social Play">Daycare & Social Play</option>
                    <option value="Dog Walking & Outdoor Exercise">Dog Walking & Exercise</option>
                    <option value="In-Home Pet Sitting">In-Home Pet Sitting</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-[#A0AEC0]" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full rounded-xl border border-[#D5DDD7] bg-white pl-9 pr-3 py-2 text-xs text-[#1F2421] focus:border-[#2D6A4F] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                    Lahore Area
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-[#A0AEC0]" />
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full rounded-xl border border-[#D5DDD7] bg-white pl-9 pr-3 py-2 text-xs text-[#1F2421] focus:border-[#2D6A4F] focus:outline-none"
                    >
                      <option value="DHA Lahore">DHA Lahore</option>
                      <option value="Gulberg">Gulberg</option>
                      <option value="Model Town">Model Town</option>
                      <option value="Bahria Town">Bahria Town</option>
                      <option value="Johar Town">Johar Town</option>
                      <option value="Cantt / Askari">Cantt / Askari</option>
                      <option value="Other Area">Other Lahore Area</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Breed, special behavior or dietary instructions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl border border-[#D5DDD7] bg-white px-3 py-2 text-xs text-[#1F2421] focus:border-[#2D6A4F] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#1B4332] transition-colors cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Submit Request</span>
                </button>
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-[#25D366] bg-[#25D366]/10 px-3.5 py-2.5 text-xs font-bold text-[#1b7a3d] hover:bg-[#25D366] hover:text-white transition-all whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
