import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";


//pages
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Price from "./pages/Price";
import Hero from "./components/Hero";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import Appointment from "./pages/Appointment";

const App = () => {
  const aboutRef = useRef(null);
  const topRef = useRef(null);

  const [showScrollTop, setShowScrollTop] = useState(false);


  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className=" bg-black text-white" ref={topRef}>
      <Navbar />
      <Hero />
      {/* Down Arrow Scroll Button */}
      <div
        className="flex justify-center py-8 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-primary"
        >
          <ArrowDown />
        </motion.div>
      </div>
      {/* 👇 Pass the ref to the About section */}
      <div id="about" ref={aboutRef} className=" my-32">
        <About />
      </div>{" "}
      <div id="services" className=" my-32">
        <Services />
      </div>
      <div className=" my-32">
        <Price />
      </div>
      <div id="gallery" className=" my-32">
        <Gallery />
      </div>
      <div className=" my-32">
        <Location />
      </div>
      <div className=" my-32 mt-[30rem] md:mt-64">
        <FAQ />
      </div>
      <div id="contact" className=" my-32">
        <Contact />
      </div>
      <Appointment />
      <Footer /> {/* scroll  to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 cursor-pointer bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300 z-50"
        >
          <ArrowDown className="rotate-180" />
        </button>
      )}
    </main>
  );
};

export default App;
