import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import {motion} from "framer-motion"
const About = () => {
  return (
    <main>
      <Container>
        <SectionTitle title="Our Story" subtitle="About Fama Barbershop" />{" "}
        <p className=" text-center text-paragraphColor w-full md:w-[40rem] mx-auto mb-10">
          Our mission is to deliver exceptional haircuts and grooming services
          in a welcoming, classic barbershop environment.{" "}
        </p>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1542330824862-c1db95917e69?q=80&w=2925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your own image
              alt="About us"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <p className="text-paragraphColor mb-4">
              Fama Barbershop is where tradition meets modern style. Our mission
              is to provide a premium grooming experience for men of all ages.
              With a team of skilled barbers and a dedication to excellence,
              we’re more than just a haircut — we’re a lifestyle.
            </p>
            <p className="text-paragraphColor">
              From classic cuts to modern fades and luxury beard care, every
              service is delivered with precision and style. Visit us and see
              why our clients keep coming back.
            </p>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}

export default About