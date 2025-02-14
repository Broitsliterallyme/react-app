import React from "react";
import { motion } from "framer-motion";
import "./UnboundStoriesPage.css";
import img1 from "./assets/Img1.jpg";
import img2 from "./assets/Img1.jpg";
import img3 from "./assets/Img1.jpg";
const stories = [
  {
    name: "John Doe",
    image: {img1},
    story: "John, a visually impaired software developer, found his dream job through our platform.",
  },
  {
    name: "Sarah Smith",
    image: {img2},
    story: "Sarah, a wheelchair user, started a remote marketing career thanks to our job listings.",
  },
  {
    name: "Michael Lee",
    image: {img3},
    story: "Michael, who has hearing impairment, is now thriving as a data analyst.",
  },
];

const SuccessStories = () => {
  return (
    <div className="stories-container">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Success Stories
      </motion.h1>
      <p className="intro-text">
        Inspiring journeys of individuals who found opportunities through our platform.
      </p>
      <div className="stories-grid">
        {stories.map((person, index) => (
          <motion.div 
            key={index} 
            className="story-card"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={person.image} alt={person.name} className="story-image" />
            <h3>{person.name}</h3>
            <p>{person.story}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
