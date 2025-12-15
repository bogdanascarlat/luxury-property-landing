import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Calendar } from "lucide-react";
import { calculateMortgage, formatPrice } from "../utils/formatters";

interface MortgageCalculatorProps {
  propertyValue: number;
  defaultDownPayment: number;
  defaultTerm: number;
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({
  propertyValue,
  defaultDownPayment,
  defaultTerm,
}) => {
  const [downPayment, setDownPayment] = useState(defaultDownPayment);
  const [loanTerm, setLoanTerm] = useState(defaultTerm);
  const [results, setResults] = useState(
    calculateMortgage(propertyValue, downPayment, loanTerm)
  );

  useEffect(() => {
    setResults(calculateMortgage(propertyValue, downPayment, loanTerm));
  }, [downPayment, loanTerm, propertyValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-xl"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center">
          <DollarSign className="w-5 h-5 text-luxury-gold" />
        </div>
        <h3 className="text-2xl font-display font-bold">Mortgage Calculator</h3>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-luxury-gold" />
              <span>Down Payment</span>
            </label>
            <span className="text-luxury-gold font-bold">{downPayment}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            step="5"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full accent-luxury-gold"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-luxury-gold" />
              <span>Loan Term</span>
            </label>
            <span className="text-luxury-gold font-bold">{loanTerm}Y</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[15, 20, 25, 30].map((term) => (
              <button
                key={term}
                onClick={() => setLoanTerm(term)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  loanTerm === term
                    ? "bg-luxury-gold text-white"
                    : "bg-luxury-cream text-luxury-charcoal hover:bg-luxury-gold/10"
                }`}
              >
                {term}Y
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-luxury-charcoal/70">Property Value</span>
          <span className="font-bold text-lg">
            {formatPrice(propertyValue)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-luxury-charcoal/70">
            Down Payment ({downPayment}%)
          </span>
          <span className="font-bold text-lg text-luxury-gold">
            {formatPrice(results.downPayment)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-luxury-charcoal/70">Loan Amount</span>
          <span className="font-bold text-lg">
            {formatPrice(results.loanAmount)}
          </span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="font-semibold">Monthly Payment</span>
          <span className="font-bold text-2xl text-luxury-gold">
            {formatPrice(results.monthlyPayment)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default MortgageCalculator;
