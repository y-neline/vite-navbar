import React from 'react'
import { Carousel } from '../Carousel/Carousel'
import "./Home.css"

import {slides} from "../../data/carouselData.json"

export const Home = () => {
  return (
    <div className='image-carousel'>
      <Carousel data={slides} />
    </div>
  )
}
