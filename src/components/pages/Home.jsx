import React from "react";
import Carousel from "../Carousel/Carousel";
import Bookstore from "../books/Bookstore";
import "./Home.css";

import { slides } from "../../data/carouselData.json";

export const Home = () => {
    return (
        <div>
            <div className="home">
                <img
                    className="main-img"
                    src="../../../public/images/main_edited2.jpg"
                />
                {/* <div className="image-carousel">
                    <Carousel slides={slides} interval={3000} />
                </div> */}
            </div>
            <div className="genres">
                <Bookstore />
            </div>
        </div>
    );
};
