import FAQAccordion from "../components/FAQAccordion";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
const FAQ = () => {
  return (
    <main>
      <Container>
        <SectionTitle
          title="Common Questions"
          subtitle="Frequently Asked Questions"
        />{" "}
        <p className=" text-center text-paragraphColor w-full md:w-[40rem] mx-auto">
          Answers to common questions about our barbershop services.
        </p>
        <FAQAccordion />
      </Container>
    </main>
  );
};

export default FAQ;
