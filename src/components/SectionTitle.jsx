import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center my-5">
      {/* Small Title */}
      <motion.h3
        className="text-sm text-primary font-semibold uppercase tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h3>

      {/* Subtitle with hover underline */}
      <motion.div
        className="relative group w-fit mx-auto mt-2"
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white text-2xl md:text-3xl font-bold">{subtitle}</h2>

        {/* Underline inside group hover */}
        <div className="absolute left-0 -bottom-1 h-1 bg-primary rounded-full w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
      </motion.div>
    </div>
  );
};

export default SectionTitle;
