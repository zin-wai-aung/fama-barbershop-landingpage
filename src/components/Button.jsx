import { motion } from "framer-motion";

const Button = ({ text, onClick, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`shadow-[0_0_0_3px_#000000_inset] px-6 py-3 border border-black bg-primary hover:bg-primaryDark text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
