import { motion } from "framer-motion";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import Container from "./Container";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Handle navbar visibility based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY && currentScrollY > 500) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
      }}
      className={`fixed backdrop-blur-md w-full z-50 shadow-sm transform transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container>
        <nav>
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <motion.a
              href="/"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <img src={"/logo.png"} alt="logo" className=" h-10" />
            </motion.a>

            {/* Navigation Links */}
            <ul className={`hidden md:flex items-center space-x-10`}>
              {navItems.map((item) => (
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  key={item.href}
                >
                  <a
                    href={item.href} // Use correct href from navItems
                    className="text-white hover:text-primary cursor-pointer transition duration-300"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Toggle Button */}
            <button
              className="block md:hidden text-white focus:outline-none cursor-pointer"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu Items */}
          {isMobileMenuOpen && (
            <ul className="absolute left-0  flex flex-col w-full md:hidden mx-auto bg-secondary min-h-screen shadow-sm rounded-lg p-5 space-y-8">
              {navItems.map((item) => (
                <li key={item.href} className="w-full">
                  <a
                    href={item.href} // Use correct href from navItems
                    className="text-white hover:text-primary transition duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </Container>
    </motion.header>
  );
}
