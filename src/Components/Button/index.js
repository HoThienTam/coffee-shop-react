import React from "react";
import styled from "@emotion/styled";

const ButtonWrapper = styled.a`
  font-size: 16px;
  background-color: #ea8025;
  border: 2px solid #ea8025;
  padding: 6px 15px;
  font-weight: 500;
`;

const Button = (props) => {
  return <ButtonWrapper>{props.children}</ButtonWrapper>;
};

export default Button;
