import React from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background soft ambient accents */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#EAF2ED]/60 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 rounded-full bg-[#FBF0E4]/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7">
            {/* Location & Trust kicker */}
            <div className="inline-flex items-center gap-2 rounded-xl bg-[#EAF2ED] px-3.5 py-1.5 text-xs font-semibold text-[#2D6A4F] shadow-2xs">
              <MapPin className="h-3.5 w-3.5 text-[#2D6A4F]" />
              <span>Lahore's Premier Pet Care Sanctuary · DHA, Gulberg & Model Town</span>
            </div>

            <h1 className="mt-5 text-balance font-heading text-3xl font-extrabold tracking-tight text-[#1F2421] sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.12]">
              Top-Quality Pet Care & Grooming Services in{' '}
              <span className="text-[#2D6A4F] underline decoration-[#F4A261]/40 decoration-wavy underline-offset-8">
                Lahore 🐾
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4A5568] sm:text-lg">
              Professional grooming, climate-controlled daycare, luxury boarding, and in-home sitting tailored to keep your furry family happy, healthy, and protected from Lahore's extreme weather.
            </p>

            {/* Quick check benefits */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#2D312E]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2D6A4F] shrink-0" />
                <span>24/7 Dual Generator & Solar Power Backup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2D6A4F] shrink-0" />
                <span>Vet-Supervised & Police-Verified Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2D6A4F] shrink-0" />
                <span>Daily Video & WhatsApp Photo Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2D6A4F] shrink-0" />
                <span>Doorstep Pet Taxi & Home Sitting</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2D6A4F] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#2D6A4F]/20 transition-all hover:bg-[#1B4332] hover:shadow-lg hover:shadow-[#2D6A4F]/30 active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#D5DDD7] bg-white px-6 py-3.5 text-sm font-semibold text-[#1F2421] shadow-xs transition-all hover:border-[#2D6A4F] hover:bg-[#F2F7F4] hover:text-[#2D6A4F] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Social Proof Row */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#EAE4DC] pt-6">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#F4A261]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#1F2421]">4.9 / 5.0</span>
              </div>
              <span className="text-[#A0AEC0] hidden sm:inline">|</span>
              <div className="text-xs text-[#555E57] sm:text-sm">
                Trusted by <strong className="font-semibold text-[#1F2421]">650+ pet parents</strong> across Lahore
              </div>
              <span className="text-[#A0AEC0] hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5 text-xs text-[#2D6A4F] font-medium sm:text-sm">
                <ShieldCheck className="h-4 w-4" />
                <span>100% Medical Grade Disinfected</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual App Card Composition */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Pet Image Frame */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white shadow-xl shadow-[#1F2421]/5">
                <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#EAE4DC]">
                  <img
                    src="/src/assets/images/hero_pet_care_lahore_1790446255096.jpg"
                    alt="Happy golden retriever and cute cat enjoying professional pet services in Lahore at PawCare"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Bottom Card Summary Bar */}
                <div className="p-4 bg-white flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2421]">PawCare Flagship Sanctuary</h3>
                    <p className="text-xs text-[#6B7280]">Sector Y, Phase 3 DHA, Lahore</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-xl bg-[#F0F7F3] px-2.5 py-1 text-xs font-semibold text-[#2D6A4F]">
                    <Sparkles className="h-3.5 w-3.5 text-[#F4A261]" />
                    <span>Open Today 8am - 9pm</span>
                  </div>
                </div>
              </div>

              {/* Floating App Style Widget: Temperature & Power Safety (Addressing Lahore summer issue) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 rounded-2xl border border-white bg-white/95 p-3.5 shadow-lg backdrop-blur-md transition-transform hover:scale-105 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF2ED] text-[#2D6A4F]">
                    <span className="text-lg">❄️</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1F2421]">Climate Shield Room</div>
                    <div className="text-[11px] text-[#555E57]">Constant 23°C · Zero Power Cuts</div>
                  </div>
                </div>
              </div>

              {/* Floating App Style Widget: Verified Care Badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 rounded-2xl border border-white bg-white/95 p-3 shadow-lg backdrop-blur-md transition-transform hover:scale-105">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4A261]/20 text-[#E76F51]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1F2421]">Certified Vet Care</div>
                    <div className="text-[10px] text-[#6B7280]">UVAS Trained Nurses</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
