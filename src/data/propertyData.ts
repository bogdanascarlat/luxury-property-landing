import type {
  Property,
  SimilarProperty,
  LocationProximity,
} from "../types/property";

export const propertyData: Property = {
  id: "skyline-penthouse-001",
  title: "Skyline Penthouse",
  location: {
    area: "Downtown",
    city: "Dubai",
    district: "Palm Jumeirah",
  },
  price: {
    amount: 24500000,
    currency: "USD",
    pricePerSqFt: 3200,
  },
  details: {
    bedrooms: 6,
    bathrooms: 8,
    sqFt: 15000,
    garages: 2,
  },
  badges: ["Signature Property", "Exclusive Listing", "For Sale"],
  images: [
    "/assets/img/penthouse.webp",
    "/assets/img/penthouse.webp",
    "/assets/img/penthouse.webp",
    "/assets/img/penthouse.webp",
    "/assets/img/penthouse.webp",
    "/assets/img/penthouse.webp",
    "/assets/img/penthouse.webp",
    "/assets/img/penthouse.webp",
  ],
  video: "/assets/videos/hero.mp4",
  description:
    "Designed by Zaha Hadid Architects, this penthouse redefines luxury living with its innovative design and unparalleled attention to detail.",
  features: [
    {
      icon: "Waves",
      title: "Infinity Pool",
      description: "30-meter edge pool overlooking Dubai skyline",
    },
    {
      icon: "Wine",
      title: "Climate Wine Cellar",
      description: "1,500-bottle capacity with tasting room",
    },
    {
      icon: "Film",
      title: "Private Theater",
      description: "Dolby Atmos 4K with 12 luxury recliners",
    },
    {
      icon: "Sparkles",
      title: "Wellness Spa",
      description: "Complete with hammam, sauna, and treatment rooms",
    },
    {
      icon: "Cpu",
      title: "Smart Automation",
      description: "Fully integrated AI-powered home system",
    },
    {
      icon: "Plane",
      title: "Private Helipad",
      description: "FAA-approved rooftop landing pad",
    },
  ],
  floorPlans: [
    {
      id: "ground",
      name: "Ground Floor",
      level: "G/F",
      sqFt: 5200,
      features: [
        "Double-height Grand Foyer",
        "Formal Living & Dining Rooms",
        "Professional Chef's Kitchen",
        "Guest Suite with Private Entrance",
      ],
    },
    {
      id: "first",
      name: "First Floor",
      level: "1/F",
      sqFt: 4800,
      features: [
        "Master Suite with Private Terrace",
        "3 Additional Bedroom Suites",
        "Private Library & Study",
        "Panoramic View Balconies",
      ],
    },
    {
      id: "roof",
      name: "Roof Terrace",
      level: "R/F",
      sqFt: 5000,
      features: [
        "Infinity Pool & Jacuzzi",
        "Outdoor Kitchen & Bar",
        "Private Helipad",
        "Zen Garden & Fire Pit",
      ],
    },
  ],
  developer: {
    name: "Emaar Properties",
    logo: "/assets/img/developer-logo.png",
    logoFull: "/assets/img/developer-logo-full.png",
    rating: "A+",
    yearsExperience: 25,
    projectCount: 150,
    countries: 40,
    portfolioValue: "$60B+",
    awards:
      "Over 250 international awards for architectural innovation and quality craftsmanship.",
    warranty:
      "10-year structural warranty and comprehensive after-sales service commitment.",
    ceo: {
      name: "Mohamed Alabbar",
      title: "Founder & Chairman",
      signature: "/assets/img/signature.png",
      quote: "We don't just build properties, we create legacies.",
    },
    portfolio: [
      {
        name: "Burj Khalifa",
        image: "/assets/img/burj-khalifa.webp",
      },
      {
        name: "The Dubai Mall",
        image: "/assets/img/dubai-mall.webp",
      },
      {
        name: "Downtown Dubai",
        image: "/assets/img/downtown-dubai.webp",
      },
      {
        name: "Dubai Creek Harbour",
        image: "/assets/img/dubai-creek.webp",
      },
    ],
  },
  agent: {
    id: "agent-001",
    name: "Alexandra Chen",
    title: "Senior Luxury Specialist",
    image: "/assets/img/agents/alexandra.webp",
    rating: 5.0,
    reviews: 42,
    phone: "+971 55 123 4567",
    email: "alexandra@farazzo.com",
  },
  investment: {
    roi: 8.5,
    appreciation: 12,
    monthlyRental: 120000,
    mortgageDefault: {
      downPaymentPercent: 30,
      loanTerm: 25,
    },
  },
  virtualTour: "#virtual-tour",
};

export const locationProximity: LocationProximity[] = [
  {
    title: "Luxury Shopping",
    distance: "5 minutes",
    description: "to The Dubai Mall, the world's largest shopping destination",
  },
  {
    title: "Fine Dining",
    distance: "10-minute drive",
    description: "Over 200 restaurants, including 12 Michelin-starred",
  },
  {
    title: "Airport Access",
    distance: "20 minutes",
    description: "to Dubai International Airport with private terminal access",
  },
];

export const similarProperties: SimilarProperty[] = [
  {
    id: "prop-001",
    title: "Oceanfront Villa",
    location: "Palm Jumeirah",
    price: 18900000,
    bedrooms: 5,
    bathrooms: 6,
    sqFt: 12000,
    image: "/assets/img/penthouse.webp",
    badge: "New",
  },
  {
    id: "prop-002",
    title: "Desert Oasis Estate",
    location: "Al Barari",
    price: 45200000,
    bedrooms: 8,
    bathrooms: 10,
    sqFt: 25000,
    image: "/assets/img/penthouse.webp",
    badge: "Signature",
  },
  {
    id: "prop-003",
    title: "Modern Penthouse",
    location: "Business Bay",
    price: 28700000,
    bedrooms: 4,
    bathrooms: 5,
    sqFt: 9000,
    image: "/assets/img/penthouse.webp",
    badge: "Exclusive",
  },
];
