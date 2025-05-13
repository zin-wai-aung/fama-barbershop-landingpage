import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import Container from "./Container";

const Hero = () => {
  return (
    <main>
      <Container>
        <section className="relative min-h-screen w-full">
          {/* ✅ Fullscreen Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* ✅ Hero Content */}
          <div className="relative z-10 p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center min-h-screen">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-primary"
            >
              Classic Cuts, Modern Style
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl"
            >
              Premium Barber Shop
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-paragraphColor mb-8 md:mb-10 max-w-3xl"
            >
              At Fama Barbershop, we combine traditional barbering techniques
              with modern styling to give you the perfect look. Our experienced
              barbers deliver precision cuts, beard grooming, and relaxing hot
              towel shaves in a classic barbershop atmosphere.
            </motion.p>

            <div className="flex items-center gap-4 text-paragraphColor mb-8 md:mb-10">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-base sm:text-lg">Denton, TX</span>
            </div>

            <div className="flex flex-col items-center sm:flex-row gap-4">
              <a
                href="#"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-gray-900 px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Our Services
              </a>
              <a
                href="#"
                className="bg-primary text-gray-900 hover:bg-primaryDark px-8 py-3 rounded-full transition-colors duration-300 text-base sm:text-lg font-semibold"
              >
                Book Now
              </a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Hero;
