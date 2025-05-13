import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Do I need an appointment or can I walk in?",
    answer:
      "We welcome both appointments and walk-ins. However, we recommend booking in advance to ensure your preferred time slot, especially on weekends. You can book through our website, by phone, or via WhatsApp.",
  },
  {
    question: "How long does a typical haircut take?",
    answer:
      "A typical haircut takes around 30-45 minutes. However, this can vary depending on the complexity of the style and the length of your hair.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept cash, credit cards (Visa, Mastercard, American Express), and mobile payments.",
  },
  {
    question: "Do you offer any loyalty programs or discounts?",
    answer:
      "Yes, we offer a loyalty program for our regular customers.  Ask our staff for details.",
  },
  {
    question: "What hair products do you use and sell?",
    answer:
      "We use a range of high-quality hair products from leading brands.  We also have a selection of products available for purchase so you can maintain your style at home.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-700 last:border-none py-4"
        >
          <div
            className="flex items-center justify-between w-full cursor-pointer py-2"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg font-medium text-gray-100">
              {item.question}
            </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </motion.div>
          </div>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-300 py-2" // Added padding to answer
              >
                {item.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className=" py-12">
      <FAQAccordion />
    </div>
  );
};

export default App;
