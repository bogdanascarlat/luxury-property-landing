import React from "react";
import { motion } from "framer-motion";
import type { Property } from "../types/property";
import {
  formatPrice,
  formatSquareFeet,
  scrollToElement,
} from "../utils/formatters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faStar,
  faTag,
  faBuilding,
  faMapMarkerAlt,
  faChartLine,
  faCalendarCheck,
  faDownload,
  faExternalLinkAlt,
  faArrowRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

interface HeroSectionProps {
  property: Property;
}

const HeroSection: React.FC<HeroSectionProps> = ({ property }) => {
  return (
    <>
      <section className="relative h-screen md:min-h-[600px] min-h-[1300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
            <source src="/assets/videos/hero.webm" type="video/webm" />
          </video>

          <img
            src="/assets/img/penthouse.webp"
            alt="Luxury Property"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-0 md:pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <span className="bg-luxury-gold text-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider flex items-center">
                <FontAwesomeIcon icon={faCrown} className="mr-2" />
                Signature Property
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-white/30 flex items-center">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                Exclusive Listing
              </span>
              <span className="bg-[rgb(0,68,136)] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider flex items-center">
                <FontAwesomeIcon icon={faTag} className="mr-2" />
                For Sale
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-luxury-gold/50 flex items-center">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                {property.developer.name}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-tight"
            >
              <span className="text-white block">Skyline</span>
              <span className="text-luxury-gold block">Penthouse</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center mb-8"
            >
              <div className="relative mr-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-luxury-gold text-xl animate-pulse"
                />
                <div className="absolute inset-0 text-luxury-gold animate-ping opacity-30">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                </div>
              </div>
              <span className="text-xl text-white/90">
                {property.location.area}, {property.location.city} •{" "}
                {property.location.district}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12"
            >
              <div className="mb-8 lg:mb-0">
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-display font-bold text-luxury-gold mb-2 relative drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    {formatPrice(property.price.amount)}
                    <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-luxury-gold/50 to-transparent"></div>
                  </div>
                </div>
                <div className="text-lg text-white/70 flex items-center mt-4">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="text-luxury-gold/70 mr-2"
                  />
                  ${formatSquareFeet(property.price.pricePerSqFt)} per sq. ft.
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6 mt-6 lg:mt-0">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                    {property.details.bedrooms}
                  </div>
                  <div className="text-sm text-white/70 uppercase tracking-wider mt-1">
                    Bedrooms
                  </div>
                  <div className="mt-1 w-4 h-0.5 bg-luxury-gold/0 group-hover:bg-luxury-gold transition-all duration-300 mx-auto"></div>
                </div>

                <div className="text-center group">
                  <div className="text-3xl font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                    {property.details.bathrooms}
                  </div>
                  <div className="text-sm text-white/70 uppercase tracking-wider mt-1">
                    Bathrooms
                  </div>
                  <div className="mt-1 w-4 h-0.5 bg-luxury-gold/0 group-hover:bg-luxury-gold transition-all duration-300 mx-auto"></div>
                </div>

                <div className="text-center group">
                  <div className="text-3xl font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                    {formatSquareFeet(property.details.sqFt)}
                  </div>
                  <div className="text-sm text-white/70 uppercase tracking-wider mt-1">
                    Sq. Ft.
                  </div>
                  <div className="mt-1 w-4 h-0.5 bg-luxury-gold/0 group-hover:bg-luxury-gold transition-all duration-300 mx-auto"></div>
                </div>

                <div className="text-center group">
                  <div className="text-3xl font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                    {property.details.garages}
                  </div>
                  <div className="text-sm text-white/70 uppercase tracking-wider mt-1">
                    Garages
                  </div>
                  <div className="mt-1 w-4 h-0.5 bg-luxury-gold/0 group-hover:bg-luxury-gold transition-all duration-300 mx-auto"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-start gap-4"
            >
              <button
                onClick={() => scrollToElement("schedule-viewing")}
                className="group relative bg-luxury-gold text-black px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-lg hover:bg-luxury-darkGold transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
                Schedule Viewing
              </button>

              <button
                onClick={() => scrollToElement("brochure")}
                className="group relative bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-lg hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download Brochure
              </button>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-[1250px] md:top-auto bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToElement("developer-section")}
            className="animate-bounce flex flex-col items-center cursor-pointer"
          >
            <span className="text-xs text-white/60 mb-2 uppercase tracking-widest font-light">
              Explore
            </span>
            <div className="relative">
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-white text-xl"
              />
              <div className="absolute inset-0 animate-ping text-white/30">
                <FontAwesomeIcon icon={faChevronDown} className="text-xl" />
              </div>
            </div>
          </button>
        </div>

        <div className="absolute bottom-16 md:bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent z-10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-3 border border-white/20">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="text-luxury-gold"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">
                      Developed by{" "}
                      <span className="text-luxury-gold">
                        {property.developer.name}
                      </span>
                    </h4>
                    <p className="text-white/70 text-sm">
                      Dubai's Premier Real Estate Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="hidden md:flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">
                      {property.developer.rating}
                    </div>
                    <div className="text-white/70 text-xs">Credit Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">
                      {property.developer.yearsExperience}+
                    </div>
                    <div className="text-white/70 text-xs">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">
                      {property.developer.projectCount}+
                    </div>
                    <div className="text-white/70 text-xs">Projects</div>
                  </div>
                </div>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm border border-white/20 transition-all group">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                  Developer Profile
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
