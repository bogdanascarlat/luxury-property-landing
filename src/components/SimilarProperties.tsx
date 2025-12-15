import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faRuler,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const SimilarProperties: React.FC = () => {
  const properties = [
    {
      id: 1,
      image: "assets/img/penthouse.webp",
      title: "Oceanfront Villa",
      location: "Palm Jumeirah",
      price: "$18.9M",
      badge: "New",
      badgeColor: "bg-[#C89B3C] text-black",
      beds: 5,
      baths: 6,
      sqft: "12K",
    },
    {
      id: 2,
      image: "assets/img/penthouse.webp",
      title: "Desert Oasis Estate",
      location: "Al Barari",
      price: "$45.2M",
      badge: "Signature",
      badgeColor: "bg-[#004488] text-white",
      beds: 8,
      baths: 10,
      sqft: "25K",
    },
    {
      id: 3,
      image: "assets/img/penthouse.webp",
      title: "Modern Penthouse",
      location: "Business Bay",
      price: "$28.7M",
      badge: "Exclusive",
      badgeColor: "bg-[#C89B3C] text-black",
      beds: 4,
      baths: 5,
      sqft: "9K",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-6"
          >
            Similar Luxury Properties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Discover other exceptional properties in our exclusive portfolio
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-luxury-navy">
                      {property.title}
                    </h4>
                    <p className="text-gray-600">{property.location}</p>
                  </div>
                  <span
                    className={`${property.badgeColor} px-3 py-1 rounded-full text-sm font-bold`}
                  >
                    {property.badge}
                  </span>
                </div>
                <div className="text-2xl font-bold text-[#C89B3C] mb-4">
                  {property.price}
                </div>
                <div className="flex justify-between text-gray-600 border-t pt-4">
                  <span>
                    <FontAwesomeIcon icon={faBed} className="mr-1" />{" "}
                    {property.beds} Beds
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faBath} className="mr-1" />{" "}
                    {property.baths} Baths
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faRuler} className="mr-1" />{" "}
                    {property.sqft} sq.ft.
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/real-estate"
            className="inline-flex items-center text-[#C89B3C] font-bold text-lg hover:text-luxury-navy transition-colors"
          >
            View All Properties
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SimilarProperties;
