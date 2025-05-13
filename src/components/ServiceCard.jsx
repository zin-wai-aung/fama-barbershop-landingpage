
const ServiceCard = ({ icon, title, description, items }) => {
  return (
    <div className="service-card relative group overflow-hidden md:h-[28rem] lg:h-[25rem] rounded-xl border border-neutral-700 bg-secondary hover:border-primary/30 px-6 py-14  shadow-lg transition-all duration-300">
      {/* Top border animation */}
      <div className="line-hover absolute top-0 left-0 h-[3px] bg-primary transition-all duration-500 group-hover:w-full w-0" />

      {/* Icon */}
      <div className="w-14 h-14 mb-4 bg-[#2a2a2a] rounded-xl flex items-center justify-center">
        <img
          src={icon}
          alt={title}
          className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl text-white group-hover:text-primary font-bold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-paragraphColor text-sm my-5">{description}</p>

      {/* List Items */}
      {items?.length > 0 && (
        <ul className="text-paragraphColor text-sm list-disc list-inside space-y-1">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
