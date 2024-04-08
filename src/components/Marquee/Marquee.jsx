import React from "react";
import styled, { keyframes } from "styled-components";

// Define the keyframes for the scrolling animation
const marqueeAnimation = keyframes`
  0% {
    transform: translateX(625%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled component for the container
const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #6f0d0d;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;

// Styled component for the scrolling text
const MarqueeText = styled.div`
  font-size: 1.5rem;
  display: inline-block;
  color: #fff;
  font-family: monospace;
  font-weight: bold;
  background-color: #6f0d0d;
  animation: ${marqueeAnimation} 30s linear infinite;
`;

// Define the Marquee component
const Marquee = ({ text }) => {
  return (
    <MarqueeContainer>
      <MarqueeText>{text}</MarqueeText>
    </MarqueeContainer>
  );
};

export default Marquee;
