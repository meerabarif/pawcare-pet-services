export interface ServicePackage {
  name: string;
  price: string;
  description: string;
  badge?: string;
  features: string[];
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: 'grooming' | 'boarding' | 'daycare' | 'walking' | 'sitting';
  description: string;
  detailedOverview: string;
  features: string[];
  packages?: ServicePackage[];
  steps?: ServiceStep[];
  startingPrice: string;
  duration: string;
  image: string;
  popular?: boolean;
  lahoreAdvantage: string;
  faqs: { q: string; a: string }[];
}

export const PET_SERVICES: ServiceItem[] = [
  {
    id: 'pet-grooming',
    title: 'Pet Grooming & Spa',
    tagline: 'Clean, stress-free grooming for dogs & cats',
    category: 'grooming',
    description: 'Complete hygienic and aesthetic care tailored for Lahore’s dusty and hot climate. We use pH-balanced hypoallergenic organic shampoos, sanitized blades, and gentle blow-drying to prevent skin hot spots.',
    detailedOverview: 'Lahore’s particulate dust and scorching summer humidity can cause severe skin irritation, heavy matting, and bacterial hot spots in dogs and cats. Our Pet Grooming & Spa is designed specifically for local climate challenges. From cool hypoallergenic baths to precision breed-specific scissoring, sanitized sanitary trims, and flea rinses, every pet is treated in a quiet, low-stress, climate-controlled studio.',
    image: '/assets/images/service_pet_grooming_lahore_1790446270038.jpg',
    startingPrice: 'PKR 2,800',
    duration: '60 - 90 mins',
    popular: true,
    lahoreAdvantage: 'High-velocity cool air dryers (no hot box dryers), medical ozone tool sanitization, and specialized de-shedding formulas for Lahore smog and pollen.',
    features: [
      'Warm medicated/hypoallergenic bath & deep coat brushing',
      'Custom breed-specific haircut & summer de-shedding shave',
      'Nail trimming, paw pad moisturizing & sanitary trim',
      'Gentle ear canal flushing & eye tear-stain cleansing',
      'Breath freshening & post-groom coat conditioning spritz'
    ],
    packages: [
      {
        name: 'Basic Fresh & Clean Bath',
        price: 'PKR 2,800',
        description: 'Ideal for routine maintenance, minor dirt cleanup, and coat refreshment.',
        features: [
          'Gentle organic oatmeal bath',
          'Towel + low-heat blower dry',
          'Nail trim & paw tidy',
          'Ear cleaning & inspection',
          'Scented finishing mist'
        ]
      },
      {
        name: 'Full Signature Spa & Styling',
        price: 'PKR 4,500',
        badge: 'Most Popular',
        description: 'Comprehensive styling and deep skin revitalization for all breeds.',
        features: [
          'Deep cleansing medicated shampoo & silk coat conditioner',
          'Full breed-specific haircut or custom summer scissor cut',
          'De-matting & undercoat de-shedding treatment',
          'Nail trimming, buffing & paw pad balm',
          'Ear canal hair pluck & antiseptic cleanse',
          'Teeth brushing & mint oral spray'
        ]
      },
      {
        name: 'Monsoon Anti-Tick & Flea Defense',
        price: 'PKR 3,600',
        badge: 'Lahore Summer Essential',
        description: 'Targeted botanical rinse to eliminate ticks and fleas without harsh chemicals.',
        features: [
          'Botanical neem & pyrethrin medicated soak',
          'Thorough manual flea comb inspection',
          'Tick extraction & soothing antiseptic skin treatment',
          'Paw pad sanitization & deep nail trim',
          'Preventative botanical coat spray'
        ]
      }
    ],
    steps: [
      {
        step: '01',
        title: 'Check-In & Coat Assessment',
        description: 'We inspect your pet’s skin, ears, coat texture, and sensitivity points while allowing them to relax.'
      },
      {
        step: '02',
        title: 'Calming Bath & Deep Rinse',
        description: 'pH-balanced water and organic cleansers gently wash away Lahore dust, pollen, and odor.'
      },
      {
        step: '03',
        title: 'Blow Dry & Gentle Brushing',
        description: 'Handheld cool-air drying prevents overheating while removing loose undercoat fur.'
      },
      {
        step: '04',
        title: 'Precision Styling & Hygiene Trim',
        description: 'Sanitary cuts, nail clipping, ear cleansing, and breed styling performed with sterilized tools.'
      },
      {
        step: '05',
        title: 'Photo Finish & Happy Reunion',
        description: 'We send a photo to your WhatsApp and hand over your clean, relaxed, great-smelling pet.'
      }
    ],
    faqs: [
      {
        q: 'Do you sedate pets during grooming?',
        a: 'Never. We practice 100% fear-free and positive reinforcement handling. We take patient breaks if a pet feels anxious.'
      },
      {
        q: 'How often should a dog or cat be groomed in Lahore?',
        a: 'Due to local dust and summer temperatures, long-haired breeds (like Persian cats, Shih Tzus, Golden Retrievers) benefit from professional grooming every 3–4 weeks, while short-haired breeds do well every 5–6 weeks.'
      },
      {
        q: 'Can you groom aggressive or nervous pets?',
        a: 'Yes, our certified handlers are trained in de-escalation body language, gentle swaddling techniques, and quiet one-on-one sessions.'
      }
    ]
  },
  {
    id: 'pet-boarding',
    title: 'Overnight Pet Boarding',
    tagline: '5-star boutique staycation while you travel',
    category: 'boarding',
    description: 'Traveling out of Lahore or abroad? Leave your pets in our private, spacious, climate-controlled suites equipped with 24/7 dual generator backup, soft memory foam beds, and continuous veterinary supervision.',
    detailedOverview: 'Going on vacation or a business trip? PawCare Pet Boarding offers Lahore’s most reliable, hygienic overnight accommodations. With dedicated feline and canine wings, uninterrupted inverter air conditioning backed by industrial diesel generators and solar arrays, and personalized meal management, your pet enjoys a true vacation while you travel worry-free.',
    image: '/assets/images/service_pet_boarding_lahore_1790745344871.jpg',
    startingPrice: 'PKR 3,500 / night',
    duration: 'Per 24 Hours',
    popular: true,
    lahoreAdvantage: '100% power guarantee: dual automatic changeover generators and solar backup guarantee zero air conditioning interruption during Lahore load shedding.',
    features: [
      'Private air-conditioned suites with separate cat & dog wings',
      '24/7 electricity guarantee with heavy automatic generator & solar backup',
      'Custom home-cooked or premium kibble feeding schedules',
      'Daily WhatsApp photo & video updates direct to owners',
      'Nightly tuck-in, cuddle sessions & calming ambient audio'
    ],
    packages: [
      {
        name: 'Standard AC Suite',
        price: 'PKR 3,500 / night',
        description: 'Comfortable private room with orthopedic bedding and regular exercise.',
        features: [
          'Individual climate-controlled suite (22°C - 24°C)',
          'Twice-daily potty breaks & supervised play sessions',
          'Owner-specified feeding schedule (kibble or home food)',
          'Daily WhatsApp photo updates',
          'Fresh filtered water bowls changed 4x daily'
        ]
      },
      {
        name: 'Executive Luxury Suite',
        price: 'PKR 5,000 / night',
        badge: 'Top Seller',
        description: 'Expanded room space, memory foam mattress, extra play time and video reels.',
        features: [
          'Oversized private suite with floor-to-ceiling glass paneling',
          'Four outdoor exercise & agility sessions daily',
          'High-definition video reels sent to WhatsApp daily',
          'Gourmet treat & evening cuddle story session',
          'Complimentary exit bath for stays over 5 nights'
        ]
      },
      {
        name: 'Feline Penthouse Suite',
        price: 'PKR 3,000 / night',
        description: 'Completely separated quiet feline sanctuary with multi-level climbing towers.',
        features: [
          'Zero dog sound exposure (sound-insulated feline wing)',
          'Multi-tier scratching post and window bird-watch perch',
          'Premium clumping unscented litter changed daily',
          'Gentle laser and feather wand play sessions',
          'Daily photo & grooming brush update'
        ]
      }
    ],
    steps: [
      {
        step: '01',
        title: 'Vaccination & Health Intake',
        description: 'We verify core vaccines, tick prevention status, and dietary preferences at check-in.'
      },
      {
        step: '02',
        title: 'Suite Settling & Familiar Scents',
        description: 'Your pet is shown to their clean, AC suite with their favorite toys or blanket to feel at home.'
      },
      {
        step: '03',
        title: 'Structured Daily Routine',
        description: 'Morning walk, timely feeding, midday nap in air conditioning, afternoon agility, and evening cuddles.'
      },
      {
        step: '04',
        title: 'Twice-Daily WhatsApp Updates',
        description: 'You receive high-resolution photos and video clips showing your pet playing and eating happily.'
      },
      {
        step: '05',
        title: 'Exit Groom & Joyful Pickup',
        description: 'Pets are brushed, freshened up, and prepared with full belongings ready for family pickup.'
      }
    ],
    faqs: [
      {
        q: 'What happens during electricity load shedding in Lahore?',
        a: 'We have an industrial heavy generator with automatic transfer switch (ATS) plus solar battery inverters. Power never cuts out for even 10 seconds, maintaining 22°C - 24°C climate control 24/7.'
      },
      {
        q: 'What food do you feed during boarding?',
        a: 'We recommend pet parents bring their pet’s usual kibble or wet food to maintain digestion. Alternatively, we prepare fresh boiled chicken and rice or Royal Canin upon instruction.'
      },
      {
        q: 'Do dogs and cats ever interact?',
        a: 'No. Our facility has completely separate physical wings, air filtration channels, and play zones for cats and dogs.'
      }
    ]
  },
  {
    id: 'pet-daycare',
    title: 'Daycare & Social Play',
    tagline: 'Supervised daytime care, exercise & socialization',
    category: 'daycare',
    description: 'No more bored pets waiting at home during your workday. Our daytime retreat offers supervised pack play segmented by pet size and temperament, sensory scent puzzles, and quiet afternoon nap lounges.',
    detailedOverview: 'Leaving your pet alone at home all day while you are at office or attending events can lead to separation anxiety, excessive barking, and destructive chewing. PawCare Daycare provides a dynamic, loving environment where pets burn energy, make friends, and receive continuous love from certified animal handlers.',
    image: '/assets/images/service_pet_daycare_lahore_1790446283796.jpg',
    startingPrice: 'PKR 2,000 / day',
    duration: '8:00 AM - 7:00 PM',
    popular: false,
    lahoreAdvantage: 'Indoor rubberized non-slip flooring with high-efficiency air filters protecting pets from high summer heat index and seasonal urban smog.',
    features: [
      'Indoor climate-controlled agility playroom & soft rubber turf',
      'Strict temperament matching (gentle play vs high-energy packs)',
      'Midday nutritious snack breaks & fresh filtered water fountains',
      'Brain stimulation games, fetch & tunnel agility tunnels',
      'Pick-up and drop-off coordination across central Lahore'
    ],
    packages: [
      {
        name: 'Single Day Pass',
        price: 'PKR 2,000 / day',
        description: 'Drop off in the morning and pick up a tired, happy pet after work.',
        features: [
          'Full access from 8:00 AM to 7:00 PM',
          'Temperament-matched playgroup',
          'Midday rest and nap period in quiet AC lounge',
          'Fresh water and snack distribution',
          'Daily WhatsApp photo reel'
        ]
      },
      {
        name: 'Weekly Daycare Membership (5 Days)',
        price: 'PKR 8,500 / week',
        badge: 'Save 15%',
        description: 'Monday through Friday workweek routine for busy professionals.',
        features: [
          '5 full daycare sessions per week',
          'Dedicated cubby for personal items',
          'Weekly sensory agility and trick training reinforcement',
          'Priority AC pet taxi scheduling',
          'Complimentary paw soak & coat refresh each Friday'
        ]
      },
      {
        name: 'Monthly Unlimited Social Pass',
        price: 'PKR 32,000 / month',
        badge: 'Best Value',
        description: 'Comprehensive pet wellness and socialization for year-round care.',
        features: [
          'Unlimited monthly weekday daycare',
          'Free weekly basic bath & nail trim',
          '10% discount on overnight boarding stays',
          'Direct hotline to shift supervisor',
          'VIP pickup coordination'
        ]
      }
    ],
    steps: [
      {
        step: '01',
        title: 'Morning Check-In & Vibe Check',
        description: 'Arrive between 8:00 AM - 10:00 AM. Handlers check energy levels and greet your pet warmly.'
      },
      {
        step: '02',
        title: 'Size & Temperament Grouping',
        description: 'Pets are gently integrated into small groups (e.g., gentle seniors, tiny pups, active athletes).'
      },
      {
        step: '03',
        title: 'Active Agility & Ball Games',
        description: 'Tunnels, rubber toys, ball retrieval, and scent puzzles indoors in cool air conditioning.'
      },
      {
        step: '04',
        title: 'Midday Power Nap & Hydration',
        description: 'Lights dim from 1:00 PM - 3:00 PM for restorative naps with relaxing classical background music.'
      },
      {
        step: '05',
        title: 'Afternoon Play & Happy Handoff',
        description: 'Secondary light play, paw wipe-down, and pickup by 7:00 PM with a happily tired pet.'
      }
    ],
    faqs: [
      {
        q: 'What if my dog is shy or has never socialized before?',
        a: 'We conduct a gentle 15-minute trial introduction. Shy dogs start in our low-stimulation sensory lounge with one gentle handler before meeting calm companion dogs.'
      },
      {
        q: 'Can you feed my dog their lunch during daycare?',
        a: 'Absolutely. Just bring their packed lunch labeled with their name, and we will feed them in their own private dining booth.'
      },
      {
        q: 'Are aggressive dogs permitted?',
        a: 'No. We screen all dogs prior to pack play. Dogs exhibiting persistent aggression are redirected to one-on-one sessions to maintain complete safety.'
      }
    ]
  },
  {
    id: 'pet-walking',
    title: 'Dog Walking & Outdoor Exercise',
    tagline: 'Structured, heat-safe walks in your neighborhood',
    category: 'walking',
    description: 'Timed to avoid Lahore’s daytime scorching pavement. Our verified walkers take your dogs on secure, GPS-tracked routes through local parks in DHA, Gulberg, Model Town, and Askari with fresh water hydration stops.',
    detailedOverview: 'Dogs in Lahore need physical exertion and outdoor mental stimulation, but walking on hot asphalt during the afternoon can severely burn their paw pads or induce heatstroke. PawCare dog walking is engineered around safety: early morning dawn walks and evening post-sunset strolls in neighborhood parks, complete with GPS route tracking and portable hydration packs.',
    image: '/assets/images/service_pet_walking_lahore_1790745360876.jpg',
    startingPrice: 'PKR 1,200 / walk',
    duration: '30 - 45 mins',
    popular: false,
    lahoreAdvantage: 'Strict 7-second pavement heat test before every step; walks scheduled exclusively during cool morning breezes and dusk hours.',
    features: [
      'Summer schedule: Early dawn (6:00 - 8:30 AM) & dusk sessions',
      'Live GPS walk tracking with route map sent upon completion',
      'Hydration pack & heat-shield paw safety checks before walking',
      'Loose-leash manners reinforcement & positive praise',
      'Paw cleaning and waste disposal included'
    ],
    packages: [
      {
        name: 'Single Neighborhood Stride',
        price: 'PKR 1,200 / walk',
        description: 'On-demand 30-45 minute private walk with a dedicated handler.',
        features: [
          '30-45 minutes brisk park/neighborhood walk',
          'Fresh filtered water hydration stops',
          'Paw pad inspection and wet towel clean',
          'GPS walk route & duration map sent to WhatsApp',
          'Biodegradable waste disposal'
        ]
      },
      {
        name: 'Monthly 5-Day Walking Routine',
        price: 'PKR 20,000 / month',
        badge: 'Recommended',
        description: 'Consistent Monday-to-Friday walks keeping your dog fit and content.',
        features: [
          '20 scheduled weekday walks per month',
          'Dedicated regular handler your dog bonds with',
          'Basic leash manner and heel reinforcement',
          'Flexible dawn or dusk timing selection',
          'Monthly physical activity report'
        ]
      },
      {
        name: 'High-Energy Cardio Run',
        price: 'PKR 1,800 / session',
        description: 'For energetic working breeds (Husky, Malinois, German Shepherd, Lab).',
        features: [
          '45-60 minute run/trot session with athletic handler',
          'Interval sprints and ball fetch in secure park grass',
          'Electrolyte hydration pack for summer wellness',
          'Post-run cool down and muscle massage',
          'Heart rate and energy level check'
        ]
      }
    ],
    steps: [
      {
        step: '01',
        title: 'Doorstep Arrival & Harness Check',
        description: 'Our walker arrives promptly at your gate with sanitized dual-clip leash and water bottle.'
      },
      {
        step: '02',
        title: 'Pavement Temperature Check',
        description: 'We test ground heat using the back of hand rule to ensure paws are completely safe from burns.'
      },
      {
        step: '03',
        title: 'Scenic Park / Shaded Route',
        description: 'A purposeful, brisk walk through lush tree-lined neighborhood paths and local parks.'
      },
      {
        step: '04',
        title: 'Hydration & Sniff Exploration',
        description: 'Dedicated pauses for drinking clean water and natural sniff therapy to relieve canine stress.'
      },
      {
        step: '05',
        title: 'Paw Wipe & WhatsApp Summary',
        description: 'We wipe paws clean, return your pet safely inside, and WhatsApp the GPS route map.'
      }
    ],
    faqs: [
      {
        q: 'Do you walk dogs in packs or individually?',
        a: 'We prioritize safety and exclusively do private one-on-one walks, or paired walks if you own two dogs from the same household.'
      },
      {
        q: 'What if it rains or smog index is hazardous?',
        a: 'If heavy rain or severe winter smog occurs, we either shift timings to clearer hours or convert the session into an interactive indoor mental enrichment play session at your home.'
      },
      {
        q: 'Are your walkers experienced with large or reactive dogs?',
        a: 'Yes, all our walkers undergo hands-on leash mechanics training, handling pulls, counter-conditioning distractions, and body language awareness.'
      }
    ]
  },
  {
    id: 'pet-sitting',
    title: 'In-Home Pet Sitting',
    tagline: 'Personalized care in the comfort of your pet’s home',
    category: 'sitting',
    description: 'Perfect for cats and nervous dogs who prefer staying in their familiar home surroundings. Our vetted caregivers visit your residence on schedule for feeding, litter box maintenance, medication, and companionship.',
    detailedOverview: 'Cats and timid dogs often experience severe distress when moved to a foreign environment. In-home pet sitting keeps your pet in their familiar territory, curled up in their favorite sofa spot, while our vetted and background-cleared pet sitters look after all their physical, medical, and emotional needs according to your household routine.',
    image: '/assets/images/service_pet_sitting_lahore_1790745373710.jpg',
    startingPrice: 'PKR 1,800 / visit',
    duration: '45 - 60 mins',
    popular: false,
    lahoreAdvantage: 'Safe home visits across gated communities (DHA, Askari, Cantt, Bahria) with police verification and identity-cleared caregivers.',
    features: [
      'Zero-stress routine in their own familiar home environment',
      'Strict feeding, medication administration & fresh water refresh',
      'Litter box scoop, sanitization & pet accident cleanup',
      'Home security check, plant watering & mail collection on request',
      'Instant post-visit summary report with timestamped photos'
    ],
    packages: [
      {
        name: 'Single Daily Visit (45-60 min)',
        price: 'PKR 1,800 / visit',
        description: 'Ideal for independent adult cats or self-sufficient dogs.',
        features: [
          'Thorough food & fresh water replacement',
          'Litter box scoop, scrub & pet area vacuuming',
          'Oral medication or vitamin paste administration',
          'Playtime with favorite toys and gentle brushing',
          'WhatsApp photo & check-in confirmation'
        ]
      },
      {
        name: 'Double Daily Visits (Morning & Evening)',
        price: 'PKR 3,200 / day',
        badge: 'Recommended for Cats',
        description: 'Two separate visits per day ensuring routine breakfast and dinner care.',
        features: [
          'Morning visit (8 AM - 10 AM) + Evening visit (6 PM - 8 PM)',
          'Complete meal service twice daily',
          'Double litter maintenance & accident prevention',
          'Light home rotation (curtains, porch lights, mail collection)',
          'Two detailed WhatsApp updates daily'
        ]
      },
      {
        name: 'Overnight In-Home House Sitter',
        price: 'PKR 6,500 / night',
        description: 'A verified caregiver stays overnight at your home with your pet.',
        features: [
          'Caregiver on-site from 8:00 PM to 8:00 AM',
          'Continuous companionship for separation-anxious pets',
          'Nightly routine, cuddle time & morning walk',
          'High home security presence while family travels',
          'Continuous communication via phone and WhatsApp'
        ]
      }
    ],
    steps: [
      {
        step: '01',
        title: 'Complimentary Meet & Greet',
        description: 'Before your trip, the sitter visits your home to meet your pet, learn routines, and note key instructions.'
      },
      {
        step: '02',
        title: 'Secure Arrival & Identity Check',
        description: 'Sitter arrives in uniform with badge, dispatches check-in alert, and greets your pet.'
      },
      {
        step: '03',
        title: 'Nutritious Meals & Medication',
        description: 'Exact food portions, fresh water bowl wash, and scheduled tablets/syrups administered.'
      },
      {
        step: '04',
        title: 'Hygiene & Clean Living Space',
        description: 'Litter box thoroughly scooped and sanitized; floor wiped down to keep home smelling fresh.'
      },
      {
        step: '05',
        title: 'Heartfelt Play & Digital Report',
        description: 'Laser play, brushing, cuddle sessions, followed by photos sent straight to your phone.'
      }
    ],
    faqs: [
      {
        q: 'How do I know my home and belongings are safe?',
        a: 'All our sitters are strictly background-checked, CNIC-verified, police-registered, and bonded. We respect homeowner privacy and never enter unauthorized rooms.'
      },
      {
        q: 'Can the sitter administer insulin or prescription medication?',
        a: 'Yes, our team includes veterinary technician assistants trained in oral medication, sub-Q fluids, and insulin administration.'
      },
      {
        q: 'Will the sitter also water indoor plants or collect mail?',
        a: 'Yes, basic home-tending tasks like plant watering, alternating porch lights, and mail retrieval are included free of charge.'
      }
    ]
  }
];

