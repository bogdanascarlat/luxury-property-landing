import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faArrowTrendUp,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import type { Property } from "../types/property";

interface InvestmentSectionProps {
  property: Property;
}

const InvestmentSection: React.FC<InvestmentSectionProps> = ({ property }) => {
  const [downPayment, setDownPayment] = useState(30);
  const [loanTerm, setLoanTerm] = useState(20);

  const propertyValue = property.price.amount;
  const downPaymentAmount = (propertyValue * downPayment) / 100;
  const loanAmount = propertyValue - downPaymentAmount;

  const monthlyInterestRate = 0.04 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const investmentCards = [
    {
      icon: faChartLine,
      title: "Annual ROI",
      value: "8.5%",
      description:
        "Projected annual return based on current market analysis and rental demand",
    },
    {
      icon: faArrowTrendUp,
      title: "Value Appreciation",
      value: "12%",
      description:
        "Average annual appreciation in Downtown Dubai luxury properties",
    },
    {
      icon: faMoneyBillWave,
      title: "Monthly Rental",
      value: "$120K",
      description: "Potential rental income in Dubai's luxury property market",
    },
  ];

  const loanTerms = [15, 20, 25, 30];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-luxury-navy mb-6"
          >
            Smart Investment Opportunity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            This property represents not just a home, but a strategic investment
            in Dubai's most prestigious address.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {investmentCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="text-luxury-gold text-4xl mb-6">
                <FontAwesomeIcon icon={card.icon} />
              </div>
              <h3 className="text-2xl font-bold text-luxury-navy mb-4">
                {card.title}
              </h3>
              <div className="text-5xl font-display font-bold text-luxury-gold mb-4">
                {card.value}
              </div>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mortgage Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1c1c1c] text-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Mortgage Calculator
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block mb-3 text-white/80">Down Payment</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-luxury-gold">
                    {downPayment}%
                  </span>
                </div>
              </div>

              <div>
                <label className="block mb-3 text-white/80">Loan Term</label>
                <div className="grid grid-cols-4 gap-3">
                  {loanTerms.map((term) => (
                    <button
                      key={term}
                      onClick={() => setLoanTerm(term)}
                      className={`py-3 rounded-lg font-bold transition-colors ${
                        loanTerm === term
                          ? "bg-luxury-gold text-black"
                          : "bg-white/10 hover:bg-luxury-gold hover:text-black"
                      }`}
                    >
                      {term}Y
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Property Value</span>
                  <span className="font-bold">
                    {formatCurrency(propertyValue)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Down Payment ({downPayment}%)</span>
                  <span className="font-bold text-luxury-gold">
                    {formatCurrency(downPaymentAmount)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Loan Amount</span>
                  <span className="font-bold">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <div className="border-t border-white/20 pt-4 mt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Monthly Payment</span>
                    <span className="text-luxury-gold">
                      {formatCurrency(monthlyPayment)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;
