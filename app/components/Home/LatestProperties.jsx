'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import PropertyCard from '../Global/PropertyCard';

const LatestProperties = () => {
  const [activeTab, setActiveTab] = useState('forSale'); // 'forSale' or 'forRent'

  const properties = {
    forSale: [
      {
        id: 1,
        images: ['/project-1.jpg', '/project-2.png', '/property-3.jpg'], // Carousel images
        type: 'For Sale',
        price: '$1,249,000',
        buildingName: 'SkyHomes Holiday Homes villas',
        location: 'Abu Dhabi, Yas Island',
        bedrooms: '3 Bed',
        bathrooms: '3 Bath',
        size: '1,142 FT',
        agentName: 'Jane Smith',
      },
      {
        id: 2,
        images: ['/project-2.png', '/property-3.jpg', '/project-1.jpg'],
        type: 'For Sale',
        price: '$1,249,000',
        buildingName: 'Noya Viva',
        location: 'Abu Dhabi, Yas Island',
        bedrooms: '3 Bed',
        bathrooms: '3 Bath',
        size: '1,142 FT',
        agentName: 'Jane Smith',
      },
      // ... more for sale properties
    ],
    forRent: [
      {
        id: 5,
        images: ['/featured-bg.webp', '/project-gardenia.webp', '/project-1.jpg'],
        type: 'For Rent',
        price: '$1,500/month',
        buildingName: 'Rental Apartment',
        location: 'Dubai Marina',
        bedrooms: '2 Bed',
        bathrooms: '2 Bath',
        size: '900 FT',
        agentName: 'John Doe',
      },
      // ... more for rent properties
    ],
  };

  const currentProperties = properties[activeTab];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-semibold text-dark flex items-center mb-8">
          <span className="w-1 h-[50px] bg-secondary mr-3"></span>
          LATEST PROPERTIES
        </h2>
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 rounded-l-md cursor-pointer ${activeTab === 'forSale' ? 'bg-secondary text-black' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('forSale')}
          >
            FOR SALE
          </button>
          <button
            className={`px-4 py-2 rounded-r-md cursor-pointer ${activeTab === 'forRent' ? 'bg-secondary text-black' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('forRent')}
          >
            FOR RENT
          </button>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {currentProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard {...property} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-8">
          <button className="border border-secondary text-secondary px-6 py-3 rounded-md font-semibold">
            All Properties →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProperties;