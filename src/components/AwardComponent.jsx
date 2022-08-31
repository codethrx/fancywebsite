import React from "react";
import styled from "styled-components";
function AwardComponent({ title, description }) {
  return (
    <Award>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </Award>
  );
}
const Award = styled.div`
  min-height: 30vh;
  flex: 1 1 20rem;
  h3 {
    padding: 1rem 0rem;
  }
  p {
    padding: 0.5rem 0rem;
  }
  .line {
    width: 70%;
    height: 0.4rem;
    background-color: #23d997;
  }
`;
export default AwardComponent;
