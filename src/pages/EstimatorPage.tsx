import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Car, 
  Sparkles, 
  PawPrint,
  Clock,
  Phone,
  MessageCircle
} from 'lucide-react';

interface EstimatorPageProps {
  onOpenBookingWithEstimate: (details: {
    service: string;
    petType: string;
    estimatedTotal: number;
    notes: string;
  }) => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({ onOpenBookingWithEstimate }) => {
  const [petType, setPetType] = useState<'cat' | 'dog-small' | 'dog-medium' | 'dog-large'>('dog-medium');
  const [service, setService] = useState<'grooming' | 'boarding' | 'daycare' | 'walking' | 'sitting'>('grooming');
  const [quantity, setQuantity] = useState<number>(1);
  const [includeTaxi, setIncludeTaxi] = useState<boolean>(false);
  const [includeAntiTick, setIncludeAntiTick] = useState<boolean>(false);

  // Pricing matrix in PKR
  const baseRates = {
    grooming: { cat: 2500, 'dog-small': 2800, 'dog-medium': 3500, 'dog-large': 4200 },
    boarding: { cat: 2500, 'dog-small': 3000, 'dog-medium': 3500, 'dog-large': 4200 },
    daycare: { cat: 1500, 'dog-small': 1800, 'dog-medium': 2000, 'dog-large': 2500 },
    walking: { cat: 1000, 'dog-small': 1000, 'dog-medium': 1200, 'dog-large': 1500 },
    sitting: { cat: 1600, 'dog-small': 1800, 'dog-medium': 2000, 'dog-large': 2200 },
  };

  const currentRate = baseRates[service][petType];
  let subtotal = currentRate * quantity;
  if (includeTaxi) subtotal += 800;
  if (includeAntiTick) subtotal += 600;

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
    onOpenBookingWithEstimate({
      service: serviceLabelMap[service],
      petType: petLabelMap[petType],
      estimatedTotal: subtotal,
      notes,
    });
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-[#2D6A4F] uppercase">
            Transparent Pet Care Pricing
          </span>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2421] tracking-tight">
            Lahore Pet Services Cost Estimator
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4A5568]">
            Calculate your estimated cost in Pakistani Rupees (PKR) instantly. Choose your pet type, required service, and optional climate-safety add-ons with zero hidden fees.
          </p>
        </div>

