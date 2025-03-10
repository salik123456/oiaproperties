// components/Hero.js

import React from 'react';
import Image from 'next/image';
import Counter from '../Global/Counter';


const HeroSec = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] bg-gray-100">
      <Image
        src="/herosec.jpg" // Replace with your image path
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          DISCOVER YOUR MOST COMFORT PLACE FOR YOUR FUTURE LIFE
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold"><Counter end={5} /></span>
            <span>POPULAR AREAS</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold"><Counter end={11} /></span>
            <span>YEARS EXPERIENCE</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold"><Counter end={6} /></span>
            <span>PROJECTS</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full max-w-4xl">
          <div className="flex gap-2">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md font-semibold">
              FOR SALE
            </button>
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md font-semibold">
              FOR RENT
            </button>
            <button className="bg-transparent text-white px-4 py-2 rounded-md font-semibold">
              RESET
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <input
              type="text"
              placeholder="City, community, area"
              className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto"
            />
            <select className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto">
              <option>Property Type</option>
              {/* Add options */}
            </select>
            <select className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto">
              <option>Bedroom</option>
              {/* Add options */}
            </select>
            <select className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto">
              <option>Property Size</option>
              {/* Add options */}
            </select>
            <select className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto">
              <option>Price</option>
              {/* Add options */}
            </select>
            <button className="bg-secondary text-white px-4 py-2 rounded-md font-semibold w-full md:w-auto">
              Search
            </button>
          </div>
        </div>
        <button className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-md font-semibold">
          All Projects -&gt;
        </button>
      </div>
    </section>
  );
};

export default HeroSec;