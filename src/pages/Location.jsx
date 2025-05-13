import { ArrowBigLeft, ArrowUpRight, MapPin, Phone } from "lucide-react";
import Container from "../components/Container";
import LocationMap from "../components/LocationMap";
import SectionTitle from "../components/SectionTitle";
import { BiDirections } from "react-icons/bi";

const Location = () => {
  return (
    <main>
      <Container>
        <SectionTitle title="Visit Our Shop" subtitle="Our Location" />{" "}
        <p className=" text-center text-paragraphColor w-full md:w-[40rem] mx-auto mb-10">
          Conveniently located in Denton, TX:{" "}
        </p>
        <div className="flex flex-col md:flex-row gap-8 h-96">
          {/* Map Section (Left) */}
          <LocationMap />

          {/* Contact Information Section (Right) */}
          <div className="bg-secondary rounded-lg shadow-md p-6 md:w-1/2 lg:w-1/3 flex flex-col gap-y-5">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Contact Information
            </h2>
            <div className="mb-4 flex items-start gap-3">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-paragraphColor">
                  Address
                </h3>
                <p className="text-gray-400">
                  500 N Bell Ave #109, Denton, TX 76209, United States
                </p>
              </div>
            </div>
            <div className="mb-4 flex items-start gap-3">
              <Phone className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-paragraphColor">
                  Phone
                </h3>
                <a
                  href={`tel:+1 940-612-9127`}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  +1 940-612-9127{" "}
                </a>
              </div>
            </div>

            <div className=" flex flex-col md:flex-row  items-center gap-3 mt-5">
              <button className=" bg-primary px-3 py-2 rounded-lg hover:bg-primaryDark flex gap-x-3 items-center">
                <ArrowUpRight size={20}/>
                                     Get Directions
              </button>
              <button className=" bg-primary px-3 py-2 rounded-lg hover:bg-primaryDark flex gap-x-3 items-center">
                <Phone size={20} /> Call Us
              </button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Location;
