import React, { memo } from "react";
import styled from "@emotion/styled";

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 25px;
  ${(props) => (props.direction === "right" ? `right: 25px` : `left: 25px`)};
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #e9ecef;
  cursor: pointer;
  color: #fff;
`;

const ArrowButton = ({ direction, handleClick }) => {
  return (
    <ButtonWrapper onClick={handleClick} direction={direction}>
      {direction === "right" ? (
        <i className="fa fa-chevron-right" data-slide="next" />
      ) : (
        <i className="fa fa-chevron-left" data-slide="prev" />
      )}
    </ButtonWrapper>
  );
};

export default memo(ArrowButton);
