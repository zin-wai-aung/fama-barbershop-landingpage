import { MapPin, Phone, Clock } from "lucide-react";

function ContactInfo() {
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

      <div className="flex items-center mb-3">
        <MapPin className="w-6 h-6 text-primary mr-5" />
        <div>
          <h3 className="font-medium">Address</h3>
          <p className="text-paragraphColor">
            518 Acme St unit 101, Denton, TX 76205, United States
          </p>
        </div>
      </div>

      <div className="flex items-center mb-3">
        <Phone className="w-5 h-5 text-primary mr-5" />
        <div>
          <h3 className="font-medium">Phone</h3>
          <p className="text-paragraphColor">+19408081569</p>
        </div>
      </div>

      <div className="flex items-center">
        <Clock className="w-5 h-5 text-primary mr-5" />
        <div>
          <h3 className="font-medium">Business Hours</h3>
          <p className="text-paragraphColor">Mon-Fri: 9:00 AM - 7:00 PM</p>
          <p className="text-paragraphColor">Sat: 9:00 AM - 5:00 PM</p>
          <p className="text-paragraphColor">Sun: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
