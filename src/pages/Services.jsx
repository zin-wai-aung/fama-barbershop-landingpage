import Container from '../components/Container';
import CommitmentCard from '../components/CommitmentCard'
import ServiceCard from '../components/ServiceCard'
import SectionTitle from "../components/SectionTitle";

const Services = () => {

  const commitments = [
    {
      type: "User",
      title: "Expert Barbers",
      description:
        "Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.",
    },
    {
      type: "Scissors",
      title: "Premium Tools & Products",
      description:
        "We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.",
    },
    {
      type: "Home",
      title: "Classic Barbershop Experience",
      description:
        "Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.",
    },
  ];


  const services = [
    {
      icon: "/icons/hair-styling-icon.svg",
      title: "Haircuts",
      description:
        "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
      items: ["Classic Cuts", "Modern Styles"],
    },
    {
      icon: "/icons/makeup-icon.svg",
      title: "Beard Services",
      description:
        "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
      items: ["Beard Trims", "Beard Shaping"],
    },
    {
      icon: "/icons/skincare-icon.svg",
      title: "Premium Services",
      description:
        "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
      items: ["Hair Coloring", "Scalp Treatments"],
    },
  ];
  

  
  return (
    <main>
      <Container>
        {/* Service Section */}
        <section>
          <SectionTitle
            title="Premium Grooming"
            subtitle="Our Barber Services"
          />{" "}
          <p className=" text-center text-paragraphColor w-full md:w-[40rem] mx-auto mb-10">
            Professional barbering services to keep you looking sharp for
            everyday confidence or special occasions.{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                items={service.items}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>
        {/* Commitment Section */}

        <section className=" mt-64">
          <SectionTitle
            title="Our Commitment"
            subtitle="Why Choose Fama Barbershop?"
          />{" "}
          <p className=" text-center text-paragraphColor w-full md:w-[40rem] mx-auto mb-10">
            What makes us the premier barbershop in Denton, TX.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <CommitmentCard
                key={index}
                type={commitment.type}
                title={commitment.title}
                description={commitment.description}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

export default Services