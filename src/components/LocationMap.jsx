import {motion} from "framer-motion"
const LocationMap = () => {
  const mapEmbedUrl =
    "https://www.google.com/maps?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209,+United+States&output=embed";

  return (
    <motion.div
      className="rounded-lg overflow-hidden shadow-md flex-1 min-h-[300px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <iframe
        title="Location Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        src={mapEmbedUrl}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
};

export default LocationMap;