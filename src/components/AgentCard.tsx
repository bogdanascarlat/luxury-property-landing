import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPhone,
  faEnvelope,
  faCommentDots,
  faArrowRight,
  faCalendarCheck,
  faLock,
  faFilePdf,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import type { Agent } from "../types/property";
import { useForm } from "../hooks";

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = () => {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Viewing scheduled:", values);
    alert("Viewing scheduled! Agent will contact you shortly.");
    resetForm();
  };

  return (
    <div className="lg:col-span-4 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#1C1C1C] text-white rounded-xl p-6 shadow-lg"
      >
        <div className="flex items-center mb-5">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C89B3C]/30">
              <img
                src="/assets/img/alexandra.webp"
                alt="Alexandra Chen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#C89B3C] text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="font-display text-xl font-bold">Alexandra Chen</h4>
            <p className="text-[#C89B3C] text-sm font-medium">
              Senior Luxury Specialist
            </p>
            <div className="flex items-center mt-1">
              <div className="flex text-amber-300 text-xs">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="text-xs text-gray-300 ml-2">5.0 (42)</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <a
            href="tel:+971551234567"
            className="flex items-center hover:text-[#C89B3C] transition-colors group"
          >
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#C89B3C]/20 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="text-sm" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-300">Direct Line</div>
              <div className="font-medium">+971 55 123 4567</div>
            </div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-gray-400 group-hover:text-[#C89B3C] transition-colors"
            />
          </a>

          <a
            href="mailto:alexandra@farazzo.com"
            className="flex items-center hover:text-[#C89B3C] transition-colors group"
          >
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#C89B3C]/20 transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-300">Email</div>
              <div className="font-medium">alexandra@farazzo.com</div>
            </div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-gray-400 group-hover:text-[#C89B3C] transition-colors"
            />
          </a>
        </div>

        <button className="w-full bg-[#C89B3C] text-black py-3 rounded-lg font-bold hover:bg-[#C89B3C]/90 transition-all flex items-center justify-center group">
          <FontAwesomeIcon icon={faCommentDots} className="mr-2" />
          Live Chat
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
          />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
      >
        <h4 className="font-display text-xl font-bold text-luxury-navy mb-4">
          Schedule Viewing
        </h4>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/50 focus:border-transparent text-sm"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/50 focus:border-transparent text-sm"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/50 focus:border-transparent text-sm"
              required
            />
          </div>

          <div>
            <select
              name="preferredDate"
              value={values.preferredDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/50 focus:border-transparent text-sm bg-white"
              required
            >
              <option value="" disabled>
                Preferred Date
              </option>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This Week</option>
              <option>Next Week</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1C1C1C] text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-all text-sm flex items-center justify-center group"
          >
            <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
            Book Viewing
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
            />
          </button>
        </form>

        <div className="flex items-center justify-center mt-4 text-gray-500 text-xs">
          <FontAwesomeIcon icon={faLock} className="mr-1.5" />
          Your information is secure & confidential
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-3"
      >
        <a
          href="#"
          className="bg-[#f5f5f5] p-4 rounded-lg text-center hover:bg-[#C89B3C]/10 transition-all group"
        >
          <div className="text-[#C89B3C] mb-2">
            <FontAwesomeIcon icon={faFilePdf} className="text-md" />
          </div>
          <div className="font-bold text-sm">Brochure</div>
          <div className="text-xs text-gray-600">PDF 2.4MB</div>
        </a>

        <a
          href="#"
          className="bg-[#f5f5f5] p-4 rounded-lg text-center hover:bg-[#C89B3C]/10 transition-all group"
        >
          <div className="text-[#C89B3C] mb-2">
            <FontAwesomeIcon icon={faShareAlt} className="text-md" />
          </div>
          <div className="font-bold text-sm">Share</div>
          <div className="text-xs text-gray-600">Email • WhatsApp</div>
        </a>
      </motion.div>
    </div>
  );
};

export default AgentCard;
