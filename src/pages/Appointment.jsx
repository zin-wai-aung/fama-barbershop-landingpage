import Container from "../components/Container";
const Appointment = () => {
  return (
    <main className=" bg-primary w-full mx-auto">
      <Container>
        <div className=" h-[35rem] md:h-96 flex flex-col gap-5 justify-center items-center">
          <h1 className=" text-white text-3xl font-bold">
            Ready for a Fresh Cut?
          </h1>
          <p className=" text-white text-center w-full md:w-[40rem]">
            Visit PMC Barbershop for premium men's grooming services. Our expert
            barbers are ready to give you a clean, precise cut and a relaxing
            barbershop experience.
          </p>

          <div className=" flex flex-col md:flex-row items-center gap-3 md:gap-y-5">
            <a href="#contact" className=" px-5 py-4 rounded-lg border-2 cursor-pointer border-secondary bg-secondary hover:bg-black">
              Book an Appointment
            </a>
            <a href="#services" className=" px-5 py-4 rounded-lg border-2 cursor-pointer text-secondary hover:text-white border-secondary hover:bg-secondary">
              View Our Services
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Appointment;
