import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/petServicesData';
import { Star, ChevronDown, MessageSquare, Quote } from 'lucide-react';

export const TestimonialsFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Block */}
        <div>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-widest text-[#2D6A4F] uppercase">
              Pet Parent Stories
            </span>
            <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#1F2421] sm:text-3xl md:text-4xl">
              Loved by Lahore’s Dogs, Cats & Pet Parents
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4A5568]">
              Read verified reviews from pet owners in DHA, Gulberg, and Model Town who count on PawCare year-round.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-3xl border border-[#EAE4DC] bg-white p-6 shadow-2xs transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#F4A261]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-[#EAE4DC]" />
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#2D312E] italic">
                    "{t.review}"
                  </p>
                </div>

                <div className="mt-6 border-t border-[#F0EAE1] pt-4">
                  <div className="font-heading text-sm font-bold text-[#1F2421]">{t.name}</div>
                  <div className="text-xs text-[#2D6A4F] font-medium">{t.location}</div>
                  <div className="text-[11px] text-[#718096] mt-0.5">Pet: {t.pet} · {t.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lahore FAQ Accordion */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-[#2D6A4F] uppercase">
              Got Questions?
            </span>
            <h3 className="mt-1 font-heading text-2xl font-bold text-[#1F2421]">
              Frequently Asked Questions in Lahore
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#4A5568]">
              Everything you need to know about our climate safety, medical protocols, and bookings.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#EAE4DC] bg-white transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-[#FAF7F2] cursor-pointer"
                  >
                    <span className="font-heading text-sm sm:text-base font-semibold text-[#1F2421] pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#2D6A4F] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-[#4A5568] border-t border-[#F0EAE1]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
