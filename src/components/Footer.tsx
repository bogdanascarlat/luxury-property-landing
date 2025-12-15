import React from "react";

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "FARAZZO",
      links: [
        { label: "About Farazzo", href: "/about" },
        { label: "Our Vision", href: "/vision" },
        { label: "Manifesto", href: "/manifesto" },
        { label: "Founder", href: "/founder" },
        { label: "Press & Media Kit", href: "/press" },
        { label: "Corporate Identity", href: "/corporate-identity" },
        { label: "Global Headquarters (Dubai)", href: "/headquarters" },
        { label: "International Offices", href: "/offices" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "REAL ESTATE",
      links: [
        { label: "Residential Properties", href: "/real-estate/residential" },
        { label: "Commercial Properties", href: "/real-estate/commercial" },
        { label: "Investment Properties", href: "/real-estate/investment" },
        { label: "Global Markets", href: "/real-estate/markets" },
        { label: "Signature Properties", href: "/real-estate/signature" },
        { label: "Private Listings", href: "/real-estate/private" },
        { label: "Agents & Partners", href: "/real-estate/agents" },
        { label: "Submit Property", href: "/real-estate/submit" },
      ],
    },
    {
      title: "FASHION & BEAUTY",
      links: [
        { label: "Fashion", href: "/fashion" },
        { label: "Haute Couture", href: "/fashion/haute-couture" },
        { label: "Designer Clothing", href: "/fashion/clothing" },
        { label: "Accessories", href: "/fashion/accessories" },
        { label: "Footwear", href: "/fashion/footwear" },
        { label: "Designers", href: "/fashion/designers" },
        { label: "Exclusive Drops", href: "/fashion/drops" },
        { label: "Beauty", href: "/beauty" },
        { label: "Skincare", href: "/beauty/skincare" },
        { label: "Makeup", href: "/beauty/makeup" },
        { label: "Wellness Spa", href: "/beauty/spa" },
      ],
    },
    {
      title: "LIFESTYLE & EXPERIENCES",
      links: [
        { label: "Travel & Leisure", href: "/lifestyle/travel" },
        { label: "Entertainment", href: "/lifestyle/entertainment" },
        { label: "Influencers", href: "/lifestyle/influencers" },
        { label: "Personal Services", href: "/lifestyle/services" },
        { label: "Marketing Services", href: "/lifestyle/marketing" },
        { label: "Culture & Art", href: "/lifestyle/art" },
        { label: "Global Events", href: "/lifestyle/events-global" },
        { label: "Private Events", href: "/lifestyle/events-private" },
        { label: "RSVP", href: "/lifestyle/rsvp" },
      ],
    },
    {
      title: "WELLNESS, HOME & INVESTMENT",
      links: [
        { label: "Health & Wellness", href: "/wellness/health" },
        { label: "Medical Services", href: "/wellness/medical" },
        { label: "Fitness & Nutrition", href: "/wellness/fitness" },
        { label: "Mental Wellness", href: "/wellness/mental" },
        { label: "Home & Interior", href: "/home" },
        { label: "Interior Design", href: "/home/design" },
        { label: "Home Technology", href: "/home/tech" },
        { label: "Luxury Amenities", href: "/home/amenities" },
        { label: "Crypto & Investment", href: "/crypto" },
        { label: "Cryptocurrency", href: "/crypto/cryptocurrency" },
        { label: "Trading Services", href: "/crypto/trading" },
        { label: "Investment Solutions", href: "/crypto/investment" },
        { label: "FZZ Ecosystem", href: "/crypto/fzz" },
      ],
    },
    {
      title: "MEMBERSHIP & LEGAL",
      links: [
        { label: "Membership Plans", href: "/membership/plans" },
        { label: "Member Dashboard", href: "/membership/dashboard" },
        { label: "Affiliates & Influencers", href: "/affiliates" },
        { label: "Rewards (FZZ)", href: "/rewards" },
        { label: "Blog / Insights", href: "/blog" },
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Terms & Conditions", href: "/legal/terms" },
        { label: "Cookies Policy", href: "/legal/cookies" },
        { label: "Legal Notices", href: "/legal/notices" },
      ],
    },
  ];

  return (
    <footer className="site-footer bg-[#1c1c1c] text-gray-50 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-20">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-column">
              <h4 className="font-bold uppercase text-sm text-white mb-5 tracking-wider font-sans">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="mega-menu-link text-gray-400 text-sm hover:text-[#C89B3C] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom-bar border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="footer-copyright mb-4 md:mb-0">
            <p>Farazzo © 2025 — A Global Luxury Ecosystem Built in Dubai.</p>
          </div>
          <div className="footer-legal-links flex space-x-6">
            <span>Worldwide | English</span>
            <a
              href="/support"
              className="hover:text-[#C89B3C] transition-colors"
            >
              Customer Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
