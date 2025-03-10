import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'; // Import icons

const PropertyCard = ({
  images, // Array of images for the carousel
  type,
  price,
  buildingName,
  location,
  bedrooms,
  bathrooms,
  size,
  agentName,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md relative"> {/* Added relative */}
      <div className="relative h-60">
        <Image
          src={images[currentImageIndex]} // Display the current image
          alt={buildingName}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-2 left-2 bg-secondary text-white px-3 py-1 rounded-md text-sm">
          {type}
        </div>
        {/* Arrows for navigation */}
        <button
          onClick={prevImage}
          className="absolute cursor-pointer top-1/2 left-2 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextImage}
          className="absolute cursor-pointer  top-1/2 right-2 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full"
        >
          <IoIosArrowForward />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {price}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">BUILDING NAME</span>
          <br />
          {buildingName}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          {location}
        </p>
        <div className="flex space-x-2 mb-4">
          <span className="text-sm text-gray-600">{bedrooms}</span>
          <span className="text-sm text-gray-600">{bathrooms}</span>
          <span className="text-sm text-gray-600">{size}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/agent.jpg" // Replace with your agent image path
              alt={agentName}
              width={30}
              height={30}
              className="rounded-full mr-2"
            />
            <span className="text-sm font-semibold text-gray-800">
              {agentName}
            </span>
          </div>
          <div>
            <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm mr-2">
              Call
            </button>
            <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
              Email
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 border-t">
        <button className="text-secondary font-semibold">
          Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;