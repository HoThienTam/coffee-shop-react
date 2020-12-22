import React from "react";
import ArrowButton from "./ArrowButton";

const Carousel = (props) => {
  return (
    <div>
      <ArrowButton direction="left" />
      <ArrowButton direction="right" />

    </div>
  );
};

export default Carousel;
