import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const PriceCard = ({ title, price, items, highlight }) => {
  return (
    <div
      className={`bg-secondary rounded-2xl shadow-2xl border ${
        highlight ? "border-primary" : "border-primary/40"
      } hover:border-primary p-6 w-full max-w-sm mx-auto flex flex-col justify-between min-h-[500px] transition-transform duration-300 hover:scale-105`}
    >
      {/* Badge space - reserved for consistent alignment */}
      <div className="h-[32px] mb-4 relative">
        {highlight && (
          <div className="bg-primary absolute right-0 text-gray-900 p-3 rounded-md text-sm font-semibold self-end w-fit">
            Most Popular
          </div>
        )}
      </div>

      {/* Title */}
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>

      {/* Price */}
      <div className="flex items-center mb-6">
        <span className="text-4xl font-bold text-white mr-2">$</span>
        <span className="text-3xl font-bold text-white">{price}</span>
        <span className="text-gray-400">/mo</span>
      </div>

      {/* Features List */}
      <div className="text-gray-300 space-y-3 mb-8 flex-1">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-primary mr-2" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-6 py-3 ${
          highlight ? "bg-primary" : "bg-primary/20"
        } hover:bg-primary text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400`}
      >
        Book Now
      </motion.button>
    </div>
  );
};

export default PriceCard;
