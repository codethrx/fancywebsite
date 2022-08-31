import React from "react";
//react router
import { Link } from "react-router-dom";
//images
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";
//styles.
import styled from "styled-components";
//importing motion and animes
import { motion } from "framer-motion";
import {
  pageAnimation,
  scaleAnimation,
  lineAnimation,
  fadeAnimation,
} from "../../anime";

function OurWork() {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
      style={{ background: "white", color: "black" }}
    >
      <Movie>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <Line variants={lineAnimation} />
        <Link to="/work/the-athlete">
          <div className="hide">
            <motion.img variants={scaleAnimation} src={athlete} alt="athlete" />
          </div>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <Line />
        <Link to="/work/the-racer">
          <img src={theracer} alt="racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <Line />
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodvibes" />
        </Link>
      </Movie>
    </Work>
  );
}
//styled components
const Work = styled(motion.div)`
  color: white;
  min-height: 100vh;
  padding: 2rem 10rem;
  overflow: hidden;
  color: black;
  .hide {
    overflow: hidden;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  h2 {
    padding: 0.8rem 0rem;
    color: black;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const Line = styled(motion.div)`
  width: 100%;
  height: 0.4rem;
  background: #23d997;
  margin-bottom: 2rem;
`;
export default OurWork;
