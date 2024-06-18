import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  'https://static.wixstatic.com/media/e9843a_1fb33d636397407c86c13cc7153a0282~mv2.png/v1/fill/w_1041,h_586,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e9843a_1fb33d636397407c86c13cc7153a0282~mv2.png',
  'https://static.wixstatic.com/media/e9843a_5dcbdfca483d42e19bf4c8eaa9acc35d~mv2.jpg/v1/fill/w_1403,h_586,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e9843a_5dcbdfca483d42e19bf4c8eaa9acc35d~mv2.jpg',
  'https://static.wixstatic.com/media/e9843a_2a489a2aee2a4995aef92f4830fdc06c~mv2.jpg/v1/fill/w_1585,h_586,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e9843a_2a489a2aee2a4995aef92f4830fdc06c~mv2.jpg',
  'https://static.wixstatic.com/media/e9843a_f9094743e7994518a23f8dc240e8c766~mv2.jpg/v1/fill/w_1466,h_586,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e9843a_f9094743e7994518a23f8dc240e8c766~mv2.jpg'
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative w-full h-96 md:h-screen overflow-hidden p-8">
      <div className="flex justify-center items-center h-full relative">
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
          <FaChevronRight />
        </button>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`w-full h-full object-cover transition-opacity duration-1000 absolute ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
