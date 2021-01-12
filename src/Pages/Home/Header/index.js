import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../../Components/NavBar";
import { HeaderInner } from "./styles";

const Header = (props) => {
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    const scroll = window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <HeaderInner scroll={scrollPos}>
      <Container>
        <NavBar></NavBar>
      </Container>
    </HeaderInner>
  );
};

export default Header;
