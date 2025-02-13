import React from "react";
import { motion } from "framer-motion";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="title"
      >
        Empowering Abilities, Unlocking Opportunities
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="description"
      >
        Your gateway to inclusive job opportunities. We connect employers with talented individuals, ensuring equal chances for everyone.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="button-container"
      >
        <button className="button">Get Started</button>
      </motion.div>
    </div>
  );
}
