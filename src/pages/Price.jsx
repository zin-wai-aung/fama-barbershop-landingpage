import Container from "../components/Container";
import PriceCard from "../components/PriceCard";
import SectionTitle from "../components/SectionTitle";

const Price = () => {

  const priceLists = [
    {
      title: "Classic Services",
      highlight: true,
      price: "$25/mo",
      items: [
        "Men's Haircut",
        "Kids Haircut (12 & under)",
        "Senior Haircut (65+)",
        "Military/First Responder Cut",
        "Basic Beard Trim",
        "Neck & Line Cleanup (between cuts)",
      ],
    },
    {
      title: "Premium Services",
      highlight: false,
      price: "$35/mo",
      items: [
        "Haircut & Beard Combo",
        "Hot Towel Shave",
        "Full Beard Shaping & Design",
        "Color Camo (Gray Blending)",
        "Hair & Scalp Treatment",
        "Head Shave with Hot Towel",
      ],
    },
    {
      title: "Packages",
      highlight: false,
      price: "$50/mo",
      items: [
        "The Works (Cut, Shave, Treatment)",
        "Father & Son Combo",
        "Groom's Package",
        "Monthly Membership (2 cuts/mo)",
        "First-Time Client Special",
        "Loyalty Program",
      ],
    },
  ];
  
  
  return (
    <main>
      <Container>
        {/* Service Section */}
        <section>
          <SectionTitle
            title="Quality Barbering at Fair Prices"
            subtitle="Our Service Prices"
          />{" "}
          <p className=" text-center text-paragraphColor w-full md:w-[40rem] mx-auto mb-10">
            Professional barbering services to keep you looking sharp for
            everyday confidence or special occasions.{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {priceLists.map((service, index) => (
              <PriceCard
                key={index}
                highlight={service.highlight}
                title={service.title}
                price={service.price}
                items={service.items}
              />
            ))}{" "}
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Price;
