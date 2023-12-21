// src/components/Carousel.js
import { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = ({ images, visibleItems = 3 }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const getImageStyle = (index) => {
    const offset = index - currentImage;
    const translateValue = offset * (100 / visibleItems);
    return {
      transform: `translateX(${translateValue}%)`,
      transition: 'transform 0.5s ease',
    };
  };

  return (
    <div className='carousel-container'>
      <button onClick={prevImage}>Anterior</button>
      <div className='carousel-inner'>
        {images.map((image, index) => (
          <div
            key={index}
            className='carousel-item'
            style={getImageStyle(index)}
          >
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={nextImage}>Siguiente</button>
    </div>
  );
};

export default Carousel;