export const LAHORE_AREAS = [
  { name: 'DHA Lahore (Phases 1 - 8)', active: true, tag: 'Full Coverage' },
  { name: 'Gulberg (I, II, III)', active: true, tag: 'Full Coverage' },
  { name: 'Model Town (A - M Blocks)', active: true, tag: 'Full Coverage' },
  { name: 'Cantt & Askari (1 - 11)', active: true, tag: 'Full Coverage' },
  { name: 'Johar Town & PCSIR', active: true, tag: 'Full Coverage' },
  { name: 'Bahria Town Lahore', active: true, tag: 'Full Coverage' },
  { name: 'Faisal Town & Garden Town', active: true, tag: 'Full Coverage' },
  { name: 'WAPDA Town & Valencia', active: true, tag: 'Full Coverage' },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Climate-Controlled & Power Backed',
    description: 'Lahore summer temperatures often exceed 42°C. Our daycare and boarding facilities feature uninterrupted inverter ACs backed by dedicated heavy generators and solar systems—your pets never face heat stress.',
    highlight: '24/7 Power Guarantee',
    icon: 'ThermometerSnowflake'
  },
  {
    title: 'Loving, Certified Pet Caregivers',
    description: 'Every team member is CPR & first-aid certified, pet behavior trained, and thoroughly police-verified. We treat every dog and cat like our own cherished family member.',
    highlight: 'Background Verified',
    icon: 'HeartHandshake'
  },
  {
    title: 'Clinical Hygiene & Sanitization',
    description: 'We follow hospital-grade medical sanitation protocols. Play areas, suites, and grooming tables are disinfected with pet-safe enzymatic cleansers after every single use.',
    highlight: 'Zero Cross-Contamination',
    icon: 'ShieldCheck'
  },
  {
    title: 'Real-Time WhatsApp Updates',
    description: 'Enjoy complete peace of mind. Receive high-definition photos, video reels, feeding logs, and mood reports straight to your phone twice every day.',
    highlight: 'Live Transparency',
    icon: 'Smartphone'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Dr. Ayesha Malik',
    location: 'DHA Phase 5, Lahore',
    pet: 'Milo (2-yr Golden Retriever)',
    review: 'Finding reliable pet services in Lahore was always stressful until PawCare. Their summer grooming kept Milo cool without skin irritation, and the boarding suite had zero power drops during load shedding.',
    service: 'Grooming & Boarding',
    rating: 5,
  },
  {
    name: 'Hamza Tariq',
    location: 'Gulberg III, Lahore',
    pet: 'Leo & Bella (Persian Cats)',
    review: 'Their in-home cat sitting service is a lifesaver. The caregiver followed their raw food diet and medication timings to the letter, sending photos after every visit. Truly 5-star service in Lahore.',
    service: 'In-Home Pet Sitting',
    rating: 5,
  },
  {
    name: 'Sarah Farooq',
    location: 'Model Town, Lahore',
    pet: 'Rocky (German Shepherd)',
    review: 'The dog walking team is punctual and respectful of Lahore’s heat. They walk Rocky at 6:30 AM before the asphalt gets hot, and the GPS map they send afterwards is so reassuring.',
    service: 'Daily Dog Walking',
    rating: 5,
  }
];

