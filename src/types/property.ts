export interface Property {
  id: string;
  title: string;
  location: {
    area: string;
    city: string;
    district: string;
  };
  price: {
    amount: number;
    currency: string;
    pricePerSqFt: number;
  };
  details: {
    bedrooms: number;
    bathrooms: number;
    sqFt: number;
    garages: number;
  };
  badges: string[];
  images: string[];
  video?: string;
  description: string;
  features: PropertyFeature[];
  floorPlans: FloorPlan[];
  developer: Developer;
  agent: Agent;
  investment: InvestmentData;
  virtualTour?: string;
}

export interface PropertyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface FloorPlan {
  id: string;
  name: string;
  level: string;
  sqFt: number;
  features: string[];
}

export interface Developer {
  name: string;
  logo: string;
  logoFull: string;
  rating: string;
  yearsExperience: number;
  projectCount: number;
  countries: number;
  portfolioValue: string;
  awards: string;
  warranty: string;
  ceo: {
    name: string;
    title: string;
    signature: string;
    quote: string;
  };
  portfolio: DeveloperProject[];
}

export interface DeveloperProject {
  name: string;
  image: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  phone: string;
  email: string;
}

export interface InvestmentData {
  roi: number;
  appreciation: number;
  monthlyRental: number;
  mortgageDefault: {
    downPaymentPercent: number;
    loanTerm: number;
  };
}

export interface LocationProximity {
  title: string;
  distance: string;
  description: string;
}

export interface SimilarProperty {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqFt: number;
  image: string;
  badge?: string;
}
