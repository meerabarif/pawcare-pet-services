import React, { useState } from 'react';
import { Calculator, Check, ArrowRight } from 'lucide-react';

interface CostEstimatorProps {
  onBookWithEstimate: (details: { service: string; petType: string; estimatedTotal: number; notes: string }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onBookWithEstimate }) => {
  const [petType, setPetType] = useState<'cat' | 'dog-small' | 'dog-medium' | 'dog-large'>('dog-medium');
  const [service, setService] = useState<'grooming' | 'boarding' | 'daycare' | 'walking' | 'sitting'>('grooming');
  const [quantity, setQuantity] = useState<number>(1);
  const [includeTaxi, setIncludeTaxi] = useState<boolean>(false);
  const [includeAntiTick, setIncludeAntiTick] = useState<boolean>(false);

  // Pricing rules in PKR
  const baseRates = {
    grooming: { cat: 2500, 'dog-small': 2800, 'dog-medium': 3500, 'dog-large': 4200 },
    boarding: { cat: 2500, 'dog-small': 3000, 'dog-medium': 3500, 'dog-large': 4200 },
    daycare: { cat: 1500, 'dog-small': 1800, 'dog-medium': 2000, 'dog-large': 2500 },
    walking: { cat: 1000, 'dog-small': 1000, 'dog-medium': 1200, 'dog-large': 1500 },
    sitting: { cat: 1600, 'dog-small': 1800, 'dog-medium': 2000, 'dog-large': 2200 },
  };

  const currentRate = baseRates[service][petType];
  let subtotal = currentRate * quantity;
  if (includeTaxi) subtotal += 800; // Lahore AC Pet Taxi roundtrip
  if (includeAntiTick) subtotal += 600; // Medicated tick wash / repellent

  const petLabelMap = {
    cat: 'Cat / Kitten',
    'dog-small': 'Small Dog (<10kg)',
    'dog-medium': 'Medium Dog (10-25kg)',
    'dog-large': 'Large Dog (>25kg)',
  };

  const serviceLabelMap = {
    grooming: 'Spa Grooming Session',
    boarding: 'Overnight Boarding (Nights)',
    daycare: 'Daycare Session (Days)',
    walking: 'Dog Walking (Walks)',
    sitting: 'In-Home Visit (Visits)',
  };

  const handleProceed = () => {
    const notes = `${quantity}x ${serviceLabelMap[service]} for ${petLabelMap[petType]}${includeTaxi ? ' + Lahore Pet Taxi' : ''}${includeAntiTick ? ' + Anti-Tick Wash' : ''}`;
    onBookWithEstimate({
      service: serviceLabelMap[service],
      petType: petLabelMap[petType],
      estimatedTotal: subtotal,
      notes,
    });
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-white/60 border-t border-[#EAE4DC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-xl bg-[#EAF2ED] px-3.5 py-1 text-xs font-bold text-[#2D6A4F]">
            <Calculator className="h-3.5 w-3.5" />
            <span>Instant Lahore Pricing Calculator</span>
          </div>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#1F2421] sm:text-3xl md:text-4xl">
            Estimate Your Pet Care Investment
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4A5568]">
            Transparent rates with zero hidden charges. Configure your pet type and requirements for an instant Pakistani Rupee (PKR) estimate.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-[#EAE4DC] bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Pet Type Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#718096] mb-2">
                  1. Select Pet Type & Size
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    { id: 'cat', label: 'Cat / Kitten' },
                    { id: 'dog-small', label: 'Small Dog' },
                    { id: 'dog-medium', label: 'Medium Dog' },
                    { id: 'dog-large', label: 'Large Dog' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPetType(p.id as any)}
                      className={`py-2.5 px-2 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                        petType === p.id
                          ? 'border-[#2D6A4F] bg-[#EAF2ED] text-[#2D6A4F] shadow-xs'
                          : 'border-[#EAE4DC] bg-[#FAF7F2] text-[#4A5568] hover:border-[#CBD5E1]'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#718096] mb-2">
                  2. Select Desired Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'grooming', label: 'Spa Grooming' },
                    { id: 'boarding', label: 'Overnight Stay' },
                    { id: 'daycare', label: 'Daycare' },
                    { id: 'walking', label: 'Dog Walking' },
                    { id: 'sitting', label: 'In-Home Visit' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setService(s.id as any)}
                      className={`py-2.5 px-3 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                        service === s.id
                          ? 'border-[#2D6A4F] bg-[#EAF2ED] text-[#2D6A4F] shadow-xs'
                          : 'border-[#EAE4DC] bg-[#FAF7F2] text-[#4A5568] hover:border-[#CBD5E1]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity / Duration slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#718096] mb-2">
                  <span>3. Number of {service === 'boarding' ? 'Nights' : service === 'grooming' ? 'Sessions' : 'Days/Visits'}</span>
                  <span className="font-heading text-sm font-bold text-[#1F2421] tabular-nums">
                    {quantity} {quantity === 1 ? 'unit' : 'units'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="14"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#EAE4DC] rounded-lg appearance-none cursor-pointer accent-[#2D6A4F]"
                />
                <div className="flex justify-between text-[11px] text-[#A0AEC0] mt-1">
                  <span>1</span>
                  <span>7</span>
                  <span>14</span>
                </div>
              </div>

              {/* Add-ons for Lahore context */}
              <div className="space-y-2 pt-2 border-t border-[#F0EAE1]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#718096] mb-1">
                  4. Lahore Climate & Convenience Add-ons
                </label>
                
                <label className="flex items-center gap-3 p-2.5 rounded-xl border border-[#EAE4DC] hover:bg-[#FAF7F2] cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={includeTaxi}
                    onChange={(e) => setIncludeTaxi(e.target.checked)}
                    className="h-4 w-4 rounded text-[#2D6A4F] focus:ring-[#2D6A4F]"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-[#1F2421]">Lahore AC Pet Taxi (Pick & Drop)</span>
                    <span className="text-[#6B7280] block text-[11px]">Climate-protected van transfer from your doorstep</span>
                  </div>
                  <span className="font-bold text-[#2D6A4F] tabular-nums">+PKR 800</span>
                </label>

                <label className="flex items-center gap-3 p-2.5 rounded-xl border border-[#EAE4DC] hover:bg-[#FAF7F2] cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={includeAntiTick}
                    onChange={(e) => setIncludeAntiTick(e.target.checked)}
                    className="h-4 w-4 rounded text-[#2D6A4F] focus:ring-[#2D6A4F]"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-[#1F2421]">Monsoon Anti-Tick & Flea Medicated Rinse</span>
                    <span className="text-[#6B7280] block text-[11px]">Essential botanical protection against local humidity pests</span>
                  </div>
                  <span className="font-bold text-[#2D6A4F] tabular-nums">+PKR 600</span>
                </label>
              </div>

            </div>

            {/* Total Summary Card */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] p-6">
              <div>
                <h3 className="font-heading text-base font-bold text-[#1F2421] border-b border-[#E2DBD1] pb-3">
                  Summary Quote
                </h3>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between text-[#4A5568]">
                    <span>Pet:</span>
                    <span className="font-semibold text-[#1F2421]">{petLabelMap[petType]}</span>
                  </div>
                  <div className="flex justify-between text-[#4A5568]">
                    <span>Base Service:</span>
                    <span className="font-semibold text-[#1F2421]">{serviceLabelMap[service]}</span>
                  </div>
                  <div className="flex justify-between text-[#4A5568]">
                    <span>Rate:</span>
                    <span className="font-semibold text-[#1F2421] tabular-nums">PKR {currentRate.toLocaleString()} × {quantity}</span>
                  </div>
                  {includeTaxi && (
                    <div className="flex justify-between text-[#2D6A4F]">
                      <span>AC Pet Taxi:</span>
                      <span className="font-semibold tabular-nums">+PKR 800</span>
                    </div>
                  )}
                  {includeAntiTick && (
                    <div className="flex justify-between text-[#2D6A4F]">
                      <span>Anti-Tick Rinse:</span>
                      <span className="font-semibold tabular-nums">+PKR 600</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2DBD1]">
                <div className="text-[11px] uppercase tracking-wider text-[#718096]">
                  Estimated Total (All Inclusive)
                </div>
                <div className="font-heading text-3xl font-extrabold text-[#2D6A4F] tabular-nums mt-1">
                  PKR {subtotal.toLocaleString()}
                </div>
                <p className="text-[11px] text-[#718096] mt-1">
                  Includes 24/7 power guarantee, certified handler & daily WhatsApp photos.
                </p>

                <button
                  type="button"
                  onClick={handleProceed}
                  className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] py-3 text-xs font-bold text-white shadow-sm hover:bg-[#1B4332] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Book With This Estimate</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
