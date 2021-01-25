import React from "react";
import styled from "@emotion/styled";

const ButtonWrapper = styled.a`
  font-size: 16px;
  background-color: #ea8025;
  border: 2px solid #ea8025;
  padding: 6px 15px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  ${props => props.right && `margin-left: 25px;`}
`;

const Button = (props) => {
  return <ButtonWrapper right={props.right}>{props.children}</ButtonWrapper>;
};

export default Button;
