import React, { type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MegaMenuProps {
  activeMenu: string;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ activeMenu, onClose }) => {
  const menuContent: Record<string, JSX.Element> = {
    about: (
      <div className="grid grid-cols-3 gap-x-8 max-w-3xl">
        <div>
          <ul className="space-y-3">
            <li>
              <a href="/about" className="mega-menu-link">
                About Farazzo
              </a>
            </li>
            <li>
              <a href="/vision" className="mega-menu-link">
                Our Vision
              </a>
            </li>
            <li>
              <a href="/manifesto" className="mega-menu-link">
                Manifesto
              </a>
            </li>
            <li>
              <a href="/founder" className="mega-menu-link">
                Founder
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            <li>
              <a href="/press" className="mega-menu-link">
                Press & Media Kit
              </a>
            </li>
            <li>
              <a href="/corporate-identity" className="mega-menu-link">
                Corporate Identity
              </a>
            </li>
            <li>
              <a href="/headquarters" className="mega-menu-link">
                Global Headquarters (Dubai)
              </a>
            </li>
            <li>
              <a href="/offices" className="mega-menu-link">
                International Offices
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            <li>
              <a href="/careers" className="mega-menu-link">
                Careers
              </a>
            </li>
            <li>
              <a href="/responsibility" className="mega-menu-link">
                Corporate Responsibility
              </a>
            </li>
            <li>
              <a href="/contact" className="mega-menu-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),

    "real-estate": (
      <div className="grid grid-cols-6 gap-x-8">
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Residential
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Luxury Homes
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Condominiums
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Estates
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Villas
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Penthouses
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Waterfront Properties
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Commercial
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Office Buildings
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Retail Spaces
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Hotels
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Restaurants
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Shopping Centers
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Mixed-Use Developments
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Investment
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                REITs
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Development Projects
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Portfolio Management
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                International Markets
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Property Funds
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Market Analysis
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Countries
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Dubai
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Cyprus
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Romania
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                USA
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Emerging Markets
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Global Markets
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Farazzo Exclusives
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Signature Properties
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Private Listings
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Off-Market Deals
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Ambassador Estates
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Partners
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Agents & Partners
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Submit Property
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),

    "fashion-beauty": (
      <div className="grid grid-cols-6 gap-x-8">
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Designer Clothing
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Haute Couture
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Evening Gowns
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Ready-to-Wear
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Luxury Suits
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Casual Luxury
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Limited Editions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Accessories
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Designer Handbags
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Fine Jewelry
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Luxury Watches
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Premium Eyewear
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Silk Scarves
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Leather Goods
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Footwear
          </h4>
          <ul className="space-y-3 mb-6">
            <li>
              <a href="#" className="mega-menu-link">
                Designer Heels
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Luxury Sneakers
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Custom Footwear
              </a>
            </li>
          </ul>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Models
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Fashion Models
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Runway Shows
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Brand Ambassadors
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Beauty — Skincare
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Anti-Aging
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Facial Treatments
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Luxury Serums
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Medical Grade
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Organic Products
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Beauty — Cosmetics
          </h4>
          <ul className="space-y-3 mb-6">
            <li>
              <a href="#" className="mega-menu-link">
                Premium Makeup
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Bridal Services
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Makeup Artistry
              </a>
            </li>
          </ul>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Wellness Spa
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Massage Services
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Body Therapies
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Wellness Retreats
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Exclusives
          </h4>
          <ul className="space-y-3 mb-6">
            <li>
              <a href="#" className="mega-menu-link">
                Signature Editions
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Elite Collaborations
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Limited Luxury Drops
              </a>
            </li>
          </ul>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Designers
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Emerging Designers
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Established Houses
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),

    lifestyle: (
      <div className="grid grid-cols-5 gap-x-8">
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Travel & Leisure
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Luxury Travel
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Private Resorts
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Yacht Charters
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Jet Charter
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Elite Destinations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Entertainment
          </h4>
          <ul className="space-y-3 mb-6">
            <li>
              <a href="#" className="mega-menu-link">
                VIP Events
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Private Clubs
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Wine & Spirits
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Art Collections
              </a>
            </li>
          </ul>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Culture
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Art Exhibitions
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Cultural Events
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Music Performances
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Personal Services
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Life Management
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Private Chefs
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Tutors & Mentors
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Chauffeur & Security
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Personal Branding
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Influencers
          </h4>
          <ul className="space-y-3 mb-6">
            <li>
              <a href="#" className="mega-menu-link">
                Featured Influencers
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Become an Influencer
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Brand Partnerships
              </a>
            </li>
          </ul>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Marketing
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Brand Strategy
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Content Creation
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Experiences & Events
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Global Events Calendar
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Dubai Events
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Monaco Events
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Paris Events
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Miami Events
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                RSVP / Invitations
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Members-Only Events
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),

    "wellness-home": (
      <div className="grid grid-cols-6 gap-x-8">
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Medical Services
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Concierge Medicine
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Specialized Treatments
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Telemedicine
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Preventive Care
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Medical Tourism
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Fitness & Nutrition
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Personal Training
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Wellness Programs
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Supplements
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Nutrition Coaching
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Meal Planning
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Mental Wellness
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Therapy Services
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Stress Management
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Mindfulness Training
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Life Coaching
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Wellness Retreats
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Interior Design
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Luxury Furnishing
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Custom Design
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Art Curation
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Lighting Design
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Space Planning
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Home Technology
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Smart Home Systems
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Entertainment Systems
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Automation
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Security Solutions
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Tech Integration
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Luxury Amenities
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Wine Cellars
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Spa Facilities
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Pool Design
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Home Theaters
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Outdoor Living
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),

    crypto: (
      <div className="grid grid-cols-4 gap-x-8">
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Cryptocurrency
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Bitcoin
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Ethereum
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                DeFi Protocols
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                NFT Collections
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Staking Services
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Trading Services
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Portfolio Management
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Risk Assessment
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Market Analysis
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Automated Trading
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                VIP Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Investment Solutions
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Hedge Funds
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Venture Capital
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Wealth Planning
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Private Equity
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Asset Management
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            FZZ Ecosystem
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                What Is FZZ
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Token Utility
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Rewards Program
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Whitepaper
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Wallet Integration
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),

    humanity: (
      <div className="grid grid-cols-3 gap-x-8">
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Philanthropy
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Charitable Foundations
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Community Development
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Healthcare Access
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Impact Investing
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Education Initiatives
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Social Impact
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Sustainable Practices
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Fair Trade
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Ethical Sourcing
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Cultural Preservation
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Human Rights
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Global Initiatives
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Disaster Relief
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Clean Water Projects
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Food Security
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Poverty Alleviation
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Digital Inclusion
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),

    membership: (
      <div className="grid grid-cols-2 gap-x-8 max-w-lg">
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Membership
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Membership Plans
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Benefits Overview
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Exclusive Rewards
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Member Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                FZZ Bonuses
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Sign Up / Login
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold uppercase text-sm text-white mb-5 font-sans">
            Influencers & Affiliates
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="mega-menu-link">
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Become an Influencer
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Influencer Directory
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Brand Collaborations
              </a>
            </li>
            <li>
              <a href="#" className="mega-menu-link">
                Rewards (FZZ-Ready)
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-[#1c1c1c] border-t-2 border-[#C89B3C] shadow-2xl"
          onMouseLeave={onClose}
        >
          <div className="container mx-auto px-4 py-12">
            {menuContent[activeMenu]}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
