import React from "react";
import styled from "@emotion/styled";

const Dot = styled.span`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${(active) => (active ? "black" : "white")};
`;

const DotWrapper = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dots = ({ slides, activeSlide }) => {
  return (
    <DotWrapper>
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeSlide === i} />
      ))}
    </DotWrapper>
  );
};

export default Dots;
