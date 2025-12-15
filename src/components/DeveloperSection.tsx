import React from "react";
import { motion } from "framer-motion";
import type { Developer } from "../types/property";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faTrophy,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

interface DeveloperSectionProps {
  developer: Developer;
}

const DeveloperSection: React.FC<DeveloperSectionProps> = ({ developer }) => {
  return (
    <section
      id="developer-section"
      className="bg-gradient-dark text-white py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
          >
            <FontAwesomeIcon icon={faCrown} className="text-luxury-gold mr-2" />
            <span className="text-white/90 uppercase tracking-widest text-sm font-bold">
              Prestigious Developer
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Crafted by <span className="text-luxury-gold">Visionaries</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            This masterpiece is brought to you by {developer.name}, the
            visionary developer behind Dubai's most iconic landmarks including
            the Burj Khalifa.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-[#1C1C1C] rounded-3xl p-12 shadow-2xl border border-white/10">
              <div className="text-center">
                <div className="mb-8">
                  <div className="text-white/70 uppercase tracking-widest text-sm mb-4">
                    Official Developer
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <img
                      src="/assets/img/developer-logo-full.png"
                      alt={developer.name}
                      className="h-20 mx-auto"
                    />
                    <div className="mt-6 flex items-center justify-center space-x-4">
                      <span className="px-3 py-1 bg-luxury-gold/20 text-luxury-gold rounded-full text-sm">
                        #1 Developer
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">
                        Since 1997
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-luxury-gold">
                      {developer.projectCount}+
                    </div>
                    <div className="text-white/70 text-sm">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-luxury-gold">
                      {developer.countries}+
                    </div>
                    <div className="text-white/70 text-sm">Countries</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-luxury-gold">
                      {developer.portfolioValue}
                    </div>
                    <div className="text-white/70 text-sm">Portfolio</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-luxury-gold/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-luxury-gold/5 rounded-full blur-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-luxury-gold/30 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-luxury-gold/20 p-3 rounded-xl mr-4">
                    <FontAwesomeIcon
                      icon={faTrophy}
                      className="text-luxury-gold text-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Award-Winning Excellence
                    </h4>
                    <p className="text-gray-300">{developer.awards}</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-luxury-gold/30 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-luxury-gold/20 p-3 rounded-xl mr-4">
                    <FontAwesomeIcon
                      icon={faShieldAlt}
                      className="text-luxury-gold text-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Gold Standard Warranty
                    </h4>
                    <p className="text-gray-300">{developer.warranty}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-luxury-gold/20 to-transparent rounded-2xl border border-luxury-gold/30">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      src="/assets/img/signature.png"
                      alt="CEO Signature"
                      className="h-12 opacity-80"
                    />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-white font-bold">
                      {developer.ceo.name}
                    </h5>
                    <p className="text-gray-300 text-sm">
                      {developer.ceo.title}
                    </p>
                    <p className="text-luxury-gold/80 text-sm mt-1">
                      "{developer.ceo.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Iconic Portfolio
            </h3>
            <p className="text-gray-400">
              Other legendary developments by {developer.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {developer.portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group rounded-xl overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white text-sm font-bold">
                    {project.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
