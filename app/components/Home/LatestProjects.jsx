'use client';

import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../Global/ProjectCard";

const LatestProjects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 'project-1',
      imgUrls: ['/project-gardenia.webp', '/project-2.png', '/property-3.jpg'], // Carousel images
      title: 'Gardenia Bay',
      price: '805,000 AED',
      location: 'Abu Dhabi, Yas Island',
    },
    {
      id: 'project-2',
      imgUrls: ['/project-2.png', '/property-3.jpg', '/project-gardenia.webp'],
      title: 'Dubai Down Town',
      price: '950,000 AED',
      location: 'Dubai, Downtown',
    },
    {
      id: 'project-3',
      imgUrls: ['/property-3.jpg', '/project-gardenia.webp', '/project-2.png'],
      title: 'Sharjah Al Khan',
      price: '1,200,000 AED',
      location: 'Sharjah, Al Khan',
    },
  ];

  return (
    <section className='p-3' id="latest-projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col`}
      >
        <h2 className="text-5xl font-semibold text-dark flex items-center mb-8">
          <span className="w-1 h-[50px] bg-secondary mr-3"></span>
          LATEST PROJECTS
        </h2>
        <div className="flex lg:flex-row flex-col min-h-[400px] gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              imgUrls={project.imgUrls}
              title={project.title}
              price={project.price}
              location={project.location}
              projects={projects}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-gray-200 px-6 py-3 rounded-full">
            All Properties →
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default LatestProjects;