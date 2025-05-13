import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <main>
      <Container>
        <SectionTitle title="Book Your Appointment" subtitle="Contact Us" />{" "}
        <p className=" text-center text-paragraphColor w-full md:w-[40rem] mx-auto mb-10">
          Ready for a fresh look? Book your appointment today or contact us for
          any questions. Fill out the form below, and we'll get back to you as
          soon as possible.
        </p>
        <div className=" flex flex-col md:flex-row justify-between items-start gap-10 ">
          <div className=" w-full md:w-2/3 order-2 md:order-1 p-10 bg-secondary/90 rounded-xl  min-h-[39rem]">
            <ContactForm />
          </div>
          <div className=" w-full md:w-1/3 order-1 md:order-2 p-10 bg-secondary/90 rounded-xl min-h-auto  md:min-h-[39rem]">
            <ContactInfo />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Contact;
