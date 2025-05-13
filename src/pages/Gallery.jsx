import Container from "../components/Container";
import ImageGallery from "../components/ImageGallery";
import SectionTitle from "../components/SectionTitle";
const Gallery = () => {
  return (
    <main>
      <Container>
        <SectionTitle
          title="Our Work & Shop"
          subtitle="Our Barbershop Gallery"
        />{" "}
        <p className=" text-center text-paragraphColor w-full md:w-[40rem] mx-auto mb-10">
          Take a look at our shop atmosphere and the quality cuts we deliver to
          our clients.{" "}
        </p>
        <ImageGallery/>
      </Container>
    </main>
  );
};

export default Gallery;
