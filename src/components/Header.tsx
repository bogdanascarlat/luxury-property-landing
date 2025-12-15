import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MegaMenu from "./MegaMenu";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const mainNavItems = [
    { label: "About", href: "/about", menuKey: "about" },
    { label: "Real Estate", href: "/real-estate", menuKey: "real-estate" },
    {
      label: "Fashion & Beauty",
      href: "/fashion-beauty",
      menuKey: "fashion-beauty",
    },
    { label: "Lifestyle", href: "/lifestyle", menuKey: "lifestyle" },
    {
      label: "Wellness & Home",
      href: "/wellness-home",
      menuKey: "wellness-home",
    },
    { label: "Crypto", href: "/crypto", menuKey: "crypto" },
    { label: "Humanity", href: "/humanity", menuKey: "humanity" },
    { label: "Membership", href: "/membership", menuKey: "membership" },
  ];

  return (
    <motion.header
      className="absolute top-0 left-0 right-0 z-50 text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseLeave={() => setActiveMenu("")}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm border-b border-white/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <nav className="flex justify-between items-center h-24">
          <a
            href="/"
            className="font-display text-4xl font-bold text-white flex-shrink-0"
          >
            FARAZZO
          </a>

          <ul className="hidden lg:flex items-center justify-center flex-grow space-x-6">
            {mainNavItems.map((item) => (
              <li
                key={item.label}
                onMouseEnter={() => setActiveMenu(item.menuKey)}
                className="relative"
              >
                <a
                  href={item.href}
                  className="flex items-center uppercase text-xs font-medium tracking-wider text-white hover:text-[#C89B3C] transition-colors py-2"
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3 ml-1.5 opacity-70" />
                </a>
                {activeMenu === item.menuKey && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C89B3C]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <ul className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            <li>
              <a
                href="/contact"
                className="uppercase text-xs font-medium tracking-wider hover:text-[#C89B3C] transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="bg-[#004488] text-white px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-opacity-80 transition-all"
              >
                My Account
              </a>
            </li>
          </ul>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-white hover:text-[#C89B3C] transition"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <MegaMenu activeMenu={activeMenu} onClose={() => setActiveMenu("")} />

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-black/95"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {mainNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-white hover:text-[#C89B3C] transition uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="/contact"
                  className="block w-full text-center px-6 py-3 text-sm font-semibold text-white border border-white/30 rounded hover:bg-white/10 transition uppercase tracking-wider"
                >
                  Contact
                </a>

                <a
                  href="/login"
                  className="block w-full text-center bg-[#0f4583] text-white px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-opacity-80 transition-all"
                >
                  My Account
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
