import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import Hero from "../components/Hero";

const Home = () => {
  const nextSectionRef = useRef < HTMLDivElement > null;

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* Down Arrow Indicator */}
      <Hero/>
      <div className="flex justify-center py-8">
        <motion.div
          onClick={scrollToNextSection}
          title="Scroll to next section" // Added title for accessibility
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-primary"
          >
            <ArrowDown />
          </motion.div>
        </motion.div>
      </div>

      {/* Next Section (Placeholder) */}
      <section ref={nextSectionRef} className="min-h-screen bg-gray-800 p-8">
        <h2 className="text-3xl font-bold text-white mb-8">Our Services</h2>
        <p className="text-paragraphColor">
          This is a placeholder for the next section. You would replace this
          with the actual content of your services section.
        </p>
      </section>
    </main>
  );
}

  export default Home;