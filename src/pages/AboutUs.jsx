import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//motions and anime
import { motion } from "framer-motion";
import { pageAnimation } from "../../anime";
function AboutUs() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutUs;
