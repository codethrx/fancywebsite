import React from "react";
//image
import home1 from "../img/home1.png";
//styles
import { Hide, About, Description, Image } from "../styles";
//framer motion
import { motion } from "framer-motion";
import { scaleAnimation, fadeAnimation, titleAnimation } from "../../anime";
function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true. </motion.h2>
          </Hide>
        </div>
        <motion.p variants={fadeAnimation}>
          Contact us for photography and videography ideas that you have.We have
          professionals with amazing skills.
        </motion.p>
        <button>Contact us</button>
      </Description>
      <Image>
        <motion.img
          variants={scaleAnimation}
          src={home1}
          alt="Giy with a camera."
        />
      </Image>
    </About>
  );
}

export default AboutSection;
