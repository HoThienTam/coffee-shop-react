import React from "react";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import Button from "../../Components/Button";
import colors from "../../constants/colors";

const SectionWrapper = styled.section`
  background: ${(props) => (props.inverse ? colors.offWhite : colors.white)};
  padding: 80px 0 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 15px;
`;

const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    flex: 0 0 calc(33.333% - 30px);
  }
`;

const Title = styled.h2`
  color: ${colors.orange};
  font-weight: 700;
  font-family: "Big Shoulders Display", Roboto;

  :after {
    content: "";
    height: 4px;
    background: ${colors.offWhite};
    width: 50%;
    display: block;
  }
`;

const Section = ({ children, title, inverse, btn }) => {
  return (
    <SectionWrapper inverse={inverse}>
      <Container>
        <SectionHeader>
          <Title>{title.toUpperCase()}</Title>
          {btn && <Button color={colors.black}>{btn.toUpperCase()}</Button>}
        </SectionHeader>
        <SectionContent>{children}</SectionContent>
      </Container>
    </SectionWrapper>
  );
};

export default Section;
