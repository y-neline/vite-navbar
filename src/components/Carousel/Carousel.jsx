import React, { useState, useEffect } from 'react';
import "./Carousel.css";

const Carousel = ({ slides, interval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const slideCount = slides.length; // Get the total number of slides

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideCount) % slideCount);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
  };

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  const transform = `translateX(-${currentSlide * 100}%)`; // Calculate slide offset

  useEffect(() => {
    const timer = setInterval(() => {
      if (autoplay) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, slideCount]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            className="carousel-slide"
            src={slide.src}
            alt={slide.alt}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <button type="button" onClick={handlePrevClick} disabled={currentSlide === 0}>
          Prev
        </button>
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
        <button type="button" onClick={toggleAutoplay}>
          {autoplay ? 'Pause Autoplay' : 'Start Autoplay'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
