import Container from "./Container";
import {
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

const Footer = () => {
  return (
    <main className="flex justify-center items-center mt-20 ">
      <Container>
        <section className=" w-full mx-auto grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-y-16 lg:gap-y-0">
          <div className=" w-full">
            {/* Logo */}
            <a href="/">
              <img src={"/logo.png"} alt="logo" className=" h-10" />
            </a>
            <div className="text-white w-full lg:w-[18rem] font-extralight">
              <p className=" mt-10 text-[.95rem]">
                Classic cuts with modern style.
              </p>

              <div className=" flex items-center gap-x-5 mt-5">
                <a
                  href="https://www.instagram.com/pmcbarbershop/"
                  target="_blank"
                >
                  <FaFacebook
                    className={`hover:text-primary w-8 h-8 hover:scale-125 transition-all duration-300`}
                  />
                </a>

                <a
                  href="https://www.instagram.com/pmcbarbershop/"
                  target="_blank"
                >
                  <FaInstagram
                    className={`hover:text-primary w-8 h-8 hover:scale-125 transition-all duration-300`}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className=" w-full pl-0 lg:pl-10">
            <div className="h-12 flex items-center mb-3 lg:mb-8">
              <h1 className=" text-xl md:text-2xl text-white">Quick Links</h1>
            </div>
            <div className=" flex flex-col text-[.95rem] font-extralight space-y-3">
              <p className="text-white hover:text-primary hover:translate-x-1 inline transition-all duration-300">
                <a href="about"> About Us </a>
              </p>
              <p className="text-white hover:text-primary hover:translate-x-1 inline transition-all duration-300">
                <a href="/services"> Services </a>
              </p>
              <p className="text-white hover:text-primary hover:translate-x-1 inline transition-all duration-300">
                <a href="/works"> Works </a>
              </p>
              <p className="text-white hover:text-primary hover:translate-x-1 inline transition-all duration-300">
                <a href="/clients"> Clients </a>
              </p>
              <p className="text-white hover:text-primary hover:translate-x-1 inline transition-all duration-300">
                <a href="/contact-us"> Contact Us </a>
              </p>
            </div>
          </div>
          <div className=" w-full pl-0 md:pl-10 lg:pl-8">
            <div className="h-12 flex items-center mb-3 lg:mb-8">
              <h1 className="text-xl md:text-2xl text-white">Contact Us</h1>
            </div>
            <div className=" text-white flex flex-col text-[.95rem] font-extralight space-y-3">
              <p className="hover:text-primary hover:translate-x-1 inline transition-all duration-300">
                <a href="tel:+1 940-612-9127">+1 940-612-9127</a>
              </p>
              <p className="hover:text-primary hover:translate-x-1 inline transition-all duration-300">
                500 N Bell Ave #109, Denton, TX 76209, United States
              </p>
              <div className=""></div>
            </div>
          </div>
          <div className=" w-full pl-0 md:pl-10 lg:pl-20 ">
            <div className="h-12 flex items-center mb-3 lg:mb-8">
              <h1 className="text-xl md:text-2xl text-white">Newsletter</h1>
            </div>
            <div className="w-full">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className={`bg-gray-800 text-sm rounded-lg block w-full p-2.5 text-gray-300 focus:outline-none`}
              />
            </div>
            <button className=" bg-primary px-3 py-2 w-full mt-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Fama Babershop. All rights
              reserved.
            </p>
          </div>
        </footer>
      </Container>
    </main>
  );
};

export default Footer;
