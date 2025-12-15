import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faVideo,
  faShieldAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="assets/img/penthouse.webp"
          alt="Luxury Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/95 to-[#1C1C1C]/85"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-6xl font-bold text-white mb-8"
        >
          Own Your Piece of Dubai Skyline
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          This is more than a property—it's a statement. A legacy. Your private
          sanctuary in the clouds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="bg-[#C89B3C] text-black px-10 py-4 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-[#C89B3C]/90 transition-all transform hover:-translate-y-1">
            <FontAwesomeIcon icon={faHandshake} className="mr-2" /> Make an
            Offer
          </button>
          <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-all transform hover:-translate-y-1">
            <FontAwesomeIcon icon={faVideo} className="mr-2" /> Virtual
            Consultation
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-white/70"
        >
          <p>
            <FontAwesomeIcon icon={faShieldAlt} className="mr-2" /> All viewings
            are private and confidential
          </p>
          <p className="mt-2">
            <FontAwesomeIcon icon={faLock} className="mr-2" /> Secure
            transaction process guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
