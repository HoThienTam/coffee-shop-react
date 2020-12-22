import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Carousel from "./Carousel"
const Home = (props) => {
  return (
    <Container>
      <Header />
      <Carousel/>
    </Container>
  );
};

export default Home;
