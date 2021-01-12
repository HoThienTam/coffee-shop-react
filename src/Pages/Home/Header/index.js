import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../../Components/NavBar";
import { HeaderInner } from "./styles";

const Header = (props) => {

  return (
    <HeaderInner>
      <Container>
        <NavBar></NavBar>
      </Container>
    </HeaderInner>
  );
};

export default Header;
