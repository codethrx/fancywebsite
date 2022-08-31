import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Nav>
      <h1>
        <Link to="/" href="#" id="logo">
          Capture.
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact us</Link>
        </li>
      </ul>
    </Nav>
  );
}
const Nav = styled.nav`
  min-height: 10vh;
  background: #282828;
  padding: 1rem 10rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  #logo,
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.6rem;
  }
  h1 {
    flex: 1;
  }

  ul {
    display: flex;
    justify-content: space-between;

    flex: 1;
    li {
      list-style: none;
      position: relative;
    }
  }
`;
export default Navbar;
