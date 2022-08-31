import React from "react";
import { About } from "../styles";
import styled from "styled-components";
function FaqSection() {
  return (
    <FAQ>
      <h2>
        Any Questions <span>FAQ.</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            magni?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            magni?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Different Payment Methods.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            magni?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            magni?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </FAQ>
  );
}
const FAQ = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  h4 {
    font-size: 2rem;
    color: white;
    font-weight: bold;
  }
  p {
    padding: 1rem 0rem;
  }
  .faq-line {
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0rem;
    background: #ccc;
  }
`;
export default FaqSection;
