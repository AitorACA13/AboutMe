// src/components/Carousel.js
import { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = ({ images, visibleItems = 5 }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < visibleItems; i++) {
      const index = (currentImage + i) % images.length;
      result.push(images[index]);
    }
    return result;
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-inner'>
        {getVisibleImages().map((image, index) => (
          <div key={index} className='carousel-item'>
            <div className='divimg'>
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
