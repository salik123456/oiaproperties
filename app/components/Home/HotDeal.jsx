'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: 'HOT DEAL FROM ALDAR',
    description: 'Looking for the best properties in Abu Dhabi? Our curated collection of Aldar\'s hottest deals brings you premium homes at unbeatable prices. Explore world-class designs, prime locations, and exceptional investment opportunities. Aldar\'s hot deals are your gateway to a life of luxury and convenience.',
    imageUrl: '/slides/slideone.jpg', // Replace with your image path
  },
  {
    title: 'LUXURY LIVING IN ABU DHABI',
    description: 'Discover unparalleled luxury and comfort in our exclusive properties. Experience the finest amenities and breathtaking views. Your dream home awaits.',
    imageUrl: '/slides/slidetwo.jpg', // Replace with your image path
  },
  {
    title: 'INVEST IN YOUR FUTURE',
    description: 'Secure your future with prime real estate investments in Abu Dhabi. Explore our portfolio of high-value properties and make a smart investment today.',
    imageUrl: '/slides/slidethree.jpg', // Replace with your image path
  },
];

const HotDeal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
  };

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative container mx-auto px-4 w-full h-[500px] overflow-hidden">
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={currentSlide}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className="absolute inset-0 flex items-center justify-start bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-8 text-white text-left left-6 rounded-sm" style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)' }}> 
            <h2 className="text-5xl lg:max-w-[25rem] font-semibold leading-[1.2] mb-4">{slides[currentSlide].title}</h2>
            <p className="text-lg mb-8 max-w-[40rem]">{slides[currentSlide].description}</p>
            <div className="flex justify-start space-x-4">
              <button className="bg-secondary text-black px-6 py-2 rounded-full font-semibold">
                Explore HOT DEALS
              </button>
              <button className="border border-white px-6 py-2 rounded-full font-semibold">
                Get In Touch →
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HotDeal;