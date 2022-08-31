import React from "react";
//images and svgs
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/clock.svg";
import home2 from "../img/home2.png";
//styles
import { About, Image, Description } from "../styles";
import styled from "styled-components";
//tesst
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { fadeAnimation } from "../../anime";
function ServicesSection() {
  const [element, view] = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  console.log(view);
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return (
    <Services
      variants={fadeAnimation}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <Description>
        <h2>
          High <span>Quality</span> Services.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt={teamwork} />
              <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt={money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt={`Camera`} />
      </Image>
    </Services>
  );
}
//styled components
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
    font-size: 3rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 2rem 0;
    font-size: 1rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 15rem;

  .icon {
    display: flex;
    align-items: center;
    svg,
    img {
      width: 2rem;
    }

    h3 {
      margin-left: 1rem;
      padding: 0.4rem;
      color: black;
      background: white;
      font-size: 1.4rem;
    }
  }
`;
export default ServicesSection;
