import React, { memo } from "react";
import styled from "@emotion/styled";

const Dot = styled.span`
  transition: all ease 0.3s;
  width: ${(props) => (props.active ? "25px" : "8px")};
  height: 8px;
  background: #f7f7ff;
  margin: 0 10px;
  border-radius: 30px;
  cursor: pointer;
`;

const DotWrapper = styled.div`
  position: absolute;
  bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  left: 50%;
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

export default memo(Dots);
