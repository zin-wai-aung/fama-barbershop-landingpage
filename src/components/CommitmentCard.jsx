import { motion } from "framer-motion";

const CommitmentCard = ({ type, title, description }) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative overflow-hidden bg-secondary text-white rounded-xl border border-neutral-700 p-10 max-w-md mx-auto group"
    >
      {/* Animated Border Line */}
      <motion.div
        variants={{
          rest: {
            width: "4px",
            height: "100%",
            left: 0,
            top: 0,
          },
          hover: {
            width: "100%",
            height: "4px",
            left: 0,
            top: 0,
          },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute bg-primary z-10"
      />

      {/* Content */}
      <div className="bg-primary/30 group-hover:bg-primary group-hover:text-white text-primary px-3 py-2 rounded-lg inline-block mb-4 relative z-20">
        {type}
      </div>
      <h3 className="text-2xl font-bold my-5 relative z-20"> {title} </h3>
      <p className="text-paragraphColor relative z-20">{description}</p>
    </motion.div>
  );
};

export default CommitmentCard;
