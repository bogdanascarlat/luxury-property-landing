import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FloorPlans: React.FC = () => {
  const floors = [
    {
      level: "G/F",
      name: "Ground Floor",
      sqft: "5,200 sq. ft.",
      features: [
        "Double-height Grand Foyer",
        "Formal Living & Dining Rooms",
        "Professional Chef's Kitchen",
        "Guest Suite with Private Entrance",
      ],
    },
    {
      level: "1/F",
      name: "First Floor",
      sqft: "4,800 sq. ft.",
      features: [
        "Master Suite with Private Terrace",
        "3 Additional Bedroom Suites",
        "Private Library & Study",
        "Panoramic View Balconies",
      ],
    },
    {
      level: "R/F",
      name: "Roof Terrace",
      sqft: "5,000 sq. ft.",
      features: [
        "Infinity Pool & Jacuzzi",
        "Outdoor Kitchen & Bar",
        "Private Helipad",
        "Zen Garden & Fire Pit",
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#1c1c1c] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            Intelligent Layout Design
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Every square meter meticulously planned to optimize space, light,
            and luxury living experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {floors.map((floor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#333333] backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-[#C89B3C] transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-5xl font-display font-bold text-[#C89B3C]">
                  {floor.level}
                </div>
                <div className="text-2xl font-bold mt-2">{floor.name}</div>
                <div className="text-gray-300">{floor.sqft}</div>
              </div>
              <ul className="space-y-3">
                {floor.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#C89B3C] mr-3"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
