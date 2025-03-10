import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '@/utils/motion';
import Image from 'next/image';

const ProjectCard = ({ id, imgUrls, title, price, location, projects, activeProject, setActiveProject }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (activeProject === id) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgUrls.length);
      }, 3000); // Change image every 3 seconds
    }
    return () => clearInterval(interval);
  }, [activeProject, id, imgUrls.length]);

  return (
    <motion.div
      variants={fadeIn('right', 'spring', projects.findIndex(p => p.id === id) * 0.5, 0.75)}
      className={`relative ${
        activeProject === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[400px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden rounded-lg`}
      onClick={() => setActiveProject(id === activeProject ? null : id)}
    >
      <Image width={200} height={200} src={imgUrls[currentImageIndex]} alt={title} className="absolute w-full h-full object-cover" />

      {activeProject !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-10 bottom-4 left-4">{title}</h3>
      ) : (
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
          <div className="text-white">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-sm mb-2">{location}</p>
            <p className="text-lg font-bold mb-4">{price}</p>
            <button className="bg-secondary text-black px-4 py-2 rounded-md">Discover Projects</button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;