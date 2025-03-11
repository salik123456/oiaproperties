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
      <div className="absolute inset-0 flex flex-col justify-around items-center text-white p-4">
        
        <div className='flex tw-justify-between items-center w-full'>
<div className='w-3/4 text-left'>
<h1 className="text-3xl md:text-5xl lg:text-[54px] font-semibold text-left mb-6">
          DISCOVER YOUR MOST COMFORT PLACE FOR YOUR FUTURE LIFE
        </h1>
        <div className="flex flex-wrap w-[70%] rounded-md p-8 bg-[#80808091]  justify-between gap-4 mb-8">
          <div className="flex flex-row items-center border-r pr-3  ">
            <span className="text-4xl font-semibold"><Counter end={5} /></span>
            <span className='ml-2'>POPULAR <br/> AREAS</span>
          </div>
          <div className="flex flex-row items-center ">
          <span className='ml-6 '>PROJECTS <br/> COMPLETED</span>
            <span className="text-4xl font-bold border-l pl-3 ml-2"><Counter end={11} /></span>
         
          </div>
          <div className="flex flex-row items-center ">
          <span className='ml-6 uppercase '>Years <br/> Experience</span>
            <span className="text-4xl font-bold border-l pl-3 ml-2"><Counter end={6} /></span>
         
          </div>
        
        </div>
</div>
<div className='w-1/4 text-right'>
<button className=" bg-secondary text-white px-6 py-2 rounded-full font-semibold">
          All Projects -&gt;
        </button>
</div>

        </div>
  
        <div className="flex flex-col  gap-2 md:gap-4 w-full ">
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
   
      </div>
    </section>
  );
};

export default HeroSec;