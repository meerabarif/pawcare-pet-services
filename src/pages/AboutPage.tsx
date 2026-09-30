import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PawPrint, 
  ShieldCheck, 
  Heart, 
  Award, 
  Zap, 
  ThermometerSnowflake, 
  Check, 
  Clock, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { LAHORE_AREAS } from '../data/petServicesData';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const teamMembers = [
    {
      name: 'Dr. Shahbaz Ahmed, DVM',
      role: 'Chief Veterinary Director',
      bio: 'Over 12 years of clinical small-animal veterinary experience in Lahore. Oversees all health checks, emergency protocols, and nutritional routines.',
      badge: 'Veterinary Medicine',
    },
    {
      name: 'Zainab Qureshi',
      role: 'Head Groomer & Fear-Free Specialist',
      bio: 'Certified master pet stylist specializing in low-stress handling, breed-specific scissoring, and coat restoration for heat-sensitive dog and cat breeds.',
      badge: 'Fear-Free Certified',
    },
    {
      name: 'Bilal Hassan',
      role: 'Facility & Boarding Operations Manager',
      bio: 'Supervises 24/7 climate controls, backup generators, sanitation cycles, and daily photo/video updates for all resident boarding pets.',
      badge: 'Facility Ops',
    },
    {
      name: 'Maria Khan',
      role: 'Lead Animal Behaviorist & Play Coordinator',
      bio: 'Designs temperament-based playgroups and sensory agility circuits to provide mental enrichment and safe socialization during daycare.',
      badge: 'Behavior & Training',
    },
  ];

  const facilityFeatures = [
    {
      title: 'Dedicated Cat & Dog Wings',
      desc: 'Physical acoustic and scent barriers ensure sensitive feline guests never feel threatened or stressed by barking dogs.',
      icon: PawPrint,
    },
    {
      title: 'Dual Heavy ATS Generators & Solar Power',
      desc: 'Zero-second automatic changeover system guaranteeing uninterrupted 22°C inverter air conditioning during Lahore peak load shedding.',
      icon: Zap,
    },
    {
      title: 'Hospital-Grade Enzymatic Sanitation',
      desc: 'Disinfection with pet-safe veterinary virucides and steam sterilization between each guest to prevent kennel cough and parvovirus.',
      icon: ShieldCheck,
    },
    {
      title: 'Reverse Osmosis Filtered Water',
      desc: 'Continuous fresh filtered hydration bowls to prevent urinary tract infections and digestive distress common from unfiltered tap water.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-[#2D6A4F] uppercase">
            Our Story & Mission in Lahore
          </span>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2421] tracking-tight">
            Built by Pet Parents, Driven by Clinical Compassion
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4A5568]">
            We started PawCare in Lahore to solve a real problem: finding professional, climate-resilient, and genuinely loving care for our furry companions without stress or uncertainty.
          </p>
        </div>

        {/* Story Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              Why PawCare Was Founded
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1F2421]">
              Redefining Pet Care Standards in Pakistan
            </h2>
            <p className="text-sm leading-relaxed text-[#4A5568]">
              In Lahore, high summer heat (often topping 45°C), erratic electricity load shedding, and urban dust present serious health risks for dogs and cats. Many local facilities lacked medical protocols, climate guarantees, or transparent communication with owners.
            </p>
            <p className="text-sm leading-relaxed text-[#4A5568]">
              PawCare was established in DHA Phase 5 to deliver world-standard pet care right here in Lahore. Every suite is temperature-monitored, every tool is sterilized, and every caregiver is certified in first aid and low-stress handling.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#EAE4DC] bg-white p-4">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2D6A4F]">
                  2,500+
                </div>
                <div className="text-xs text-[#718096] mt-1">Lahore Pets Cared For</div>
              </div>
              <div className="rounded-2xl border border-[#EAE4DC] bg-white p-4">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2D6A4F]">
                  24/7
                </div>
                <div className="text-xs text-[#718096] mt-1">Power & Vet Supervision</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/assets/images/hero_pet_care_lahore_1790446255096.jpg"
                alt="PawCare team with happy pets in Lahore"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-xs p-4 border border-[#EAE4DC]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F2421]">
                  <ShieldCheck className="h-4 w-4 text-[#2D6A4F]" />
                  <span>Licensed Veterinary Oversight & Cleanliness Guarantee</span>
                </div>
                <p className="text-[11px] text-[#718096] mt-1">
                  Centrally located in DHA Phase 3 / 5 with dedicated AC Pet Taxi pickup spanning Cantt, Gulberg, Model Town & Bahria Town.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Standards Grid */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">Engineered For Safety</span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-[#1F2421]">
              Our Purpose-Built Lahore Facility
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4A5568]">
              We built our infrastructure from scratch to withstand local environmental challenges and keep pets happy and healthy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="rounded-2xl border border-[#EAE4DC] bg-white p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2F7F4] text-[#2D6A4F] mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[#1F2421]">{feat.title}</h3>
                    <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Meet The Team */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">Certified Caregivers</span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-[#1F2421]">
              Meet Our Passionate Lahore Team
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4A5568]">
              Every member of our staff is background-verified, medically trained, and committed to gentle handling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="rounded-2xl border border-[#EAE4DC] bg-white p-6 flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="text-[11px] font-semibold text-[#2D6A4F] uppercase tracking-wider">
                    {member.badge}
                  </div>
                  <h3 className="mt-1 font-heading text-base font-bold text-[#1F2421]">{member.name}</h3>
                  <div className="text-xs font-medium text-[#718096] mb-3">{member.role}</div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lahore Coverage Zone Summary */}
        <div className="mt-20 rounded-3xl bg-[#FAF7F2] border border-[#EAE4DC] p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              Local Reach & Accessibility
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1F2421]">
              Serving Pet Families Across Lahore
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              We offer doorstep pickup and drop-off in air-conditioned pet vans, as well as in-home visits and dog walking across all prime Lahore sectors.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-2">
              {LAHORE_AREAS.map((area, aIdx) => (
                <div key={aIdx} className="rounded-xl border border-[#D5DDD7] bg-white px-3.5 py-1.5 text-xs text-[#1F2421] font-medium shadow-2xs">
                  {area.name}
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap justify-center items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="rounded-xl bg-[#2D6A4F] px-6 py-3 text-xs font-bold text-white shadow-xs hover:bg-[#1B4332] cursor-pointer"
              >
                Schedule an In-Person Tour
              </button>
              <Link
                to="/services"
                className="rounded-xl border border-[#D5DDD7] bg-white px-5 py-3 text-xs font-bold text-[#1F2421] hover:bg-[#F2F7F4]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
