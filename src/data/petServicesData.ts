export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: 'grooming' | 'boarding' | 'daycare' | 'walking' | 'sitting';
  description: string;
  features: string[];
  startingPrice: string;
  duration: string;
  image?: string;
  popular?: boolean;
}

export const PET_SERVICES: ServiceItem[] = [
  {
    id: 'pet-grooming',
    title: 'Pet Grooming & Spa',
    tagline: 'Clean, stress-free grooming for dogs & cats',
    category: 'grooming',
    description: 'Complete hygienic and aesthetic care tailored for Lahore’s dusty and hot climate. We use pH-balanced hypoallergenic organic shampoos, sanitized blades, and gentle blow-drying to prevent skin hot spots.',
    features: [
      'Warm medicated/hypoallergenic bath & deep coat brushing',
      'Custom breed-specific haircut & summer de-shedding shave',
      'Nail trimming, paw pad moisturizing & sanitary trim',
      'Gentle ear canal flushing & eye tear-stain cleansing',
      'Breath freshening & post-groom coat conditioning spritz'
    ],
    startingPrice: 'PKR 2,800',
    duration: '60 - 90 mins',
    popular: true,
  },
  {
    id: 'pet-boarding',
    title: 'Overnight Pet Boarding',
    tagline: '5-star boutique staycation while you travel',
    category: 'boarding',
    description: 'Traveling out of Lahore or abroad? Leave your pets in our private, spacious, climate-controlled suites equipped with 24/7 dual generator backup, soft memory foam beds, and continuous veterinary supervision.',
    features: [
      'Private air-conditioned suites with separate cat & dog wings',
      '24/7 electricity guarantee with heavy automatic generator & solar backup',
      'Custom home-cooked or premium kibble feeding schedules',
      'Daily WhatsApp photo & video updates direct to owners',
      'Nightly tuck-in, cuddle sessions & calming ambient audio'
    ],
    startingPrice: 'PKR 3,500 / night',
    duration: 'Per 24 Hours',
    popular: true,
  },
  {
    id: 'pet-daycare',
    title: 'Daycare & Social Play',
    tagline: 'Supervised daytime care, exercise & socialization',
    category: 'daycare',
    description: 'No more bored pets waiting at home during your workday. Our daytime retreat offers supervised pack play segmented by pet size and temperament, sensory scent puzzles, and quiet afternoon nap lounges.',
    features: [
      'Indoor climate-controlled agility playroom & soft rubber turf',
      'Strict temperament matching (gentle play vs high-energy packs)',
      'Midday nutritious snack breaks & fresh filtered water fountains',
      'Brain stimulation games, fetch & tunnel agility tunnels',
      'Pick-up and drop-off coordination across central Lahore'
    ],
    startingPrice: 'PKR 2,000 / day',
    duration: '8:00 AM - 7:00 PM',
  },
  {
    id: 'pet-walking',
    title: 'Dog Walking & Outdoor Exercise',
    tagline: 'Structured, heat-safe walks in your neighborhood',
    category: 'walking',
    description: 'Timed to avoid Lahore’s daytime scorching pavement. Our verified walkers take your dogs on secure, GPS-tracked routes through local parks in DHA, Gulberg, Model Town, and Askari with fresh water hydration stops.',
    features: [
      'Summer schedule: Early dawn (6:00 - 8:30 AM) & dusk sessions',
      'Live GPS walk tracking with route map sent upon completion',
      'Hydration pack & heat-shield paw safety checks before walking',
      'Loose-leash manners reinforcement & positive praise',
      'Paw cleaning and waste disposal included'
    ],
    startingPrice: 'PKR 1,200 / walk',
    duration: '30 - 45 mins',
  },
  {
    id: 'pet-sitting',
    title: 'In-Home Pet Sitting',
    tagline: 'Personalized care in the comfort of your pet’s home',
    category: 'sitting',
    description: 'Perfect for cats and nervous dogs who prefer staying in their familiar home surroundings. Our vetted caregivers visit your residence on schedule for feeding, litter box maintenance, medication, and companionship.',
    features: [
      'Zero-stress routine in their own familiar home environment',
      'Strict feeding, medication administration & fresh water refresh',
      'Litter box scoop, sanitization & pet accident cleanup',
      'Home security check, plant watering & mail collection on request',
      'Instant post-visit summary report with timestamped photos'
    ],
    startingPrice: 'PKR 1,800 / visit',
    duration: '45 - 60 mins',
  }
];

export const LAHORE_AREAS = [
  { name: 'DHA Lahore (Phases 1 - 8)', active: true, tag: 'Full Coverage' },
  { name: 'Gulberg (I, II, III)', active: true, tag: 'Full Coverage' },
  { name: 'Model Town (A - M Blocks)', active: true, tag: 'Full Coverage' },
  { name: 'Bahria Town Lahore', active: true, tag: 'Full Coverage' },
  { name: 'Johar Town & PCSIR', active: true, tag: 'Full Coverage' },
  { name: 'Cantt & Askari (1 - 11)', active: true, tag: 'Full Coverage' },
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
