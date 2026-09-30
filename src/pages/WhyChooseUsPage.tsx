import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ThermometerSnowflake, 
  Zap, 
  HeartHandshake, 
  Smartphone, 
  Check, 
  X, 
  Star, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Car,
  Stethoscope
} from 'lucide-react';
import { TESTIMONIALS, LAHORE_AREAS } from '../data/petServicesData';

interface WhyChooseUsPageProps {
  onOpenBooking: () => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onOpenBooking }) => {
  const comparisonItems = [
    {
      feature: 'Power Supply & AC During Load Shedding',
      pawcare: '24/7 heavy ATS industrial generator + solar inverter backup; zero downtime',
      others: 'Dependent on erratic city grid or small UPS unable to run AC units',
    },
    {
      feature: 'Feline & Canine Separation',
      pawcare: 'Completely isolated acoustic and air-filtered wings for dogs and cats',
      others: 'Shared rooms or wire cages side-by-side causing extreme feline stress',
    },
    {
      feature: 'Owner Communication',
      pawcare: 'Twice-daily high-definition photos, video reels, and feeding logs on WhatsApp',
      others: 'Infrequent updates or updates only upon multiple phone reminders',
    },
    {
      feature: 'Medical & First Aid Training',
      pawcare: 'All staff certified in pet CPR, first aid, and veterinarian on call 24/7',
      others: 'Untrained local attendants without formal animal behavior knowledge',
    },
    {
      feature: 'Hygiene & Disinfection',
      pawcare: 'Hospital-grade enzymatic cleansers, sterilized tools, daily steam cleaning',
      others: 'Standard household bleach or irregular washing leading to kennel cough',
    },
    {
      feature: 'Pick-Up & Drop-Off',
      pawcare: 'Dedicated climate-controlled AC pet van with secured crash-tested crates',
      others: 'Open rickshaws, motorbikes, or non-air-conditioned trunks',
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-[#2D6A4F] uppercase">
            The PawCare Difference in Lahore
          </span>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2421] tracking-tight">
            Why Lahore Pet Parents Trust Us Year-Round
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4A5568]">
            We understand what matters most: your pet's physical safety, psychological comfort, and your absolute peace of mind while away.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="rounded-3xl border border-[#EAE4DC] bg-white p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2ED] text-[#2D6A4F] mb-6">
                <ThermometerSnowflake className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F]">Pillar 1</span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#1F2421]">
                Continuous 22°C Climate Guarantee
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Lahore summer temperatures routinely cross 44°C. Our entire facility is protected by heavy-duty inverter air conditioners backed by dedicated industrial generators with automatic switchgear. Your pet never faces heat exhaustion.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0EAE1] text-xs font-semibold text-[#2D6A4F] flex items-center gap-1.5">
              <Check className="h-4 w-4" /> Zero Load Shedding Downtime
            </div>
          </div>

          <div className="rounded-3xl border border-[#EAE4DC] bg-white p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2ED] text-[#2D6A4F] mb-6">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F]">Pillar 2</span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#1F2421]">
                Loving, Certified Animal Handlers
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                We believe kindness is non-negotiable. Every caregiver is trained in fear-free low-stress handling, body language evaluation, and certified in pet CPR. Plus, every staff member is police-cleared and background verified.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0EAE1] text-xs font-semibold text-[#2D6A4F] flex items-center gap-1.5">
              <Check className="h-4 w-4" /> Certified CPR & First Aid
            </div>
          </div>

          <div className="rounded-3xl border border-[#EAE4DC] bg-white p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2ED] text-[#2D6A4F] mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F]">Pillar 3</span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#1F2421]">
                Hospital-Grade Infection Shield
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                We follow veterinary-level bio-security. Grooming blades and shears undergo UV-C sterilization, and rooms are disinfected with safe multi-spectrum virucides to protect pets against kennel cough, distemper, and ticks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0EAE1] text-xs font-semibold text-[#2D6A4F] flex items-center gap-1.5">
              <Check className="h-4 w-4" /> UV & Enzymatic Sanitization
            </div>
          </div>

          <div className="rounded-3xl border border-[#EAE4DC] bg-white p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2ED] text-[#2D6A4F] mb-6">
                <Smartphone className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F]">Pillar 4</span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#1F2421]">
                Live WhatsApp Updates & Photos
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Never wonder how your pet is doing. You receive daily timestamped HD photos, play videos, feeding notes, and bedtime check-in messages directly to your WhatsApp twice every single day.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0EAE1] text-xs font-semibold text-[#2D6A4F] flex items-center gap-1.5">
              <Check className="h-4 w-4" /> Twice-Daily Photo & Video Reports
            </div>
          </div>

          <div className="rounded-3xl border border-[#EAE4DC] bg-white p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2ED] text-[#2D6A4F] mb-6">
                <Car className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F]">Pillar 5</span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#1F2421]">
                AC Pet Taxi Pick-Up & Drop-Off
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Avoid traffic and weather stress. Our dedicated climate-controlled vans pick up pets from DHA, Gulberg, Model Town, Johar Town, Bahria, and Cantt with secured harnesses and soft safety carriers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0EAE1] text-xs font-semibold text-[#2D6A4F] flex items-center gap-1.5">
              <Check className="h-4 w-4" /> Climate-Protected Doorstep Transfer
            </div>
          </div>

          <div className="rounded-3xl border border-[#EAE4DC] bg-white p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2ED] text-[#2D6A4F] mb-6">
                <Stethoscope className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F]">Pillar 6</span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#1F2421]">
                24/7 On-Call Veterinary Physician
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Health comes first. We maintain an on-call licensed veterinary doctor for immediate medical consultation, post-operative boarding support, medication schedules, and rapid emergency intervention.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0EAE1] text-xs font-semibold text-[#2D6A4F] flex items-center gap-1.5">
              <Check className="h-4 w-4" /> Full Veterinary Protocol Support
            </div>
          </div>

        </div>

        {/* Head-to-Head Comparison Table */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">Detailed Comparison</span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-[#1F2421]">
              PawCare Lahore vs Traditional Facilities
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4A5568]">
              See how our investments in safety and modern facilities set us apart from conventional kennels.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#EAE4DC] bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#EAE4DC] bg-[#FAF7F2]">
                  <th className="p-4 sm:p-5 font-heading font-bold text-[#1F2421] w-1/3">Care Standard</th>
                  <th className="p-4 sm:p-5 font-heading font-bold text-[#2D6A4F] bg-[#F2F7F4] w-1/3">
                    PawCare Pet Services Lahore
                  </th>
                  <th className="p-4 sm:p-5 font-heading font-bold text-[#718096] w-1/3">
                    Conventional Local Kennels
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EAE1]">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F2]/50 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-[#1F2421]">{item.feature}</td>
                    <td className="p-4 sm:p-5 text-[#2D6A4F] font-medium bg-[#F2F7F4]/50">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                        <span>{item.pawcare}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-[#718096]">
                      <div className="flex items-start gap-2">
                        <X className="h-4 w-4 text-[#E76F51] shrink-0 mt-0.5" />
                        <span>{item.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Testimonials Grid */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">Real Experiences</span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-[#1F2421]">
              Hear from Lahore Pet Parents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="rounded-3xl border border-[#EAE4DC] bg-white p-6 flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="flex text-[#F4A261] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A5568] italic leading-relaxed">
                    "{t.review}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#F0EAE1]">
                  <div className="font-heading text-sm font-bold text-[#1F2421]">{t.name}</div>
                  <div className="text-xs text-[#2D6A4F] font-medium">{t.location}</div>
                  <div className="text-[11px] text-[#718096] mt-0.5">Pet: {t.pet} · {t.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-20 rounded-3xl bg-[#2D6A4F] text-white p-8 sm:p-12 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Experience the Highest Standard of Pet Care in Lahore
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#E2DBD1] max-w-2xl mx-auto">
            Give your pets the safe, cooling, and loving sanctuary they deserve. Book an appointment today or message us on WhatsApp for advice.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="rounded-xl bg-white px-6 py-3 text-xs sm:text-sm font-bold text-[#2D6A4F] shadow-sm hover:bg-[#FAF7F2] cursor-pointer"
            >
              Book an Appointment
            </button>
            <Link
              to="/services"
              className="rounded-xl border border-white/40 px-5 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-white/10"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
