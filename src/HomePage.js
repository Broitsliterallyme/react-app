import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import img1 from "./assets/Img1.jpg";
import img2 from "./assets/Img1.jpg";
import img3 from "./assets/Img1.jpg";
import img4 from "./assets/Img1.jpg";


export default function HomePage() {
const images = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="Homecontainer">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="title"
      >
        Unbound: Breaking Barriers, Building Careers
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="description"
      >
        At Unbound, we believe that disability should never be a barrier to meaningful employment. Our mission is to connect individuals with disabilities to job opportunities that match their skills, abilities, and aspirations—helping them build independent and fulfilling careers.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="button-container"
      >
        <button className="button">Get Started</button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="carousel-container"
      >
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="carousel-slide">
              <img src={src} alt={`slide-${index}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}
