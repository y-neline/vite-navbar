import React, {useEffect, useState} from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

import "./Carousel.css"

export const Carousel = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide( slide === 0 ? data.length -1 : slide - 1);

    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, [slide]); // Dependency array includes `slide` to reset the interval on slide change
    

  return (
    <div className='carousel'>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
        {data.map((item, idx) => {
            return <img src={item.src} alt={item.alt} key={item.idx}  className={slide === idx ? "slide" : "slide slide-hidden"}/>
        })}
        <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
        <span className='indicators'>
            {data.map((_,idx) => {
                return <button key={idx} onClick={() => setSlide(idx)} className={slide == idx ? "indicator" : "indicator indicator-inactive"}></button>
            })}
        </span>
    </div>
  )
}
