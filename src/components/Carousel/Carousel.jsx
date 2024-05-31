import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    if (!animating) {
      setAnimating(true);
      setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!animating) {
      setAnimating(true);
      setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        nextSlide();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [animating]);

  return (
    <div className='carousel'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
      <div className='slides-wrapper'>
        {data.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={`slide ${slide === idx ? 'active' : ''} ${animating ? 'animating' : ''}`}
            onAnimationEnd={() => setAnimating(false)}
          />
        ))}
      </div>
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
      <div className='indicators'>
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!animating) {
                setAnimating(true);
                setSlide(idx);
              }
            }}
            className={`indicator ${slide === idx ? 'active' : ''}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
