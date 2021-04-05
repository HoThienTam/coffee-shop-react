import React from "react";
import styled from "@emotion/styled";
import colors from "../../constants/colors";

const ButtonWrapper = styled.a`
  border: 2px solid ${(props) => (props.color ? props.color : colors.white)};
  padding: 6px 15px;
  font-weight: 600;
  font-family: "Big Shoulders Display", Roboto;
  color: ${colors.white};
  cursor: pointer;
  display: inline-block;
  font-size: 17px;
  position: relative;
  z-index: 1;
  transition: color 0.45s ease-in-out;
  ${(props) => props.right && `margin-left: 25px;`}

  :before {
    content: "";
    background-color: ${(props) => (props.color ? props.color : colors.white)};
    transform: scale(1, 1);
    transform-origin: left center;
    transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  :hover {
    background-color: transparent;
    color: ${(props) => (props.color ? props.color : colors.white)};
  }
  :hover:before{
    transform: scale(0, 1);
    transform-origin: right center;
  }
`;

const Button = (props) => {
  const { color } = props;
  return (
    <ButtonWrapper right={props.right} color={color}>
      {props.children}
    </ButtonWrapper>
  );
};

export default Button;
