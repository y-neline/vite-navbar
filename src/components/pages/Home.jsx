import React from "react";
import Carousel from "../Carousel/Carousel";
import GenreCarousel from "../genres/GenreCarousel";
import "./Home.css";

import { slides } from "../../data/carouselData.json";

export const Home = () => {
    return (
        <div className="home">
            <div className="image-carousel">
                <Carousel slides={slides} interval={3000} />
            </div>
            <div className="genres">
                <GenreCarousel />
            </div>
        </div>
    );
};
