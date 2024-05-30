import React, {useEffect, useState} from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import "./Carousel.css"

export const Carousel = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [slide]);

    return (
        <div className='carousel'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
            {data.map((item, idx) => {
                return (
                    <img 
                        src={item.src} 
                        alt={item.alt} 
                        key={idx} 
                        className={`slide ${slide === idx ? "active" : ""}`}
                    />
                );
            })}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
            <div className='indicators'>
                {data.map((_, idx) => {
                    return (
                        <button 
                            key={idx} 
                            onClick={() => setSlide(idx)} 
                            className={`indicator ${slide === idx ? "active" : ""}`}
                        ></button>
                    );
                })}
            </div>
        </div>
    )
}
