import React from "react";
import styled from "styled-components";

const Line = styled.div`
  width: 3.5rem;
  height: 0.3rem;
  background-color: green;
  transition: all 0.3s;
  :not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  order: 1;
  margin-left: 2rem;
  cursor: pointer;
  
  z-index: 150;

  @media screen and (min-width: ${props => props.theme.responsive.tabLand}) {
    display: none;
  }

  @media screen and (max-width: ${props => props.theme.responsive.tabLand}) {
    & {
       align-self: flex-start; 
    }
}

  ${Line}:nth-child (1) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg)  translate(0, 0)" : "rotate(0)  translate(0, 0)"};
  }
  ${Line}:nth-child (2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }
  ${Line}:nth-child (3) {
    transform: ${({ isOpen }) =>
      isOpen
        ? "rotate(-45deg) translate(1rem, -1rem)"
        : "rotate(0) translate(0, 0)"};
  }
`;

export default function BurgerMenu({ isOpen, handleClick }) {
  console.log("isOpen is: ", isOpen);
  return (
    <Burger isOpen={isOpen} onClick={() => handleClick()}>
      <Line />
      <Line />
      <Line />
    </Burger>
  );
}
