import React from 'react';
import { Heart, ShieldAlert, Award, Clock, Users, Sparkles, Building2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white/70 border-y border-[#EAE4DC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-[#2D6A4F] uppercase">
            About PawCare Pet Services
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#1F2421] sm:text-3xl md:text-4xl text-balance">
            Passionate Pet Care Tailored for Lahore’s Unique Climate & Lifestyle
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4A5568]">
            Founded by dedicated veterinary professionals and lifelong pet parents right here in Lahore, PawCare was established to set a gold standard in animal welfare, hygienic grooming, and dependable boarding.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl border border-[#EAE4DC] bg-[#FAF7F2] p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold text-[#1F2421]">
                Why We Built PawCare in Lahore
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5568]">
                Every pet parent in Lahore knows the struggle: extreme summer heatwaves touching 45°C, sudden urban power load shedding, dusty coats from monsoon smog, and untrained boarding handlers who cage pets in cramped quarters.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5568]">
                We designed PawCare as a complete sanctuary. Our purpose-built centers in DHA Phase 3 and Gulberg feature commercial inverter climate controls backed by heavy solar-diesel hybrid systems, sanitized indoor sensory play zones, and strict no-caging daytime philosophy.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#E2DBD1] pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF2ED] text-[#2D6A4F]">
                    <ShieldAlert className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1F2421]">Zero-Stress Handling</h4>
                    <p className="text-[12px] text-[#6B7280]">Fear-free grooming certified</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FBF0E4] text-[#F4A261]">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1F2421]">Individualized Diets</h4>
                    <p className="text-[12px] text-[#6B7280]">Freshly prepped to owner specs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick trust callout */}
            <div className="flex items-center gap-4 rounded-2xl bg-[#2D6A4F] p-4 text-white">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <Award className="h-6 w-6 text-[#FAF7F2]" />
              </div>
              <div>
                <h4 className="text-sm font-bold">UVAS Allied Veterinary Nurses on Duty</h4>
                <p className="text-xs text-white/80">
                  Daily health checkups, coat evaluations, and quick triage for preventative care.
                </p>
              </div>
            </div>
          </div>

          {/* Right Metrics & Facility Showcase */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="rounded-3xl border border-[#EAE4DC] bg-white p-6 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2ED] text-[#2D6A4F]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="mt-4 font-heading text-3xl font-extrabold text-[#1F2421] tabular-nums">
                3,500+
              </div>
              <div className="mt-1 text-sm font-semibold text-[#1F2421]">Spa & Grooming Sessions</div>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Medicated anti-tick, de-matting and styling grooms done safely for dogs and cats across Lahore.
              </p>
            </div>

            <div className="rounded-3xl border border-[#EAE4DC] bg-white p-6 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FBF0E4] text-[#F4A261]">
                <Clock className="h-5 w-5" />
              </div>
              <div className="mt-4 font-heading text-3xl font-extrabold text-[#1F2421] tabular-nums">
                24/7
              </div>
              <div className="mt-1 text-sm font-semibold text-[#1F2421]">Uninterrupted Power & AC</div>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Dual heavy generator failover ensuring cool 23°C comfort even during peak summer power shortages.
              </p>
            </div>

            <div className="rounded-3xl border border-[#EAE4DC] bg-white p-6 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2ED] text-[#2D6A4F]">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="mt-4 font-heading text-3xl font-extrabold text-[#1F2421] tabular-nums">
                2 Hubs
              </div>
              <div className="mt-1 text-sm font-semibold text-[#1F2421]">DHA & Gulberg Hubs</div>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Modern sanitary facilities with mobile vans operating across all major Lahore housing societies.
              </p>
            </div>

            <div className="rounded-3xl border border-[#EAE4DC] bg-white p-6 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FBF0E4] text-[#F4A261]">
                <Users className="h-5 w-5" />
              </div>
              <div className="mt-4 font-heading text-3xl font-extrabold text-[#1F2421] tabular-nums">
                100%
              </div>
              <div className="mt-1 text-sm font-semibold text-[#1F2421]">Police & Vet Verified Staff</div>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Trained in canine CPR, feline behavioral cues, safe leash handling, and hygienic sanitation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
