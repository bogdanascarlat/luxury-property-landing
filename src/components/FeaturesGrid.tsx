import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfinity,
  faWineBottle,
  faFilm,
  faSpa,
  faRobot,
  faHelicopter,
  faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";
import type { Property } from "../types/property";

interface FeaturesGridProps {
  property: Property;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ property }) => {
  const features = [
    {
      icon: faInfinity,
      title: "Infinity Pool",
      description: "30-meter edge pool overlooking Dubai skyline",
    },
    {
      icon: faWineBottle,
      title: "Climate Wine Cellar",
      description: "1,500-bottle capacity with tasting room",
    },
    {
      icon: faFilm,
      title: "Private Theater",
      description: "Dolby Atmos 4K with 12 luxury recliners",
    },
    {
      icon: faSpa,
      title: "Wellness Spa",
      description: "Complete with hammam, sauna, and treatment rooms",
    },
    {
      icon: faRobot,
      title: "Smart Automation",
      description: "Fully integrated AI-powered home system",
    },
    {
      icon: faHelicopter,
      title: "Private Helipad",
      description: "FAA-approved rooftop landing pad",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-6"
          >
            Architectural Masterpiece
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Designed by Zaha Hadid Architects, this penthouse redefines luxury
            living with its innovative design and unparalleled attention to
            detail.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-[#1C1C1C] transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-[#C89B3C] text-4xl mb-4">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-2xl font-bold text-luxury-navy group-hover:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={property.images[0]}
            alt="Virtual Tour"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/90 to-[#1C1C1C]/70 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <FontAwesomeIcon icon={faVrCardboard} className="text-6xl mb-6" />
              <h3 className="text-4xl font-bold mb-4">
                360° Virtual Tour Available
              </h3>
              <p className="text-xl mb-8">
                Experience this property from anywhere in the world
              </p>
              <button className="bg-[#C89B3C] text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#C89B3C]/90 transition-colors">
                Launch Virtual Tour
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
