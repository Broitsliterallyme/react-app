import React from "react";
import { useCallback } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import Img1 from "./assets/Img1.jpg";
import Img2 from "./assets/Img1.jpg";
import Img3 from "./assets/Img1.jpg";
import Img4 from "./assets/Img1.jpg";

import "./AboutUsPage.css";
export default function AboutUs() {
const imagePaths = [Img1, Img2, Img3, Img4];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <div className="about-container">
<div className="particles-container">
<Particles id="tsparticles" url="/Particles.json" init={particlesInit} loaded={particlesLoaded} />
</div>
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="about-title"
      >
        About Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="about-description"
      >
About Us – Unbound
At Unbound, we believe that talent knows no boundaries. Our mission is to create an inclusive job market where disabled individuals can access meaningful employment and build sustainable careers. Across the world, and especially in Nepal, people with disabilities face significant barriers in securing jobs due to workplace inaccessibility, societal biases, and a lack of opportunities. Many skilled individuals remain unemployed, while others lack access to proper training to enter the workforce. Unbound was created to change that.

Our platform is designed to connect skilled disabled individuals with companies that value inclusivity. We enable employers to find the right talent efficiently while ensuring that job seekers are placed in workplaces that accommodate their specific needs. For those who require skill development, we offer training programs to help them gain the necessary expertise to enter the job market with confidence. Whether it’s matching individuals to suitable job roles or equipping them with in-demand skills, Unbound ensures that no one is left behind.


     </motion.p>

<div className="team-slider">
        <Slider {...sliderSettings}>
          {imagePaths.map((image, index) => (
            <div key={index} className="team-slide">
                <img src={image} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
