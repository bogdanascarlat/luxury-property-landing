import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUtensils,
  faPlane,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import type { Property } from "../types/property";

interface LocationSectionProps {
  property: Property;
}

const LocationSection: React.FC<LocationSectionProps> = ({ property }) => {
  const amenities = [
    {
      icon: faShoppingBag,
      title: "Luxury Shopping",
      description:
        "5 minutes to The Dubai Mall, the world's largest shopping destination",
    },
    {
      icon: faUtensils,
      title: "Fine Dining",
      description:
        "Over 200 restaurants within 10-minute drive, including 12 Michelin-starred",
    },
    {
      icon: faPlane,
      title: "Airport Access",
      description:
        "20 minutes to Dubai International Airport with private terminal access",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-6"
            >
              Prime Dubai Location
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Situated in the heart of Downtown Dubai, this penthouse offers
              unparalleled access to the city's finest amenities, with
              breathtaking views of the Burj Khalifa and Dubai Fountain.
            </motion.p>

            <div className="space-y-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-luxury-gold/10 p-3 rounded-xl mr-4">
                    <FontAwesomeIcon
                      icon={amenity.icon}
                      className="text-luxury-gold text-xl"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-luxury-navy">
                      {amenity.title}
                    </h4>
                    <p className="text-gray-600">{amenity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={property.images[0]}
                alt="Dubai Skyline"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="text-white text-xl"
                  />
                </div>
                <div className="absolute inset-0 bg-luxury-gold rounded-full animate-ping opacity-50"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