export const FAQS = [
  {
    q: 'How do you keep pets safe during Lahore’s intense summer heatwaves?',
    a: 'All our boarding rooms and daycare play areas are strictly maintained between 22°C - 24°C using heavy-duty inverter ACs backed by uninterrupted industrial generators and solar power. Dog walks are strictly scheduled at dawn (before 8:00 AM) or after sunset to avoid hot asphalt burning paw pads.'
  },
  {
    q: 'Which areas of Lahore do you cover for home visits and pick & drop?',
    a: 'We offer home pet sitting and dog walking across DHA (Phases 1-8), Gulberg, Model Town, Cantt, Askari, Johar Town, Bahria Town, and Faisal Town. Pet taxi pick-and-drop is available throughout Lahore with advance reservation.'
  },
  {
    q: 'What vaccination and health requirements are needed for boarding or daycare?',
    a: 'For the safety of all furry guests, pets must have updated Core vaccinations (Rabies, DHPP for dogs; Tricat/Rabies for cats) and active flea/tick preventative treatment. We inspect every pet at check-in.'
  },
  {
    q: 'How do I pay and how far in advance should I book for Eid or holiday seasons?',
    a: 'We accept Bank Transfer (Raast / Meezan / HBL), JazzCash, EasyPaisa, and Cash upon check-in. For peak holiday periods like Eid-ul-Fitr, Eid-ul-Adha, and December holidays, we recommend booking at least 10–14 days in advance.'
  }
];