        {/* Interactive Estimator Tool */}
        <div className="mt-12 rounded-3xl bg-white border border-[#EAE4DC] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Pet Type Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#718096] mb-2.5">
                  1. Select Pet Type & Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(Object.keys(petLabelMap) as Array<keyof typeof petLabelMap>).map((typeKey) => (
                    <button
                      key={typeKey}
                      type="button"
                      onClick={() => setPetType(typeKey)}
                      className={`flex flex-col items-center justify-center rounded-2xl p-3 text-center transition-all cursor-pointer ${
                        petType === typeKey
                          ? 'border-2 border-[#2D6A4F] bg-[#F2F7F4] text-[#1F2421] shadow-2xs'
                          : 'border border-[#EAE4DC] bg-white text-[#4A5568] hover:border-[#2D6A4F]/40'
                      }`}
                    >
                      <PawPrint className={`h-5 w-5 mb-1.5 ${petType === typeKey ? 'text-[#2D6A4F]' : 'text-[#718096]'}`} />
                      <span className="text-xs font-bold leading-tight">{petLabelMap[typeKey]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#718096] mb-2.5">
                  2. Select Required Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(Object.keys(serviceLabelMap) as Array<keyof typeof serviceLabelMap>).map((srvKey) => (
                    <button
                      key={srvKey}
                      type="button"
                      onClick={() => setService(srvKey)}
                      className={`flex items-center justify-between rounded-xl p-3 text-left transition-all cursor-pointer ${
                        service === srvKey
                          ? 'border-2 border-[#2D6A4F] bg-[#F2F7F4] text-[#1F2421]'
                          : 'border border-[#EAE4DC] bg-white text-[#4A5568] hover:border-[#2D6A4F]/40'
                      }`}
                    >
                      <span className="text-xs font-bold">{serviceLabelMap[srvKey]}</span>
                      <span className="text-xs font-medium text-[#2D6A4F] tabular-nums">
                        PKR {baseRates[srvKey][petType].toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity / Duration Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#718096]">
                    3. Units / Quantity ({service === 'boarding' ? 'Nights' : service === 'daycare' ? 'Days' : service === 'walking' ? 'Walks' : 'Sessions'})
                  </label>
                  <span className="font-heading text-sm font-extrabold text-[#2D6A4F] tabular-nums">
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

              {/* Add-ons */}
              <div className="space-y-2.5 pt-3 border-t border-[#F0EAE1]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#718096] mb-1">
                  4. Lahore Climate & Convenience Add-ons
                </label>

                <label className="flex items-center gap-3 p-3 rounded-2xl border border-[#EAE4DC] hover:bg-[#FAF7F2] cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={includeTaxi}
                    onChange={(e) => setIncludeTaxi(e.target.checked)}
                    className="h-4 w-4 rounded text-[#2D6A4F] focus:ring-[#2D6A4F]"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-[#1F2421] block">Lahore AC Pet Taxi (Pick & Drop)</span>
                    <span className="text-[#6B7280] text-[11px]">Climate-protected van transfer from your doorstep in DHA, Gulberg, Model Town</span>
                  </div>
                  <span className="font-bold text-[#2D6A4F] tabular-nums">+PKR 800</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-2xl border border-[#EAE4DC] hover:bg-[#FAF7F2] cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={includeAntiTick}
                    onChange={(e) => setIncludeAntiTick(e.target.checked)}
                    className="h-4 w-4 rounded text-[#2D6A4F] focus:ring-[#2D6A4F]"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-[#1F2421] block">Monsoon Anti-Tick & Flea Medicated Rinse</span>
                    <span className="text-[#6B7280] text-[11px]">Botanical neem protection preventing local summer ticks and dust mites</span>
                  </div>
                  <span className="font-bold text-[#2D6A4F] tabular-nums">+PKR 600</span>
                </label>
              </div>

            </div>

            {/* Quote Summary Box */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#FAF7F2] border border-[#EAE4DC] p-6 sm:p-8">
              <div>
                <h3 className="font-heading text-lg font-bold text-[#1F2421] border-b border-[#E2DBD1] pb-3">
                  Summary Quote
                </h3>

                <div className="mt-4 space-y-2.5 text-xs">
                  <div className="flex justify-between text-[#4A5568]">
                    <span>Pet Selection:</span>
                    <span className="font-semibold text-[#1F2421]">{petLabelMap[petType]}</span>
                  </div>
                  <div className="flex justify-between text-[#4A5568]">
                    <span>Service:</span>
                    <span className="font-semibold text-[#1F2421]">{serviceLabelMap[service]}</span>
                  </div>
                  <div className="flex justify-between text-[#4A5568]">
                    <span>Rate:</span>
                    <span className="font-semibold text-[#1F2421] tabular-nums">
                      PKR {currentRate.toLocaleString()} × {quantity}
                    </span>
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

                <div className="mt-6 pt-4 border-t border-[#E2DBD1]">
                  <div className="text-[11px] uppercase tracking-wider text-[#718096]">
                    Estimated Total (All Inclusive)
                  </div>
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2D6A4F] tabular-nums mt-1">
                    PKR {subtotal.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-[#718096] mt-1.5 leading-relaxed">
                    Includes 24/7 power guarantee, certified handler care, fresh filtered water & daily WhatsApp photo updates.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-2">
                <button
                  type="button"
                  onClick={handleProceed}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] py-3 text-xs font-bold text-white shadow-sm hover:bg-[#1B4332] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Book With This Estimate</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={`https://wa.me/923007292273?text=${encodeURIComponent(`Hi PawCare Lahore! I got an estimate of PKR ${subtotal.toLocaleString()} for ${quantity}x ${serviceLabelMap[service]} (${petLabelMap[petType]}). Can I book?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#D5DDD7] bg-white py-2.5 text-xs font-semibold text-[#1F2421] hover:bg-[#F2F7F4] hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>Send Estimate to WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Complete Rate Reference Card */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">Official Price Guide</span>
            <h2 className="mt-1 font-heading text-2xl font-bold text-[#1F2421]">
              Standard Lahore Rates Overview
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#EAE4DC] bg-white shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FAF7F2] border-b border-[#EAE4DC]">
                <tr>
                  <th className="p-4 font-bold text-[#1F2421]">Service</th>
                  <th className="p-4 font-bold text-[#1F2421]">Cat / Kitten</th>
                  <th className="p-4 font-bold text-[#1F2421]">Small Dog (&lt;10kg)</th>
                  <th className="p-4 font-bold text-[#1F2421]">Medium Dog (10-25kg)</th>
                  <th className="p-4 font-bold text-[#1F2421]">Large Dog (&gt;25kg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EAE1]">
                <tr>
                  <td className="p-4 font-semibold text-[#1F2421]">Pet Grooming & Spa</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 2,500</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 2,800</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 3,500</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 4,200</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1F2421]">Overnight Boarding (24 hrs)</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 2,500</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 3,000</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 3,500</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 4,200</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1F2421]">Daycare & Social Play</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 1,500</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 1,800</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 2,000</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 2,500</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1F2421]">Dog Walking (Neighborhood)</td>
                  <td className="p-4 text-[#718096]">—</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 1,000</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 1,200</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 1,500</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1F2421]">In-Home Sitting Visit</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 1,600</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 1,800</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 2,000</td>
                  <td className="p-4 text-[#2D6A4F] font-bold">PKR 2,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
