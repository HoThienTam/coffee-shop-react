import styled from "@emotion/styled";

export const Slider = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

export const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("${(props) => props.content}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
`;
