import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ImageGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const images = [
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=3088&auto=format&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1599198547792-5c8c4ea7b48d?q=80&w=3072&auto=format&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1599234108550-cca636667571?q=80&w=3072&auto=format&fit=crop",
    },
  ];

  const handleImageClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {images.map((image, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer overflow-hidden rounded-md shadow-md group"
          onClick={() => handleImageClick(i)}
        >
          <img
            src={image.src}
            alt={`Barbershop Image ${i + 1}`}
            className="w-full h-auto object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white flex items-center gap-x-2 bg-secondary/70 px-4 py-1 rounded-full">
              <span>🔎</span>
              <p className="text-sm font-medium ">View</p>
            </div>
          </div>
        </motion.div>
      ))}

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={index}
        />
      )}
    </div>
  );
};

export default ImageGallery;
